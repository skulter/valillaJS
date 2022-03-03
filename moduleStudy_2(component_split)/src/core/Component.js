export default class Component {
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props; // props는 부모 컴포넌트가 자식 컴포넌트에게 상태 혹은 메소드를 넘겨주기 위해서 필요하다.
    this.setup();
    this.setEvent(); // 생성자에서 한번만 실행
    this.render();
  }
  setup() {}
  mounted() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted(); // render 후에 mounted가 실행 된다. // mounter는 render 이후에 추가적인 기능을 수행하기 위해서이다.
    // this.setEvent(); 렌더할때마다 setEvent를 실행하기 대문에 생성자에서 한번만 실행하도록 수정
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  // 이벤트 버블링 추상화
  // 이벤트 버블링을 통한 등록과정을 메소드로 만들어서 사용하면 코드가 더욱 깔끔해진다.
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) => {
      return children.includes(target) || target.closest(selector);
    };

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}

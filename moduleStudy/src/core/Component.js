export default class Component {
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.setEvent(); // 생성자에서 한번만 실행
    this.render();
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
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

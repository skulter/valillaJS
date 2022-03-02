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

}

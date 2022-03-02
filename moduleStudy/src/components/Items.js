import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <ul>
        ${items
          .map(
            (item, key) =>
              `<li>${item} <button class="deleteBtn" data-index="${key}">삭제</button></li>`
          )
          .join("")}
      </ul>
      <button class="addBtn">추가</button>
    `;
  }

  setEvent() {
    /// 해당 코드는 이벤트 버블링을 사용하면 훨씬 직관적으로 처리가 가능하다.
    /// 이벤트 버블링 & 이벤트 캡쳐
    /// https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81---event-bubbling

    // this.$target.querySelector(".addBtn").addEventListener("click", () => {
    //   const { items } = this.$state;
    //   this.setState({ items: [...items, `item${items.length + 1}`] });
    // });

    // this.$target.querySelectorAll(".deleteBtn").forEach((deleteBtn) => {
    //   deleteBtn.addEventListener("click", ({ target }) => {
    //     const items = [...this.$state.items];
    //     items.splice(target.dataset.index, 1);
    //     this.setState({ items });
    //   });
    // });

    /// 이벤트 버블링 사용
    this.$target.addEventListener("click", ({ target }) => {
      const items = [...this.$state.items];

      if (target.classList.contains("addBtn")) {
        this.setState({ items: [...items, `item${items.length + 1}`] });
      }

      if (target.classList.contains("deleteBtn")) {
        items.splice(target.dataset.index, 1);
        this.setState({items});
      }
    });
  }
}

import Component from "../core/Component.js";

export default class Items extends Component {
  get filteredItems() {
    const { isFilter, items } = this.$state;
    return items.filter(
      ({ active }) =>
        (isFilter === 1 && active) ||
        (isFilter === 2 && !active) ||
        isFilter === 0
    );
  }

  setup() {
    this.$state = {
      isFilter: 0,
      items: [
        {
          seq: 1,
          contents: "item1",
          active: false,
        },
        {
          seq: 2,
          contents: "item2",
          active: true,
        },
        {
          seq: 3,
          contents: "item3",
          active: true,
        },
        {
          seq: 4,
          contents: "item4",
          active: true,
        },
        {
          seq: 5,
          contents: "item5",
          active: true,
        },
        {
          seq: 6,
          contents: "item6",
          active: true,
        },
      ],
    };
  }

  template() {
    return `
      <header>
        <input type="text" class="appender" placeholder="아이템 내용 입력" />
      </header>
      <main>
        <ul>
          ${this.filteredItems
            .map(
              ({ contents, active, seq }) => `
            <li data-seq="${seq}">
              ${contents}
              <button class="toggleBtn" style="color: ${
                active ? "#09F" : "#F09"
              }">
                ${active ? "활성" : "비활성"}
              </button>
              <button class="deleteBtn">삭제</button>
            </li>
          `
            )
            .join("")}
        </ul>
      </main>
      <footer>
        <button class="filterBtn" data-is-filter="0">전체 보기</button>
        <button class="filterBtn" data-is-filter="1">활성 보기</button>
        <button class="filterBtn" data-is-filter="2">비활성 보기</button>
      </footer>
    `;
  }

  setEvent() {
    this.addEvent("keyup", ".appender", ({ key, target }) => {
      if (key !== "Enter") return;

      const { items } = this.$state;
      const seq = Math.max(0, ...items.map((v) => v.seq)) + 1;
      const contents = target.value;
      const active = false;

      this.setState({
        items: [...items, { seq, contents, active }],
      });
    });

    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const items = [...this.$state.items];
      const seq = Number(target.closest("li").dataset.seq);
      items.splice(
        items.findIndex((v) => v.seq === seq),
        1
      );
      this.setState({ items });
    });

    this.addEvent("click", ".filterBtn", ({ target }) => {
      this.setState({ isFilter: Number(target.dataset.isFilter) });
    });

    this.addEvent("click", ".toggleBtn", ({ target }) => {
      const items = [...this.$state.items];
      const seq = Number(target.closest("li").dataset.seq);
      const test = items.findIndex((v)=>v.seq === seq);
      items[test].active = !items[test].active
      this.setState({items})
    });
  }
}

import { Component } from "./core/Component.js";
import { setA, setB, store } from "./store.js";
import { TestComponent } from "./TestComponent.js";

const InputA = () =>
  `<input id="stateA" value="${store.getState().a}" size="5" />`;
const InputB = () =>
  `<input id="stateB" value="${store.getState().b}" size="5" />`;
const Calculator = () =>
  `<p>a + b = ${store.getState().a + store.getState().b}</p>`;

const testComopnent = () => 
  `<div id="test">asdasdas </div>`;

export class App extends Component {
  template() {
    return `
    ${InputA()}
    ${InputB()}
    ${Calculator()}
    ${testComopnent()}
  `;
  }

  setEvent() {
    const { $el } = this;
    $el.querySelector("#stateA").addEventListener("keyup", ({ target }) => {
      store.dispatch(setA(Number(target.value)));
    });

    $el.querySelector("#stateB").addEventListener("keyup", ({ target }) => {
      store.dispatch(setB(Number(target.value)));
    });
  }

  mounted() {
    new TestComponent(document.querySelector("#test"));
  }
}

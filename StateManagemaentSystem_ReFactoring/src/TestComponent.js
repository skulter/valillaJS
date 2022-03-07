import { Component } from "./core/Component.js";
import { setA, setB, store } from "./store.js";

const InputC = () =>
  `<input id="stateC" value="${store.getState().a + store.getState().b} " size="5" />`;

export class TestComponent extends Component {
  template() {
    return `
    ${InputC()}
  `;
  }
 
}

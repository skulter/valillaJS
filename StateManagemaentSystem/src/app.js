import Publish from "../component/Pulbish.js";
import Subscriber from "../component/subscriber.js";

export default function app() {
  const state = new Publish({
    a: 10,
    b: 20,
  });

  const add = new Subscriber(() => console.log(`a + b = ${state.a + state.b}`));
  const mul = new Subscriber(() => console.log(`a * b = ${state.a * state.b}`));

  add.subscribe(state);
  mul.subscribe(state);

  state.notify();
  state.setState({ a: 100, b: 200 });
}

export default class Publish {
  // 발행기관
  #state; // #은 private
  #observers = new Set();
  constructor(state) {
    this.#state = state;
    Object.keys(state).forEach((key) => {
      console.log(key, this.#state[key]);
      Object.defineProperty(this, key, {
        get: () => this.#state[key],
      });
    });
  }

  // 내부에 변화가 생길경우 구독자에게 알리는것이 핵심
  setState(newState) {
    // 내부에 변화가 생김
    this.#state = { ...this.#state, ...newState };
    this.notify();
  }

  subscribeAdd(subscriber) {
    // 구독자 등록
    this.#observers.add(subscriber);
  }

  notify() {
    //구독자에게 알림
    this.#observers.forEach((fn) => fn());
  }
}

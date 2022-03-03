export default class Subscriber {
    #fn;

    constructor(publishSetState) {
      // 발행기관에 변화가 생길때 하는 일
      this.#fn = publishSetState;
    }

    subscribe(publisher) {
      publisher.subscribeAdd(this.#fn);
    }
  }
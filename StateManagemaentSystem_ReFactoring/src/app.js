export default function app() {
  //#region 여러개의 속성 관리하기
  // let currentObserver = null;
  // const state = {
  //   a: 10,
  //   b: 20,
  // };
  // const stateKeys = Object.keys(state);
  // for (const key of stateKeys) {
  //   let _value = state[key];
  //   const observers = new Set();
  //   Object.defineProperty(state, key, {
  //     get() {
  //       console.dir(observers)
  //       if (currentObserver) observers.add(currentObserver);
  //       return _value;
  //     },
  //     set(value) {
  //       _value = value;
  //       observers.forEach((observer) => observer());
  //     },
  //   });
  // }
  // const 덧셈_계산기 = () => {
  //   currentObserver = 덧셈_계산기;
  //   console.log(`a + b = ${state.a + state.b}`);
  // };
  // const 뺄셈_계산기 = () => {
  //   currentObserver = 뺄셈_계산기;
  //   console.log(`a - b = ${state.a - state.b}`);
  // };
  // 덧셈_계산기();
  // 뺄셈_계산기();
  // state.a = 100;
  // state.b = 200;
  //#endregion

  //#region 함수화
  let currentObserver = null;

  const observe = (fn) => {
    currentObserver = fn;
    fn();
    currentObserver = null;
  };

  const observable = (obj) => {
    Object.keys(obj).forEach((key) => {
      let _value = obj[key];
      const observers = new Set();

      Object.defineProperty(obj, key, {
        get() {
          if (currentObserver) observers.add(currentObserver);
          return _value;
        },

        set(value) {
          _value = value;
          observers.forEach((fn) => fn());
        },
      });
    });
    return obj;
  };

  const 상태 = observable({ a: 10, b: 20 });
  observe(() => console.log(`a = ${상태.a}`));
  observe(() => console.log(`b = ${상태.b}`));
  observe(() => console.log(`a + b = ${상태.a} + ${상태.b}`));
  observe(() => console.log(`a * b = ${상태.a} + ${상태.b}`));
  observe(() => console.log(`a - b = ${상태.a} + ${상태.b}`));

  상태.a = 100;
  상태.b = 200;
  //#endregion
}

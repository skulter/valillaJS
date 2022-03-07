let currentObserver = null;

// export const observable = (obj) => {
//   Object.keys(obj).forEach((key) => {
//     let _value = obj[key];
//     const observers = new Set();

//     Object.defineProperty(obj, key, {
//       get() {
//         if (currentObserver) observers.add(currentObserver);
//         return _value;
//       },
//       set(value) {
//         // 최적화 상태가 변경되지 않았을 경우 리렌더링 방어
//         if (value === _value) return; // 숫자, 문자열, null, undefilned 등 원시타입
//         if (JSON.stringify(_value) === JSON.stringify(value)) return; // 배열이나 객체
//         //Set, Map, WeekSet, WeekMap 같은것들은 추가 적인 검사로직 필요

//         _value = value;
//         observers.forEach((fn) => fn());
//       },
//     });
//   });
//   return obj;
// };

export const observable = (obj) => {
  const observerMap = {};
  return new Proxy(obj, {
    get(target, name) {
      observerMap[name] = observerMap[name] || new Set();
      if (currentObserver) observerMap[name].add(currentObserver);
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      if (JSON.stringify(target[name]) === JSON.stringify(value)) return true;
      target[name] = value;
      console.log(observerMap[name])
      observerMap[name].forEach(fn => fn());
      return true;
    },
  });
};

export const observe = (fn) => {
  currentObserver = debounceFrame(fn);
  fn();
  currentObserver = null;
};

const debounceFrame = (callback) => {
  let currentCallback = -1;
  return () => {
    cancelAnimationFrame(currentCallback);
    currentCallback = requestAnimationFrame(callback);
  };
};

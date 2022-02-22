const x = function () {
  const test = "test";

};
class y {
    constructor() {
        this.test = "test2";
    }
}

const test = Object.getPrototypeOf(x);

console.dir(window.test)
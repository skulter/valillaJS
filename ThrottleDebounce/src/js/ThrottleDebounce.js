// var debounce = null;
let throttle;
let debounce;
function keyUpFn(el) {
  // normal
  // console.log("normal", el.target.value, new Date().getTime());
  // debounce
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    console.log("debounce", el.target.value, new Date().getTime());
  }, 500);

  clearTimeout(debounce);
  debounce = setTimeout(() => {
    console.log("debounce", el.target.value, new Date().getTime());
  }, 500);

  // throttle
  if (!throttle) {
    setTimeout(() => {
      console.log("throttle", throttle, new Date().getTime());
      throttle = null;
    }, 500);
  }
  throttle = el.target.value;
}
document.getElementById("search").addEventListener("keyup", keyUpFn);

// normal h         1583658583270
// normal he        1583658583582
// normal hel       1583658583878
// normal hell      1583658584182
// throttle hell    1583658584271
// 입력이 끝남
// normal hello     1583658584534
// debounce hello   1583658585036
// throttle hello   1583658585536
// 예제 참고
// https://pks2974.medium.com/throttle-%EC%99%80-debounce-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-2335a9c426ff

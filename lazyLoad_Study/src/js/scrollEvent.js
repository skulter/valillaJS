const images = document.querySelectorAll(".lazy"); // 모든 이미지 파일 선택
console.log(images);
window.addEventListener("scroll", (event) => {
  images.forEach((img) => {
    // 각 이미지마다
    const rect = img.getBoundingClientRect().top;
    console.log(img.src, rect, window.innerHeight);
    if (rect <= window.innerHeight) {
      // 이미지가 보일 타이밍을 계산
      console.log(img.dataset.lazy);
      const src = img.dataset.lazy; // img 태그의 data-lazy에 저장해둔 이미지 경로를 붙여준다.
      img.setAttribute("src", src);
      img.classList.add("fade"); // 트랜지션 추가
    }
  });
});

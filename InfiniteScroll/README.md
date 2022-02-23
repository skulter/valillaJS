# 무한 스크롤 구현

무한 스크롤을 구현해 보았다.

무한 스크롤의 종류는 scrollEvent를 이용하거나 IntersectionObserver를 이용하는 방법 두가지가 있다.
scrollEvent는 요소가 많아지면 브라우저 성능에 문제가 생겨 IntersectionObserver를 이용해서 구현하는것을 추천한다.

참조 :

> https://heropy.blog/2019/10/27/intersection-observer/
> https://velog.io/@dev-tinkerbell/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%EB%B0%A9%EB%B2%95
# 모듈 공부 (VanillaJS로 웹 컴포넌트 만들기)

## moduleStudy_1을 보고 오자.

이번장은 컴포넌트 분할하기이다.

구조는 아래와 같다.
- 기존의 entry point가 app.js에서 main.js가 되었다.
- App Component가 추가되었다.
- Item에서 ItemAppender, ItermFilter 등이 분리 되었다.

```
.
├── index.html
└── src
    ├── App.js               # main에서 App 컴포넌트를 마운트한다.
    ├── main.js              # js의 entry 포인트
    ├── components
    │   ├── ItemAppender.js
    │   ├── ItemFilter.js
    │   └── Items.js
    └── core
        └── Component.js
```

참조 :

> https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA


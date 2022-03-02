# 모듈 공부 (VanillaJS로 웹 컴포넌트 만들기)

무한 스크롤을 구현해 보았다.

VanillaJS로 웹 컴포넌트를 만들어보자.
이전에는 JQuery를 사용하여 개발을 하였지만 이제는 모듈화를 통하여 코드 관리를 하게 되었다.
또한 JQuery에서는 DOM API를 이용하여 DOM을 쉽게 조작할수 있었지만 모던 자바스크립트에서는 `DOM을 직접적으로 다루지않고 상태(State)를 기준으로 DOM을 렌더링`하는 형태로 발전하였다.
DOM이 변하는 경우가 State에 종속되어 버렸다. 반대로 말하면, State가 변하지 않을 경우 DOM이 변하면 안되는 것이다.

`React는 컴포넌트 단위로 설계되고 개발`된다.
각 컴포넌트마다 컴포넌트를 렌더링을할때  필요한 상태를 관리하게 되었으며, Proxy 혹은 Observer patten등을 이용하여 이를 구현한다.

이번 공부를 통하여 모듈, Component가 어떻게 구성되었고 사용하는지 제대로 이해해보자.

모듈화 기본 구성
보통 한 파일안에 모든 기능을 작성하는 경우는 없다.
```
├── index.html
└── src
    ├── app.js              # ES Module의 entry file
    ├── components          # Component 역할을하는 것들
    │   └── Items.js
    └── core                # 구현에 필요한 코어들
        └── Component.js
```

참조 :

> https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AA
# React Props Drilling

- React Component 가 여러 겹으로 감싸고 있을 때, 상위 Component state를 생성하고, 그 state를 사용하여 하위(child) 컴포넌트들이 rendering을 하거나 state를 변경해야 하는 경우가 아주 많다.
- 상위 Component에서 여러 겹으로 하위 Component로 state를 전달할 때 중간에 위치한 Component들은 실제로 필요하지 않지만 부모 Component로부터 props를 받아서 자식 Component에게 계속해서 props를 Toss해야 하는 경우가 발생한다.
- 이러한 Drilling 현상을 방지하기 위하여 Store 라는 개념이 생겨났다. Drilling 현상을 방지하기 위하여 기본 React 기능 외에 `Redux`, `Mobx`, `recoil` 등의 3rd part LIB를 사용한다.
- 3rd part LIB들이 오히려 React를 학습하는 것보다 많은 어려운 경우가 많다. 그래서 React에서는 Context.Provider 라는 도구를 제공하여 단지 Store 기능만을 수행하도록 마련을 해 놓았다.

# React Context.Provider 를 사용하여 Drilling 문제 해결하기

- 3rd part LIB를 사용하여 Drilling 문제를 해결할 수 있지만, 학습곡선이 매우 커서 큰 프로젝트가 아니면 오히려 불편할 수 있다.
- 현재 React에서는 Context.Provider 를 사용하여 일부 문제를 해결할 수 있다.
- 하지만 Context.Provider를 무분별하게 사용한다면 Project의 유지보수성이 떨어지는 문제가 발생할 수 있다.
- 또한 React 버전이 올라갈수록 여러가지 문제가 해결되고 있기때문에 잘 선택해서 사용하면 좋은 도구가 된다.
- context-v0에서는 일반적인 Drilling이 적용되는 코드를 보았고, context-v2에서는 매우 간단하게 Context.Provider를 적용해 본다.

# Context.Provider의 향상된 사용

- context-v2에서는 Context.Provider의 간단한 사용법을 확인했다.
- 실제 사용해야 할 state 변수와 여러가지 함수들을 만드는 곳과 보관하는 곳이 별도의 장소가 되어 프로젝트가 커지면 관리가 불편해질 수 있다.
- 관리할 요소들(state, 여러가지 함수)과 store를 한 곳에서 관리하는 코드를 작성한다.

# 합성 - Composition

- 일반적인 상속과 조금 차이를 두는 개념
- 서로 다른 객체를 여러개 묶어서 새로운 기능이나 객체를 구성하는 것이다.
- 상속 : is-a, 합성 : has-a

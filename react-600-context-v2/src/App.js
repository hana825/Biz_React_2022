import logo from "./logo.svg";
import "./App.css";
import Main from "./comps/Main";
import AppContext from "./context/Context";
import { useState } from "react";

function App() {
  // address state 변수가 생성되고
  // address state 변수를 변경시키는 setAddress 함수를 선언
  const [address, setAddress] = useState({
    a_name: "홍길동",
    a_tel: "010-111-1111",
    a_address: "서울특별시",
  });
  const [addrList, setAddrList] = useState([]);

  const [isEdit, setIsEdit] = useState([]);
  // Store에 보관하기 위하여 bundling
  // Store에 보관할 때 개별적인 요소들로 보낼 수 있지만 관리 측면에서 bundling 하는 것이 좋다.
  const props = {
    address,
    setAddress,
    addrList,
    setAddrList,
    isEdit,
    setIsEdit,
  };

  /*
  프로젝트에 사용할 state 변수와 setState 함수를 모두 App.js(가장 상위 Component)로 이동하고
  Main Component를 AppContext.Provider로 감싸고 AppContext.Provider에 value 변수로 state 변수와 setState 함수를 전달하였다.
  이제 모든 변수와 함수는 AppContext.Provider의 store에 보관된다.
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="로고" />
      </header>

      <AppContext.Provider value={props}>
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;

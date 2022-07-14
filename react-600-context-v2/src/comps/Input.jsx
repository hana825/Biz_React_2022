// Store(Context.Provider) import
import AppContext from "../context/Context";
import { useContext } from "react";
const Input = () => {
  // Context.Provider Store에 보관된 2개의 state 변수와 2개의 setState 함수를 사용요청한다.
  const { address, setAddress, addrList, setAddrList } = useContext(AppContext);
  // address state (객체)변수에서 각 요소를 추출 : Input box에서 사용
  const { a_name, a_tel, a_address } = address;
  /*
    input box 의 value 속성에 변수를 할당하면
    input box 는 read only 상태가 된다
    만약 화면의 input box 에 키보드로 문자열을 입력하면
    value 속에 연결된 변수(state, 일반)의 값을 직접 변경하는
    성질이 발생한다
    react 에서는 state 변수를 임의로 변경하는것이 금지 되어 있다
    이러한 특성을 유지하기 위하여 value={변수} 형태로 할당이 되면
    쓰기금지(read only) 성질이 발생한다

    이럴때 defaultValue 를 사용하여 변수를 할당 할수도 있지만
    간혹 defaultValue 로 설정된 변수값은 state 의 특성을
    제대로 발휘 하지 못한다 그래서 defaultValue 보다는 value 속성을 사용

    input box 에 문자열을 키보드로 입력하면
    input box 의 onChange event를 사용하여 setState() 함수를 통하여
    state 변수에 값을 변경하도록 하는 코드를 작성해야 한다

    input box 에 입력된 문자열을 onChange 이벤트가 가로채고
    가로챈 문자열을 setState 함수를 통하여 state 변수를 변경하고
    state 의 rendering 특성에 따라 input box 에 문자열이
    나타나는 코드가 된다

  */
  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    //   [name] = value;

    setAddress({ ...address, [name]: value });
  };
  /*
저장버튼을 클릭하면 address에 저장된 데이터를 addrList에 추가하기
addrList도 Main에서 만든 state 배열이다.
때문에 addrList에 데이터를 추가하려면 Main에서 함수를 생성하여
props로 전달하고 여기의 onClickEvent에서 호출하여 addrList에 추가한다.

Main setAddrList 함수를 props로 전달받고
setAddrList 함수를 사용하여 addrList에 추가하는 코드를 작성한다.
*/
  const onClickEvent = (e) => {
    // addrList 배열을 복제하고 address state 변수를 추가하여 새로운 addrList를 setting
    setAddrList([...addrList, address]);
  };
  return (
    <>
      <input
        onChange={onChangeEvent}
        name="a_name"
        placeholder="이름"
        value={a_name}
      />
      <input
        onChange={onChangeEvent}
        name="a_tel"
        placeholder="전화번호"
        value={a_tel}
      />
      <input
        name="a_address"
        onChange={onChangeEvent}
        placeholder="주소"
        value={a_address}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;

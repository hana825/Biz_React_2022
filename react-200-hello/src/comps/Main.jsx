import Sub from "./Sub";
const Main = () => {
  const comp = (
    <div>
      <h1>반갑습니다</h1>
      <p>React를 사용하여 Component를 만들고 있음</p>
      <p>3 + 4 = {3 + 4}</p>
      <Sub name="대한민국만세" />
    </div>
  );
  return comp;
};
export default Main;

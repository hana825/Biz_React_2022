/*
    fetch 함수를 사용하여 data.go.kr의 API 연결하기
*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "xVxp8Zp%2FWTfSjiIob6HBpYFWxZ%2BRgqRu3enQFsoFycuF5rxVjpBLGwUnEGavONsOetB2nnS7wMFufCfhPfc8pg%3D%3D";
const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};
export { fetchData };

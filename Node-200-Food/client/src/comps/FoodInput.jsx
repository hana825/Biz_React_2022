import { useState, useEffect } from "react";
import moment from "moment";
import FoodList from "./FoodList";

const FoodInput = () => {
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/bucket/list");
    const jsonBuck = await response.json();
    setFoodList(jsonBuck);
  };
  useEffect(() => {
    fetchFoodList();
  }, []);

  const click = () => {
    const f_food = document.querySelector("input[name='f_food']");
    const f_eat = document.querySelector("input[name='f_eat']");
    const f_cal = document.querySelector("input[name='f_cal']");

    const food = {
      f_date: moment().format("YYYY[-]MM[-]DD"),
      f_food: f_food.value,
      f_eat: f_eat.value,
      f_cal: f_cal.value,
      f_tcal: f_eat.value * f_cal.value,
    };
    setFoodList([...foodList, food]);

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };
    fetch("http://localhost:3000/food", postData)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchFoodList();
        }
      });
  };
  return (
    <>
      <input
        name="f_food"
        placeholder="식품명"
        className="w3-input w3-border w3-round"
      />
      <input
        name="f_eat"
        placeholder="섭취량"
        className="w3-input w3-border w3-round"
      />
      <input
        name="f_cal"
        placeholder="칼로리"
        className="w3-input w3-border w3-round"
      />
      <button onClick={click} type="button">
        섭취정보 등록
      </button>
      <tr>
        <th width="20%">날짜</th>
        <th width="20%">식품명</th>
        <th width="20%">섭취량</th>
        <th width="20%">칼로리</th>
        <th width="20%">총칼로리</th>
      </tr>
      <FoodList foodList={foodList} />
    </>
  );
};
export default FoodInput;

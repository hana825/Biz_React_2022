const USERNAME = "root";
const PASSWORD = "!Korea8080";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.96qjmmk.mongodb.net/?retryWrites=true&w=majority`;

// mongoose 도구를 사용하여 NoSQL인 mongoDB에 DBMS Schema 방식으로 접근하기
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_date: String,
  f_food: String,
  f_eat: Number,
  f_cal: String,
  f_tcal: String,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };

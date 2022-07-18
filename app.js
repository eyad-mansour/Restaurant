"use strict";

let arrfood = [];

let i = 1;

document.title = "Restaurant";

function Food(foodname, foodType, price) {
  this.id = getID();
  this.foodname = foodname;
  this.foodType = foodType;
  this.price = price;
  arrfood.push(this);
}

function getID() {
  let id = i + 1000;
  return id;
}

const form = document.getElementById("formHtml");

form.addEventListener("submit", submitFun);
function submitFun(e) {
  e.preventDefault();

  let foodName = e.target.foodname.value;
  console.log(foodName);
  let type = e.target.type.value;
  let price = e.target.price.value;
  console.log(foodName, type, price);

  let saved = localStorage.getItem("Foods");
  if (saved) {
    arrfood = JSON.parse(saved);
    i += arrfood.length;
    new Food(foodName, type, price);
  } else {
    new Food(foodName, type, price);
  }

  let stringfyed = JSON.stringify(arrfood);
  localStorage.setItem("Foods", stringfyed);
  // const Foods = new Food(foodName, type, price);
  // console.log(Foods);
  // Foods.renderFood();

  // let stringfyed = JSON.stringify(Foods);

  // localStorage.setItem(Foods.id.toString(), Foods);
  // if(Foods === ){}
  // saveData();
}

function saveData() {
  let stringfyed = JSON.stringify(arrfood);
  localStorage.setItem("Foods", stringfyed);
}

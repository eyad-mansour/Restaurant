"use strict";

const arrfood = [];

let i = 1;

document.title = "Resturant";

function Food(foodname, foodType, price) {
  this.id = getID();
  this.foodname = foodname;
  this.foodType = foodType;
  this.price = price;
  arrfood.push(this);
}

Food.prototype.renderFood = function () {
  let div = document.createElement("div");
  let div1 = document.getElementById("info");

  div.innerHTML = `<table >
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Type</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>${this.id}</td>
    <td>${this.foodname}</td>
    <td>${this.foodType}</td>
    <td>${this.price}</td>
  </tr>
</table>`;
  // `ID :${this.id} \r\n- food name:${this.foodname} \r\nfood type : ${this.foodType} - price: ${this.price} `;
  div.innerHTML = div.innerHTML.replace(/\r\n?/g, "<br>");
  div1.className = "customers";
  div1.appendChild(div);
};

function getID() {
  let id = i + 1000;
  i += 1;
  return id;
}

const form = document.getElementById("formHtml");

form.addEventListener("submit", submitFun);
function submitFun(e) {
  e.preventDefault();

  let foodName = e.target.foodName.value;
  let type = e.target.type.value;
  let price = e.target.price.value;
  console.log(foodName, type, price);

  const Foods = new Food(foodName, type, price);
  Foods.renderFood();
}

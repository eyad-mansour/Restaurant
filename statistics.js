// import { arrfood } from "./app";

document.title = "Restaurant1";

// get myData from my local storage
function getData() {
  let retrivedData = localStorage.getItem("Foods");
  let parsedData = JSON.parse(retrivedData);

  //   let tableEl;

  let mainEl = document.getElementsByTagName("main");
  console.log(mainEl);
  //   if (document.getElementById("table") === null) {
  let tableEl = document.createElement("table");
  tableEl.innerHTML = `
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Type</th>
    <th>Price</th>
  </tr>`;

  mainEl[0].appendChild(tableEl);
  //   }
  //   tableEl = document.getElementById("table");
  console.log(typeof parsedData);
  console.log(parsedData);
  console.log(parsedData[0]);

  if (parsedData != null) {
    for (let i = 0; i < parsedData.length; i++) {
      //   parsedData[i].printMenu();
      let newRow = document.createElement("tr");
      newRow.innerHTML = `
  <tr>
    <td>${parsedData[i].id}</td>
    <td>${parsedData[i].foodname}</td>
    <td>${parsedData[i].foodType}</td>
    <td>${parsedData[i].price}</td>
  </tr>`;
      tableEl.className = "customers";
      tableEl.appendChild(newRow);
    }
  }
  console.log(mainEl[0]);
}
getData();

/*


*/

let retrivedDataPie = localStorage.getItem("Foods");
let parsedDataPie = JSON.parse(retrivedDataPie);

const names = [];

for (let i = 0; i < parsedDataPie.length; i++) {
  names.push(parsedDataPie[i].foodType);
}

////////////////////////////////
const arr = names;

function foo(array) {
  let a = [],
    b = [],
    arr = [...array], // clone array so we don't change the original when using .sort()
    prev;

  arr.sort();
  for (let element of arr) {
    if (element !== prev) {
      a.push(element);
      b.push(1);
    } else ++b[b.length - 1];
    prev = element;
  }

  return [a, b];
}

const result = foo(arr);
console.log("[" + result[0] + "]", "[" + result[1] + "]");
console.log(arr);
////////////////////////////////
console.log(names);

const labels = [];

const data = {
  labels: names,
  datasets: [
    {
      label: "Restaurant Chart",
      backgroundColor: [
        "rgb(255,140,0)",
        "rgb(54, 162, 235)",
        "rgb(255,215,0)",
        "rgb(128,128,0)",
        "rgb(0,255,0)",
      ],
      borderColor: "rgb(255,255,255)",
      data: result[1],
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Types of food",
      },
    },
  },
};

// what i need to do is to get the data from getData to the new chart so i can print them
const myChart = new Chart(document.getElementById("myChart"), config);

//////////////////////
// Bar chart

var barColors = ["red", "green", "blue", "orange", "brown"];

const prices = [],
  foodNameBar = [];

for (let i = 0; i < parsedDataPie.length; i++) {
  prices.push(parsedDataPie[i].price);
  foodNameBar.push(parsedDataPie[i].foodname);
}
console.log(prices);

new Chart("myChartBar", {
  type: "bar",
  data: {
    labels: foodNameBar,
    datasets: [
      {
        backgroundColor: barColors,
        data: prices,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "World Wine Production 2018",
    },
  },
});

// what i need to do is to get the data from getData to the new chart so i can print them

// const configBar = {
//   type: "bar",
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };
// const labelsBar = Utils.months({ count: 7 });
// const dataBar = {
//   labelsBar: labelsBar,
//   datasets: [
//     {
//       labelsBar: "My First Dataset",
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//         "rgba(255, 205, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(201, 203, 207, 0.2)",
//       ],
//       borderColor: [
//         "rgb(255, 99, 132)",
//         "rgb(255, 159, 64)",
//         "rgb(255, 205, 86)",
//         "rgb(75, 192, 192)",
//         "rgb(54, 162, 235)",
//         "rgb(153, 102, 255)",
//         "rgb(201, 203, 207)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
/*






//// lecture

// local storage is object in my ps
// object 1.key -- 2.pair value
// we use it for
// 1.mange content
// 2.speed loading
// 3.not lose data
// and it is 5 MB
// not secure any one can see it
console.log(localStorage);
//1. first method is clear
localStorage.clear();
//2 localstorage set item (key , value) it will save data in the loval storage
// what is the input / type of input , does it return type of output
localStorage.setItem("name", "eyad");
localStorage.setItem("age ", "25");
//3. localget item it will get item in specific key

// dave the data in the local storage
// to read the array as string we need to JSON.stringfy
// and to get it back to the array as set method we use JSON.pars
function saveData() {
  let stringfied = JSON.stringify(allDrinks);
  localStorage.setItem("Food", " stringfied");
}
// get my data from the local storage // in the menu
function getData() {
  // pass the key to get the value you want
  let retriveData = localStorage.getItem("Drinks");
  let parsedData = JSON.parse(retriveData);

  for (let i = 0; i < parsedData.length; i++) {
    new Drink(parsedData[i].name, parsedData[i].ingriadiant[i], etc);
  }

  for (let i = 0; i < alldrinks.length; i++) {
    allDrinks[i].printMenu();
  }
}
*/

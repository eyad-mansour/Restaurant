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

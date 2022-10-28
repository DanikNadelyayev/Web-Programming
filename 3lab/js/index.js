import {
  addItemToPage,
  clearInputs,
  renderItemsList,
} from "./dom_util.js";

const checkboxSort = document.getElementById("leftside_checkbox");
const searchButton = document.getElementById("header_search");
const clearButton = document.getElementById("clear_search");
const countButton = document.getElementById("count_button");
const searchInput = document.getElementById("header_input_search");
const totalAmount = document.getElementById("total_amount");

let cars = [];

const addItem = ({ title, desc, price }) => {
  const generatedId = uuid.v1();
  
  const newItem = {
    id: generatedId,
    title: "Audi A4",
    desc: "250 hp, max speed: 240km/h",
    price: 20000,
  };

  cars.push(newItem);

  addItemToPage(newItem);
}

const addItem2 = ({ title, desc, price }) => {
  const generatedId = uuid.v1();
  
  const newItem = {
    id: generatedId,
    title: "BMW 5",
    desc: "300 hp, max speed: 260km/h",
    price: 33000,
  };

  cars.push(newItem);

  addItemToPage(newItem);
}

searchButton.addEventListener("click", () => {
  const foundCars = cars.filter(car => car.title.search(searchInput.value) !== -1);

  renderItemsList(foundCars);
});

clearButton.addEventListener("click", () => {
  renderItemsList(cars);

  searchInput.value = "";
});

checkboxSort.addEventListener("click", () => {
  const sortedCars = cars.sort(function (a, b) {
    return a.price - b.price;
  }) 
  renderItemsList(sortedCars);
});

/*checkboxSort.addEventListener("click", function () {
  this.classList.toggle("active");
  const sortedCars = cars.sort(function (a, b) {
    return a.price - b.price;
  })
  renderItemsList(sortedCars);
});*/

const countTotalPrice = () => {
  let sum = 0;

    cars.forEach( item => {
        const num = Number(item.price)
        if(Number.isInteger(num)) {
          sum += num
        }
    });
    return sum;
}

countButton.addEventListener("click", (event) => { 
  clearInputs();

  totalAmount.textContent += countTotalPrice()
});


addItem2("Merc", "E", 200000);
addItem("Merc", "E", 200000);
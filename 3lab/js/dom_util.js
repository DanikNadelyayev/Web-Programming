const checkboxSort = document.getElementById("leftside_checkbox");
const searchButton = document.getElementById("header_search");
const clearButton = document.getElementById("clear_search");
const countButton = document.getElementById("count_button");
const findInput = document.getElementById("header_input_search");
const carsContainer = document.getElementById("cars_list");
const totalAmount = document.getElementById("total_amount");



const getItemId = (id) => `item - ${id}`;

const itemTemplate = ({ id, title, desc, price }) => `
<li id="${getItemId(id)}">
              <img
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2022/08_22_monterey/cover_m.jpg"
                alt="card"
                width="235px"
                height="180px"
              />
              <div class="card__body">
                <h5 id="card_title" class="card__title">${title}</h5>
                <p id="card_text" class="card__text">${desc}</p>
                <p id="car_price" class="car__price">${price}</p>
                <div class="card__buttons">
                  <button class="button__edit"><a href="#">Edit</a></button>
                  <button class="button__remove"><a href="#">Remove</a></button>
                </div>
              </div>
            </li>`

export const addItemToPage = ({ id, title, desc, price }) => {
    carsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, desc, price })
    );
};

export const clearInputs = () => {
  findInput.value = "";
  totalAmount.innerHTML = "";
};

export const renderItemsList = (items) => {
  carsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};

export const countTotalPrice = () => {
  const sum = 0;

    cars.forEach( item => {
        const num = Number(item.price)
        if(Number.isInteger(num)) {
            sum += num 
        }
    });
    return sum;
}

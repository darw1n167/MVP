// let URL = 'https://macro-tracker.onrender.com/'

// const listedFood = () => {
//   fetch (URL + "food")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
    
//   })

// }

let $food = $('<div class="food"></div>');
let home = document.querySelector('#home')


const loadFood = async () => {
  await fetch ('http://localhost:8000/food')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element)
      let {food_name} = element;
      console.log(element.id)
      console.log(food_name)
    });
  });
}
console.log

const populate = (data) => {

}
// loadFood();

home.addEventListener('click', loadFood)
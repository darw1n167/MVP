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
let entries = document.querySelector('#entries')
let $entries = $('#entries')

const loadFood = async () => {
  await fetch ('http://localhost:8000/food')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element)
      let div = document.createElement('div');
      div.innerText = element.food_name;
     $entries.append(div)
    });
  });
}


const populate = (data) => {

}
// loadFood();

home.addEventListener('click', loadFood)


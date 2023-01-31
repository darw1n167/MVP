<<<<<<< HEAD
let $food = $('<div class="food"></div>');
let home = document.querySelector('#home');
let entries = document.querySelector('#entries');
let $entries = $('#entries');
let $table = $('.table');
let table = document.querySelector('.table');

// let table = $(
// `<table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Name</th>
//       <th scope="col">Carbs</th>
//       <th scope="col">Fats</th>
//       <th scope="col">Proteins</th>
//       <th scope="col">Calories</th>
//     </tr>
//   </thead>
//   <tbody>`);
// $entries.append(table);

=======
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
>>>>>>> refs/remotes/origin/main

const loadFood = async () => {
  await fetch ('http://localhost:8000/food')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element)
<<<<<<< HEAD
    //   let  = $(`<div id="foodColName" class="row row-cols-5">
    //   <div class="col">Name</div>
    //   <div class="col">Carbs</div>
    //   <div class="col">Fats</div>
    //   <div class="col">Protein</div>
    //   <div class="col">Calories</div>`)
    //  $entries.append(div)
    // let foodInfo = $(`<div id="food"> ${element.food_name}</div>`);
    // entries.append(foodInfo)
    table.append(``)
    });
  });
}


const populate = (data) => {

}
loadFood();

home.addEventListener('click', loadFood)
=======
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

>>>>>>> refs/remotes/origin/main

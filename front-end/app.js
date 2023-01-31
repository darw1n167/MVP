let $food = $('<div class="food"></div>');
let home = document.querySelector('#home');
let entries = document.querySelector('#entries');
let $entries = $('#entries');
let $tableBody = $(`#tableBody`);
let tableBody = document.getElementById('tableBody');
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


const loadFood = async () => {
  await fetch ('http://localhost:8000/food')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element)
    //   let  = $(`<div id="foodColName" class="row row-cols-5">
    //   <div class="col">Name</div>
    //   <div class="col">Carbs</div>
    //   <div class="col">Fats</div>
    //   <div class="col">Protein</div>
    //   <div class="col">Calories</div>`)
    //  $entries.append(div)
    // let foodInfo = $(`<div id="food"> ${element.food_name}</div>`);
    // entries.append(foodInfo)
    let tBody = $(
    `<tr>
      <th scope="row">${element.food_name}</th>
      <td>${element.carbs}</td>
      <td>${element.fats}</td>
      <td>${element.protein}</td>
      <td>${element.calories}</td>
    </tr>`);

    $tableBody.append(tBody)
    });
  });
}


const populate = (data) => {

}
loadFood();

home.addEventListener('click', loadFood)
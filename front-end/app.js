let $food = $('<div class="food"></div>');
let home = document.querySelector('#home');
let entries = document.querySelector('#entries');
let $entries = $('#entries');
let $tableBody = $(`#tableBody`);
let tableBody = document.getElementById('tableBody');
let $edit = $('.edit');
let $delete = $('#delete');
let remove = document.querySelectorAll('.delete')
let edit = document.getElementById('edit');


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
    let tBody = $(
    `<tr>
      <th scope="row">${element.food_name}</th>
      <td class="entry">${element.carbs}</td>
      <td class="entry">${element.fats}</td>
      <td class="entry">${element.protein}</td>
      <td class="entry">${element.calories}</td>
      <td class="buttons">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
      </td>
    </tr>`);

    // $edit.click((e)=>{
    //   console.log('Clicked')
    // })
    // $delete.click((e)=>{
    //   console.log('Clicked')
    // })


    $tableBody.append(tBody);


    });
  });
}


const populate = (data) => {

}
loadFood();

$edit.click((e) => {
  console.log('Clicked')
})

// remove.addEventListener('click', (e) => {
//   console.log('Clicked')
// })
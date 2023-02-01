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
let $add = $('#add')
let $typein = $('#typeIn');
let $carb = $('#carb');
let $fat = $('#fat')
let $protein = $('#protein')
let $calorie = $('#calorie')


// const clearText = () => {
//   let $typein = $('#typeIn');
//   let $carb = $('#carb');
//   let $fat = $('#fat');
//   let $protein = $('#protein');
//   let $calorie = $('#calorie');

//   if ($typein.val() && $carb.val() && $fat.val() && $protein.val() && $calorie.val() != "")  {
//     $typein.val() = '';
//     $carb.val() = '';
//     $fat.val() = '';
//     $protein.val() = '';
//     $calorie.val() = '';
//   }
// }


const loadFood = async () => {
  await fetch ('/food')
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
      <div class="dropdown">
        <button class="edit">Edit</button>
      <button class="delete" id="${element.id}">Delete</button>
      </div>
      </td>
    </tr>`);


    $tableBody.append(tBody);
    
    $(`.delete`).on("click", async function(e) {
      const {id} = this;
       fetch(`/food/${id}`, {
        method: 'DELETE'
      }).then((response)=> {
        if(response.ok)  {
          console.log('Data was deleted')
        } else {
          console.error('Failed to delete')
        }

      })
    });
   


    });
  });
}





const populate = (data) => {

}


$add.on('click', async (e) => {
  try {     
    const response = await fetch('/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "food_name": `${$typein.val()}`,
        "carbs": `${$carb.val()}`,
        "fats": `${$fat.val()}`,
        "protein": `${$protein.val()}`,
        "calories": `${$calorie.val()}`
      })
    }).then((response) => {
      console.log(response)
      return response.json()
    }).then((data) => {
      console.log(data)
      let newInfo = $(`<tr>
      <th scope="row">${data.food_name}</th>
      <td class="entry">${data.carbs}</td>
      <td class="entry">${data.fats}</td>
      <td class="entry">${data.protein}</td>
      <td class="entry">${data.calories}</td>
      <td class="buttons">
      <div class="dropdown">
        <button class="edit">Edit</button>
      <button class="delete">Delete</button>
      </div>
      </td>
    </tr>`);
    $tableBody.append(newInfo);
    })
    console.log('Completed!');
  } catch(err) {
    console.error(`Error: ${err}`);
  }
})

loadFood();

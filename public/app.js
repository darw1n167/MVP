let $food = $('<div class="food"></div>');
let home = document.querySelector('#home');
let entries = document.querySelector('#entries');
let $entries = $('#entries');
let $tableBody = $(`#tableBody`);
let tableBody = document.getElementById('tableBody');
let $edit = $('.edit');
let remove = document.querySelectorAll('.delete')
let edit = document.getElementById('edit');
let $add = $('#add')
let $typein = $('#typeIn');
let $carb = $('#carb');
let $fat = $('#fat')
let $protein = $('#protein')
let $calorie = $('#calorie')
let changeButtons = document.querySelectorAll('.change');


const loadFood = async () => {
  await fetch ('http://localhost:8000/food')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element)
    let tBody = $(
    `<tr>
      <th class="entry" id="food-${element.id}">${element.food_name}</th>
      <td class="entry" id="carbs-${element.id}">${element.carbs}</td>
      <td class="entry" id="fats-${element.id}">${element.fats}</td>
      <td class="entry" id="protein-${element.id}">${element.protein}</td>
      <td class="entry" id="calories-${element.id}">${element.calories}</td>
      <td class="buttons">
      <div class="dropdown">
      <button class="delete" id="${element.id}">Delete</button>
      <button class="update" id="${element.id}">Update</button>

      </div>
      </td>
    </tr>`);


    $tableBody.append(tBody);

    
    $(`.update`).each(function(index, element) {
      $(element).off('click').on('click', function(e)  {
        e.preventDefault();
        let id = element.id;
        console.log(id);
        fetch(`http://localhost:8000/food/${id}`, {
          method: 'PUT',
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
        }).then((res) => {
          return res.json();
        }).then((data) => {
          console.log('Changed');
          $(element).closest('tr').html(`
          <th class="entry">${$typein.val()}</th>
          <td class="entry">${$carb.val()}</td>
          <td class="entry">${$fat.val()}</td>
          <td class="entry">${$protein.val()}</td>
          <td class="entry">${$calorie.val()}</td>
          <td class="buttons">
          <div class="dropdown">
          <button class="delete" id="${element.id}">Delete</button>
          <button class="update" id="${element.id}">Update</button>
          </div>
          </td>`);
        });
      });
    });

      


    $(`.delete`).on("click", async function(e) {
      e.preventDefault();
      const {id} = this;
      console.log(id)
       fetch(`http://localhost:8000/food/${id}`, {
        method: 'DELETE'
      }).then((response)=> {
        if(response.ok)  {
          console.log('Data was deleted')
        } else {
          console.error('Failed to delete')
        }
      })
      tBody.remove();
    });
    });
  });
}

$add.on('click', async (e) => {
  e.preventDefault();
  try {     
    const response = await fetch('http://localhost:8000/food', {
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
        <button class="delete" id="${data.id.id}">Delete</button>
        <button class="update" id="${data.id.id}">Update</button>
      </div>
      </td>
    </tr>`);
    $tableBody.append(newInfo);
    //use delete listener after appending new rows on table
    $(`.delete`).on("click", async function(e) {
      e.preventDefault();
      const {id} = this;
      console.log(id)
       fetch(`http://localhost:8000/food/${id}`, {
        method: 'DELETE'
      }).then((response)=> {
        if(response.ok)  {
          console.log('Data was deleted')
        } else {
          console.error('Failed to delete')
        }
      })
      newInfo.remove();
    });
    // add update listener
    $(`.update`).each(function(index, element) {
      $(element).off('click').on('click', function(e)  {
        e.preventDefault();
        let id = element.id;
        console.log(id);
        fetch(`http://localhost:8000/food/${id}`, {
          method: 'PUT',
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
        }).then((res) => {
          return res.json();
        }).then((data) => {
          console.log('Changed');
          $(element).closest('tr').html(`
          <th class="entry">${$typein.val()}</th>
          <td class="entry">${$carb.val()}</td>
          <td class="entry">${$fat.val()}</td>
          <td class="entry">${$protein.val()}</td>
          <td class="entry">${$calorie.val()}</td>
          <td class="buttons">
          <div class="dropdown">
          <button class="delete" id="${element.id}">Delete</button>
          <button class="update" id="${element.id}">Update</button>
          </div>
          </td>`);
        });
      });
    });
    })
    console.log('Completed!');
  } catch(err) {
    console.error(`Error: ${err}`);
  }
})

loadFood();

//tried to put listener function to not repeat code
// let deleteListener = function() {  $(`.delete`).on("click", async function(e) {
//   e.preventDefault();
//   const {id} = this;
//   console.log(id)
//    fetch(`http://localhost:8000/food/${id}`, {
//     method: 'DELETE'
//   }).then((response)=> {
//     if(response.ok)  {
//       console.log('Data was deleted')
//     } else {
//       console.error('Failed to delete')
//     }
//   })
//   tBody.remove();
// });
// }
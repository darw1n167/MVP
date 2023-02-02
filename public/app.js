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
let changeButtons = document.querySelectorAll('.change');
let inputDisplay = false;

const loadFood = async () => {
  await fetch ('/food')
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

    // $('.edit').click(function() {
    //   $(this).closest('tr').find('.entry').each(function() {
    //     let currentValue = $(this).text();
    //     $(this).html(`<input type="text" value="${currentValue}">`);
    //   });
    
      $('.update').on('click', async function(e)  {
        e.preventDefault();
        let food = $(`#food-${element.id}`)
        let {id} = this;
        console.log(id)
        fetch(`/food/${id}`, {
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
        }).then((res)=> {
            return res.json();
          }).then((data)=> {
            // console.log(data.id);
            console.log('Changed')
            tBody.remove();
            // let updateBody = $(`<tr>
            // <th class="entry">${$typein.val()}</th>
            // <td class="entry">${$carb.val()}</td>
            // <td class="entry">${$fat.val()}</td>
            // <td class="entry">${$protein.val()}</td>
            // <td class="entry">${$calorie.val()}</td>
            // <td class="buttons">
            // <div class="dropdown">
            // <button class="delete" id="${element.id}">Delete</button>
            // <button class="update" id="${element.id}">Update</button>
            // </div>
            // </td>
            // </tr>`);
            // $tableBody.append(updateBody)
          })
        })

      


    $(`.delete`).on("click", async function(e) {
      e.preventDefault();
      const {id} = this;
      console.log(id)
       fetch(`/food/${id}`, {
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


    $(`#btn-${element.id}`).on('click', async function(e) {
      e.preventDefault();
      console.log('Clicked')
      let entry = document.querySelectorAll('.entry')
      if (!inputDisplay)  {
        entry.forEach((td) => {
          td.innerHTML = `<input type="text" value=${td.textContent}>`; 
        });
        inputDisplay = true;
      } else {
        entry.forEach((td) => {
          td.textContent = td.firstElementChild.value;
          console.log(td.textContent)
        })
        inputDisplay = false;
      }
    })
      
      // $(`btn-${element.id}`).click((e) => {
      //   $(`food-${element.id}`).html
      // })

    });
  });
}




$add.on('click', async (e) => {
  e.preventDefault();
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
        <button class="delete" id="${data.id.id}">Delete</button>
        <button class="update" id="${data.id.id}">Update</button>
      </div>
      </td>
    </tr>`);
    $tableBody.append(newInfo);
    deleteListener();   
    })
    console.log('Completed!');
  } catch(err) {
    console.error(`Error: ${err}`);
  }
})

loadFood();


let deleteListener = function() {  $(`.delete`).on("click", async function(e) {
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
}
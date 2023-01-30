let URL = 'https://macro-tracker.onrender.com/'

const listedFood = () => {
  fetch (URL + "food")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    
  })

}
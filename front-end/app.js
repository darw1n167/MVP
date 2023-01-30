const getInformation = async (data) => {
    fetch('/food')
    .then((res) => res.json())
    .then((data) => {
      console.log("student data", data)

    })
}
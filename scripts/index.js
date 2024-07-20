document.addEventListener('DOMContentLoaded', function() {
  fetch('../dummy-data.json')
  .then((respone) => respone.json())
  .then(data => {
    // return data
    console.log(data[0].timeframes)
  })
})
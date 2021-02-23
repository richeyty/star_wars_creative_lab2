document.getElementById("vehiclesSubmit").addEventListener("click", function(event) {
  debugger
  event.preventDefault();
  let value = document.getElementById("vehiclesInput").value;
  if (value === "" || value < 1 || value > 76 || containsBadNum(value)) {
    value = 54;
  }
  console.log(value);

  const url = "https://www.swapi.tech/api/vehicles/" + value;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      console.log(json);
      let results = "";
      results += "<h2>Name: " + json.result.properties.name + "</h2>";
      results += "<h3>Model: " + json.result.properties.model + "</h3>";
      results += "<h3>Manufacturer: " + json.result.properties.manufacturer + "</h3>";
      results += "<h3>Cost in Credits: " + numberWithCommas(json.result.properties.cost_in_credits) + "</h3>";
      results += "<h3>Crew: " + numberWithCommas(json.result.properties.crew) + "</h3>";
      results += "<h3>Passengers: " + numberWithCommas(json.result.properties.passengers) + "</h3>";
      results += "<h3>Cargo Capacity: " + numberWithCommas(json.result.properties.cargo_capacity) + "</h3>";





      document.getElementById("vehiclesResults").innerHTML = results;
      document.getElementById("vehiclesResults").style.color = "yellow";
      document.getElementById("vehiclesResults").style.backgroundColor = "url(/images/space.jpg)";
      document.getElementById("vehiclesResults").style.border = "2px solid yellow";
    });
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function containsBadNum(value) {
  let found = false;
  let array = [1,2,3,5,9,10,11,12,13,15,17,21,22,23,27,28,29,31,32,39,40,41,43,47,48,49,52,58,59,61,63,64,65,66,68,74,75]
  for(let i = 0; i < array.length; i++) {
    if (value == array[i]) {
      found = true;
    }
  }
  return found;
}

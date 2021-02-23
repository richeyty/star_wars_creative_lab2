document.getElementById("starshipsSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  debugger
  let value = document.getElementById("starshipsInput").value;
  if (value === "" || value < 1 || value > 68 || containsBadNum(value)) {
    value = 28;
  }
  console.log(value);

  const url = "https://www.swapi.tech/api/starships/" + value;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      console.log(json);
      let results = "";
      results += "<h2>Name: " + json.result.properties.name + "</h2>";
      results += "<h3>Model: " + json.result.properties.model + "</h3>";
      results += "<h3>Starship Class: " + json.result.properties.starship_class+ "</h3>";
      results += "<h3>Cost in Credits: " + numberWithCommas(json.result.properties.cost_in_credits) + "</h3>";
      results += "<h3>Crew: " + numberWithCommas(json.result.properties.crew) + "</h3>";
      results += "<h3>Passengers: " + numberWithCommas(json.result.properties.passengers) + "</h3>";
      results += "<h3>Cargo Capacity: " + numberWithCommas(json.result.properties.cargo_capacity) + "</h3>";
      results += "<h3>Hyperdrive rating: " + json.result.properties.hyperdrive_rating+ "</h3>";




      document.getElementById("starshipsResults").innerHTML = results;
      document.getElementById("starshipsResults").style.color = "yellow";
      document.getElementById("starshipsResults").style.backgroundColor = "url(/images/space.jpg)";
      document.getElementById("starshipsResults").style.border = "2px solid yellow";
    });
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function containsBadNum(value) {
  let found = false;
  let array = [1,4,6,7,8,14,16,18,19,20,24,25,26,30,33,34,35,36,37,38,42,44,45,46,50,51,53,54,55,56,57,60,62,67,69,70]
  for(let i = 0; i < array.length; i++) {
    if (value == array[i]) {
      found = true;
    }
  }
  return found;
}

document.getElementById("planetSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  let value = document.getElementById("planetInput").value;
  if (value === "" || value < 1 || value > 60 || value == 28) {
    value = 27;
  }
  console.log(value);
  debugger
  const url = "https://www.swapi.tech/api/planets/" + value;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      debugger
      console.log(json);
      let results = "";
      results += "<h2>Name: " + json.result.properties.name + "</h2>";
      results += "<h3>Population: " + numberWithCommas(json.result.properties.population) + " inhabitants</h3>";
      results += "<h3>Climate: " + json.result.properties.climate + "</h3>";
      results += "<h3>Terrain: " + json.result.properties.terrain + "</h3>";




      document.getElementById("planetResults").innerHTML = results;
      document.getElementById("planetResults").style.color = "yellow";
      document.getElementById("planetResults").style.background = "url(/images/space.jpg)";
      document.getElementById("planetResults").style.border = "2px solid yellow";
    });
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.getElementById("peopleSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  debugger
  let value = document.getElementById("peopleInput").value;
  if (value === "" || value < 1 || value > 83 || value == 17) {
    value = 16;
  }

  console.log(value);
  debugger
  const url = "https://www.swapi.tech/api/people/" + value;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      debugger
      console.log(json);
      let results = "";
      results += "<h2>Name: " + json.result.properties.name + "</h2>";
      results += "<h3>Birth Year: " + json.result.properties.birth_year + "</h3>";
      results += "<h3>Gender: " + json.result.properties.gender + "</h3>";
      results += "<h3>Eye Color: " + json.result.properties.eye_color + "</h3>";
      results += "<h3>Hair Color: " + json.result.properties.hair_color + "</h3>";
      results += "<h3>Height: " + json.result.properties.height + " cm</h3>";
      results += "<h3>Weight: " + json.result.properties.mass + " kg</h3>";



      document.getElementById("peopleResults").innerHTML = results;
      document.getElementById("peopleResults").style.color = "yellow";
      document.getElementById("peopleResults").style.backgroundColor = "url(/images/space.jpg)";
      document.getElementById("peopleResults").style.border = "2px solid yellow";
    });
});

document.getElementById("speciesSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("speciesInput").value;
  if (value === "" || value < 1 || value > 60)
    return;
  console.log(value);
  debugger
  const url = "https://www.swapi.tech/api/species/" + value;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      debugger
      console.log(json);
      let results = "";
      results += "<h2>Name: " + json.result.properties.name + "</h2>";
      results += "<h3>Language: " + json.result.properties.language + "</h3>";
      results += "<h3>Classification: " + json.result.properties.classification+ "</h3>";
      results += "<h3>Designation: " + json.result.properties.designation + "</h3>";




      document.getElementById("speciesResults").innerHTML = results;
      document.getElementById("speciesResults").style.color = "yellow";
      document.getElementById("speciesResults").style.backgroundColor = "url(/images/space.jpg)";
      document.getElementById("speciesResults").style.border = "2px solid yellow";
    });
});

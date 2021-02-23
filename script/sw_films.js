document.getElementById("filmSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("filmInput").value;
  if (value === "" || value < 1 || value > 6)
    return;
  console.log(value);

  const url = "https://www.swapi.tech/api/films/" + value;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      debugger
      console.log(json);
      let results = "";
      results += "<h2>Film: " + json.result.properties.title + "</h2>";
      results += "<h3>Release date: " + json.result.properties.release_date + "</h3>"
      results += '<h3>Opening crawl: ' + json.result.properties.opening_crawl + "</h3>";
      for (let i=0; i < json.result.properties.planets.length; i++) {
         let newUrl = json.result.properties.planets[i];
         fetch(newUrl)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
            let name = json.result.properties.name;
            results += '<h3>Planet: ' + name + "</h3>"
          })


      }
      results += '<h3>Director: ' + json.result.properties.director + "</h3>"



      document.getElementById("filmResults").innerHTML = results;
      document.getElementById("filmResults").style.color = "yellow";
      document.getElementById("filmResults").style.backgroundColor = "url(/images/space.jpg)";
      document.getElementById("filmResults").style.border = "2px solid yellow";
    });
});

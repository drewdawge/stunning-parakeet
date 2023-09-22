var trailResults = document.querySelector('#trail-results');

//gets the values from the search bar in the index.html
function getParams() {
    var searchParams = document.location.search.split('?');

    var query = searchParams[1].split('=').pop();

    getCords(query);

}

function printResults(dataObj) {
    console.log(dataObj);

    var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = dataObj.name;

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
  '<strong>length:</strong>' + dataObj.length + '<br/>';

  if (data.description) {
    bodyContentEl.innerHTML +=
    '<strong>Description:</strong>' + dataObj.description + '<br/>';
  } else {
    bodyContentEl.innerHTML +=
    '<strong>Description:</strong> No description is given';
  }

  if (data.directions) {
    bodyContentEl.innerHTML +=
    '<strong>Directions:</strong>' + dataObj.directions;
  } else {
    bodyContentEl.innerHTML +=
    '<strong>Directions:</strong> Directions are not given.'
  }

  resultBody.append(titleEl, bodyContentEl);

  trailResults.append(resultCard);
    

}

//API used to find the trails and has inputs from the geocode API that converts the city name to coordinates
function findTrails(lat, lon) {
    const url = 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=' + lat + '&lon=' + lon + '&per_page=5&radius=10';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1070f6712emshf6a20d3c897a124p19663ajsn8b31bb08ffc0',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                printResults(data[i]);
            }
        })
}
//takes the query parameter from the getParams function to make the city name into coordinates
function getCords(query) {
    var geocode = 'https://geocode.maps.co/search?q=' + query;

    fetch(geocode)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            findTrails(lat, lon);
        });



}

//takes in the query variable as well so that the weather for the searched city will also appear
function getWeather(query) {
    var requestUrl = 'https://api.weatherapi.com/v1/forecast.json?key=4222cabb502a4d10b6d181735232009&q=Asheville&days=1&aqi=no&alerts=no';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}
//makes the stars turn yellow when clicked
const stars = document.getElementsByClassName("star")
console.log("stars:", stars)

for (const star of stars) {
    star.addEventListener('click', (event) => {
        console.log('star clicked')
        // toggle fill color
        if (event.target.style.fill === "yellow") {
            event.target.style.fill = "none"
        } else {
            event.target.style.fill = "yellow"
        }
    })
}

getParams();

function getParams() {
    var searchParams = document.location.search.split('?');

    var query = searchParams[1].split('=').pop();

    getCords(query);

}


// function findTrails() {
//     const url = 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=35.5951&lon=-82.5515&per_page=5&radius=10';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1070f6712emshf6a20d3c897a124p19663ajsn8b31bb08ffc0',
// 		'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
// 	}
// };

// fetch(url, options)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
// }
//weather api stuffs
var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Asheville&limit=5&appid=ef87c1ec9f4540d56a36e0c0bdc9e5cf'
fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

       // console.log(data.location.name);
       // console.log(data.current.condition.code)

  
    });


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
        .then(function (data) {
            console.log(data);
        })
}

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

// weather api stuffs

function getWeather() {
    var requestUrl = 'https://api.weatherapi.com/v1/forecast.json?key=4222cabb502a4d10b6d181735232009&q=Asheville&days=1&aqi=no&alerts=no';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

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
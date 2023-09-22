var searchInputVal;
getCords;

function getCords(searchInputVal) {
    var geocode = ' https://geocode.maps.co/search?q=' + searchInputVal;

fetch(geocode)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
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
    }

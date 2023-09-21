var searchButton = document.querySelector('#button');
var searchFormEl = document.querySelector('#search-form');

function handleSubmit(event) {
    event.preventDefault();

    var searhInputVal = document.querySelector('#userSearch').Value;

    if (!searhInputVal) {
        console.error('You need a search input!');
        return;
    }

    var queryString = './search-results.html?q=' + searhInputVal;

    location.assign(queryString);

}

searchFormEl.addEventListener('submit', handleSubmit);




// function getCords() {
//     var geocode = ' https://geocode.maps.co/search?q=';

// fetch(geocode)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
// }
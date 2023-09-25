// the search button
var searchButton = document.querySelector('#button');
// the form incasing the button and search bar
var searchFormEl = document.querySelector('#search-form');
// the div incasing the unorder list for the history
var searchHistoryEl = document.querySelector('#search-history');
// the unordered list where the search history will go
var searchItemsEl = document.querySelector('#search-items');
// the search bar input
var searchInput = document.querySelector('#userSearch');

var searchArray = [];

// captures the click of the search button
searchFormEl.addEventListener('submit', function(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#userSearch').value;

    if (!searchInputVal) {
        console.error('You need a search input!');
        return;
    }

    var queryString = './search-results.html?q=' + searchInputVal;

    location.assign(queryString);

});


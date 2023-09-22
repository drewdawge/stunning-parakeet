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

// this function will render the search history into list items 
function renderHistory() {
// clears search items element
searchItemsEl.innerHTML = "";

// render a new li for each history element
for (var i = 0; i < searchArray.length; i++) {
    var list = searchArray[i];

    var li = document.createElement('li');
    li.textContent = list;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Remove";

    li.appendChild(button);
    searchItemsEl.appendChild(li);
}
}

function init() {
    var storedHistory = JSON.parse(localStorage.getItem("searchHistory"));

    if (storedHistory !== null) {
        searchArray = storedHistory;
    }

    renderHistory();
}

function storeSearch() {
    localStorage.setItem("searchHistory", JSON.stringify(searchArray));
}

searchFormEl.addEventListener('submit', function(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#userSearch').value;

    if (!searchInputVal) {
        console.error('You need a search input!');
        return;
    }

    var queryString = './search-results.html?q=' + searchInputVal;

    location.assign(queryString);
    
    searchArray.push(searchInputVal);

    storeSearch();
    renderHistory();


});

searchItemsEl.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        searchArray.splice(index, 1);

        storeSearch();
        renderHistory();
    }
});

init();






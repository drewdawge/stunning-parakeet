const url = 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=35.5951&lon=-82.5515&per_page=5&radius=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1070f6712emshf6a20d3c897a124p19663ajsn8b31bb08ffc0',
		'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
	}
};

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
//weather api stuffs


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

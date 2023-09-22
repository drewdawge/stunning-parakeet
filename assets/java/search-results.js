var trailResults = document.querySelector('#trail-results');

//gets the values from the search bar in the index.html
function getParams() {
    var searchParams = document.location.search.split('?');

    var query = searchParams[1].split('=').pop();

    getCoords(query);

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

    return fetch(url, options)
        .then(function (response) {
            return response.json();
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
        .then(async function (data) {
            console.log(data);
            const weather = await getWeather(data[0].lat, data[0].lon);
            const trails = await findTrails(data[0].lat, data[0].lon);
            document.getElementById('weathericon').src = `https:${weather.current.condition.icon}`;
            document.getElementById('location').textContent = weather.location.name;
            document.getElementById('temperature').textContent = `${weather.current.temp_f} ℉`;
            document.getElementById('condition').textContent = weather.current.condition.text;
            document.getElementById('humidity').textContent = `${weather.current.humidity}%`;
            document.getElementById('uvindex').textContent = `UV Index: ${weather.current.uv}`;

            // edit trails
            for (let i = 0; i < trails.results; i++) {
                const traildiv = document.createElement('li');
                traildiv.className = 'row';
                const trailname = document.createElement('div');
                trailname.className = 'text';
                trailname.textContent = trails.data[i].name;
                const link = document.createElement('a');
                link.className = 'linkel'
                link.href = trails.data[i].url;
                link.target = '_blank';
                const trailimg = document.createElement('img');
                trailimg.src = trails.data[i].thumbnail;
                trailimg.alt = trails.data[i].name;
                const traildesc = document.createElement('div');
                traildesc.textContent = trails.data[i].description;
                traildesc.style.maxWidth = '25vw';
                const trailstar = document.createElement('svg');
                trailstar.className = 'star';
                trailstar.width = '40px';
                trailstar.height = '40px';
                trailstar.viewBox = '0 0 24 24';
                trailstar.fill = 'none';
                trailstar.xmlns = 'http://www.w3.org/2000/svg';
                trailstar.id = `star${i}`;
                
                // Create the SVG element
                const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgElement.setAttribute("class", "star");
                svgElement.setAttribute("width", "40px");
                svgElement.setAttribute("height", "40px");
                svgElement.setAttribute("viewBox", "0 0 24 24");
                svgElement.setAttribute("fill", "none");
                svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                svgElement.setAttribute("id", "star1");

                // Create the path element within the SVG
                const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                pathElement.setAttribute("d", "M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z");
                pathElement.setAttribute("stroke", "#000000");
                pathElement.setAttribute("stroke-width", "1.2");
                pathElement.setAttribute("stroke-linecap", "round");
                pathElement.setAttribute("stroke-linejoin", "round");

                svgElement.appendChild(pathElement)
                traildiv.appendChild(trailname);
                link.appendChild(trailimg);
                traildiv.appendChild(link);
                traildiv.appendChild(traildesc);
                traildiv.appendChild(svgElement);
                document.getElementsByClassName('listul')[0].appendChild(traildiv);
            }
            return { weather, trails }
        });
}

// weather api stuffs

function getWeather() {
    var requestUrl = 'https://api.weatherapi.com/v1/forecast.json?key=4222cabb502a4d10b6d181735232009&q=Asheville&days=1&aqi=no&alerts=no';

    return fetch(requestUrl)
        .then((res) => res.json())
        .then(function (data) {
            console.log("weather:", data);
            return data;
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
var keyId = "74becdaf6150ed35117a73bef007d875";

var unit = "metric";
var searchMethod = "q";

function getResultFromServer(searchTerm) {
	fetch(
		"http://api.openweathermap.org/data/2.5/weather?" +
			searchMethod +
			"=" +
			searchTerm +
			"&APPID=74becdaf6150ed35117a73bef007d875&units=" +
			unit
	)
		.then((result) => {
			return result.json();
		})
		.then((result) => {
			init(result);
		});
}

function init(resultFromServer) {
	let main = resultFromServer.weather[0].main;

	switch (main) {
		case "Clear":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/clear.jpg")';
			break;

		case "Clouds":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/cloudy.jpg")';
			break;

		case "Rain":
		case "Drizzle":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/rainy.jpg")';
			break;

		case "Snow":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/snow.jpg")';
			break;

		case "Thunderstorm":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/thunderstorm.png")';
			break;

		default:
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/default.jpg")';
			break;
	}

	//console.log(resultFromServer);

	document.getElementById("cityName").innerHTML = resultFromServer.name;

	document.getElementById("imageIcon").src =
		"http://openweathermap.org/img/wn/" +
		resultFromServer.weather[0].icon +
		"@2x.png";

	document.getElementById("countryCode").innerHTML =
		"(" + resultFromServer.sys.country.toUpperCase() + ")";

	document.getElementById("temperature").innerHTML =
		Math.round(resultFromServer.main.temp) + " \xB0C";

	document.getElementById("temperatureDescription").innerHTML =
		"Description : " +
		resultFromServer.weather[0].description.charAt(0).toUpperCase() +
		resultFromServer.weather[0].description.slice(1);

	document.getElementById("feels_like").innerHTML =
		"Feels Like : " + Math.round(resultFromServer.main.feels_like) + " \xB0C";

	document.getElementById("humidity").innerHTML =
		"Humidity : " + resultFromServer.main.humidity + " %";

	document.getElementById("pressure").innerHTML =
		"Pressure : " + resultFromServer.main.pressure + " hPa";

	document.getElementById("windSpeed").innerHTML =
		"Wind Speed : " + resultFromServer.wind.speed + " m/sec";

	document.getElementById("clouds").innerHTML =
		"Clouds : " + resultFromServer.clouds.all + " %";

	// console.log(cityName, countryCode, temperature, temperatureMain, description);
	// console.log(feelsLike, humidity, pressure);
	// console.log(windSpeed, clouds);
}

document.getElementById("searchBtn").addEventListener("click", () => {
	var searchTerm = document.getElementById("searchBar").value;

	// console.log(searchTerm);

	if (searchTerm) {
		getResultFromServer(searchTerm);
	}
});

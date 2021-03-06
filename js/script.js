var keyId = "74becdaf6150ed35117a73bef007d875";

var unit = "metric";
var searchMethod = "q";

var languages = {
	Afrikaans: "af",
	Albanian: "al",
	Arabic: "ar",
	Azerbaijani: "az",
	Bulgarian: "bg",
	Catalan: "ca",
	Czech: "cz",
	Danish: "da",
	German: "de",
	Greek: "el",
	English: "en",
	Basque: "eu",
	Persian: "fa",
	Finnish: "fi",
	French: "fr",
	Galician: "gl",
	Hebrew: "he",
	Hindi: "hi",
	Croatian: "hr",
	Hungarian: "hu",
	Indonesian: "id",
	Italian: "it",
	Japanese: "ja",
	Korean: "kr",
	Latvian: "la",
	Lithuanian: "lt",
	Macedonian: "mk",
	Norwegian: "no",
	Dutch: "nl",
	Polish: "pl",
	Portuguese: "pt",
	Português_Brasil: "pt_br",
	Romanian: "ro",
	Russian: "ru",
	Swedish: "se",
	Slovak: "sk",
	Slovenian: "sl",
	Spanish: "sp",
	Serbian: "sr",
	Thai: "th",
	Turkish: "tr",
	Ukrainian: "uk",
	Vietnamese: "vi",
	Chinese_Simplified: "zh_cn",
	Chinese_Traditional: "zh_tw",
	Zulu: "zu"
}

var langName = document.getElementById("languageName");

function getResultFromServer(searchTerm) {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?" +
		searchMethod +
		"=" +
		searchTerm +
		"&APPID=74becdaf6150ed35117a73bef007d875&units=" +
		unit +
		"&lang=" +
		languages[langName.value]
	)
		.then((result) => {
			return result.json();
		})
		.then((result) => {
			init(result);
		});
}

function init(resultFromServer) {
	let box = document.getElementById("weatherBox");
	//console.log(languages[langName.value]);

	let main = resultFromServer.weather[0].main;

	switch (main) {
		case "Clear":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/clear.jpg")';
			break;

		case "Mist":
		case "Fog":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/mist.jpg")';
			break;

		case "Haze":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/haze.jpg")';
			break;

		case "Dust":
		case "Sand":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/dust.jpg")';
			break;

		case "Tornado":
		case "Squall":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/tornado.jpg")';
			break;

		case "Smoke":
		case "Ash":
			document.getElementById("WeatherApp").style.backgroundImage =
				'url("../img/smoke.jpg")';
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
		"https://openweathermap.org/img/wn/" +
		resultFromServer.weather[0].icon +
		"@2x.png";

	document.getElementById("countryCode").innerHTML =
		"(" + resultFromServer.sys.country.toUpperCase() + ")";

	document.getElementById("temperature").innerHTML =
		Math.round(resultFromServer.main.temp) + " \xB0C";

	document.getElementById("temperatureDescription").innerHTML =
		"Weather :  " +
		resultFromServer.weather[0].description.charAt(0).toUpperCase() +
		resultFromServer.weather[0].description.slice(1);

	document.getElementById("feels_like").innerHTML =
		"Feels Like :  " + Math.round(resultFromServer.main.feels_like) + " \xB0C";

	document.getElementById("humidity").innerHTML =
		"Humidity Value :  " + resultFromServer.main.humidity + " %";

	document.getElementById("pressure").innerHTML =
		"Pressure Levels : " + resultFromServer.main.pressure + " hPa";

	document.getElementById("windSpeed").innerHTML =
		"Wind Speed at " + resultFromServer.wind.speed + " m/sec";

	document.getElementById("clouds").innerHTML =
		"Clouds :  " + resultFromServer.clouds.all + " %";

	let height = box.clientHeight;
	let width = box.clientWidth;
	box.style.left = 'calc(50% - ' + width / 2 + 'px)';
	box.style.top = 'calc(50% - ' + height / 2 + 'px)';


	//box.style.visibility = "visible";
	$('#weatherBox').css({ opacity: 0, visibility: "visible" }).animate({ opacity: 1 }, 'slow');
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

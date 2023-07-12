

/*async function fetchData() {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '06064d8f63msh9924eaf79e7d047p134f84jsn502a9bf0192d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
  
	  document.getElementById('temp').innerHTML = result.temp;
	  document.getElementById('min_temp').innerHTML = result.min_temp;
	  document.getElementById('max_temp').innerHTML = result.max_temp;
	  document.getElementById('cloud_pct').innerHTML = result.cloud_pct;
	  document.getElementById('feels_like').innerHTML = result.feels_like;
	  document.getElementById('humidity').innerHTML = result.humidity;
	  document.getElementById('wind_speed').innerHTML = result.wind_speed;
	  document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
	  document.getElementById('sunrise').innerHTML = result.sunrise;
	  document.getElementById('sunset').innerHTML = result.sunset;
	} catch (error) {
	  console.error(error);
	}
  }
  
  fetchData();
  */
  async function getWeather(city) {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '06064d8f63msh9924eaf79e7d047p134f84jsn502a9bf0192d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log(result);
  
	  document.getElementById('cityName').innerText = city; // Set city name
	  document.getElementById('temp').innerText = result.temp;
	  document.getElementById('min_temp').innerText = result.min_temp;
	  document.getElementById('max_temp').innerText = result.max_temp;
	  //document.getElementById('cloud_pct').innerText = result.cloud_pct;
	  document.getElementById('feels_like').innerText = result.feels_like;
	  document.getElementById('humidity').innerText = result.humidity;
	  document.getElementById('wind_speed').innerText = result.wind_speed;
	  document.getElementById('wind_degrees').innerText = result.wind_degrees;
	  document.getElementById('sunrise').innerText = result.sunrise;
	  document.getElementById('sunset').innerText = result.sunset;

	  
	} catch (error) {
	  console.error(error);
	}
  }
  
  document.getElementById('searchForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission
  
	const searchInput = document.getElementById('searchInput');
	const city = searchInput.value.trim();
  
	if (city) {
	  getWeather(city);
	}
  
	searchInput.value = ''; // Clear the input field
  });
  
  
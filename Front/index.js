import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

axios.defaults.baseURL = "http://localhost:3000"

async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    try {
        const response = await axios.get(`/weather/${cityInput}`);
        const data = response.data;
        displayWeather(data);
    } catch(error) {
        console.log("Une erreur s'est produite");
    }

    function displayWeather(data) {
        const weatherInfo = document.getElementById('weatherInfo');

        weatherInfo.innerHTML = 
        `
        <h2> Condition météorologique pour ${data.city}, ${data.country}</h2>
        <p><strong>Temperature : </strong> ${data.temperature} °C</p>
        <p><strong>Conditions : </strong> ${data.condition} </p>
        <img src="${data.icon}" alt"${data.condition}">
        `
    }
}

document.getElementById('submitButton').addEventListener('click', getWeather);
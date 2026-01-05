const apiKey = "15e27735a08f4bc764beef440623c128";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorDisplay = document.querySelector(".error");
const weatherDisplay = document.querySelector(".weather");
const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

async function checkWeather(city) {
    if (!city.trim()) {
        errorDisplay.style.display = "block";
        weatherDisplay.style.display = "none";
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

        if (!response.ok) {
            errorDisplay.style.display = "block";
            weatherDisplay.style.display = "none";
            return;
        }

        const data = await response.json();

        cityElement.textContent = data.name;
        tempElement.textContent = `${Math.round(data.main.temp)}°c`;
        humidityElement.textContent = `${data.main.humidity}%`;
        windElement.textContent = `${data.wind.speed} km/hr`;

        const condition = data.weather[0].main;

        const icons = {
            Clouds: "images/clouds.png",
            Clear: "images/clear.png",
            Rain: "images/rain.png",
            Drizzle: "images/drizzle.png",
            Mist: "images/mist.png"
        };

        weatherIcon.src = icons[condition] || "images/clear.png";

        weatherDisplay.style.display = "block";
        errorDisplay.style.display = "none";
        searchBox.value="";

    } catch (error) {
        console.error(error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

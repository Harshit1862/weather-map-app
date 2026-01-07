const apiKey = "39d576000a1968d59aa682b548bcc6e2";

function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      document.getElementById("weather").innerHTML =
        `<p style="color:red;">Error fetching weather data</p>`;
    });
}

function displayWeather(data) {
  document.getElementById("weather").innerHTML = `
    <h2>${data.name}</h2>
    <p> Temperature: ${data.main.temp} °C</p>
    <p> Humidity: ${data.main.humidity}%</p>
    <p> Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

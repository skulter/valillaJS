const API_KEY = "756313a6f12f42484eb8beb3b5ea62a0";

async function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  city.innerText = data.name;
  weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
}

function onGeoError() {
  alert("위치 정보가 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

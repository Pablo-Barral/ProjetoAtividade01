import regionShort from "./regionShort.js";
import weatherIcon from "./weatherIcon.js";

export default function weather() {
  const locationShow = document.querySelector("#location");
  const weatherIconShow = document.querySelector("#weatherIcon img");
  const temperatureShow = document.querySelector("#temperature");

  fetch(
    "https://api.weatherapi.com/v1/current.json?key=288ce9269f9c46699a1185755220202&q=Juiz-de-Fora"
  )
    .then((response) => response.json())
    .then((data) => {

      const location = data.location.name;
      const region = data.location.region;

      const regionShow = regionShort(region);

      locationShow.innerHTML = location + " - " + regionShow;

      let icon = data.current.condition.icon;
      const id = data.current.condition.text;
      icon = weatherIcon(icon, id);
      weatherIconShow.src = icon;

      let temperature = data.current.temp_c;
      temperature = temperature.toFixed(0)
      temperatureShow.innerHTML = temperature + "°";
    })
    .catch(console.error);
}

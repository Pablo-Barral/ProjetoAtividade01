import regionShort from "./regionShort.js";
import weatherIcon from "./weatherIcon.js";

export default function weather() {
  const locationShow = document.querySelector("#location");
  const weatherIconShow = document.querySelector("#weatherIcon img");
  const temperatureShow = document.querySelector("#temperature");

  fetch(
    "https://api.weatherapi.com/v1/current.xml?key=288ce9269f9c46699a1185755220202&q=Juiz-de-Fora"
  )
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");

      const location = xml.querySelector("name");
      const region = xml.querySelector("region");

      const regionShow = regionShort(region);

      locationShow.innerHTML = location.innerHTML + " - " + regionShow;

      let icon = xml.querySelector("icon");
      const id = xml.querySelector("condition text");
      icon = weatherIcon(icon, id);
      weatherIconShow.src = icon.innerHTML;

      let temperature = xml.querySelector("temp_c");
      temperature = parseFloat(temperature.innerHTML).toFixed(0)
      temperatureShow.innerHTML = temperature + "°";
    })
    .catch(console.error);
}

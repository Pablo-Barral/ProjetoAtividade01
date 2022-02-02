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
      console.log(xml);
      console.log(xml.querySelector("temp_c"));

      const location = xml.querySelector("name");
      locationShow.innerHTML = location.innerHTML + " - ";

      const icon = xml.querySelector("icon");
      weatherIconShow.src = icon.innerHTML;

      const temperature = xml.querySelector("temp_c");
      temperatureShow.innerHTML = temperature.innerHTML + "°";
    })
    .catch(console.error);
}

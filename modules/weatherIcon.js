export default function weatherIcon(icon, id) {
  if (id.innerHTML.includes("thunder")) {
    icon.innerHTML = ".././assets/thunder.png";
  }
  if (id.innerHTML.includes("rain")) {
    icon.innerHTML = ".././assets/raining.png";
  }
  if (id.innerHTML.includes("Fog") || id.innerHTML.includes("Mist")) {
    icon.innerHTML = ".././assets/cloud.png";
  }
  if (id.innerHTML.includes("Cloudy") || id.innerHTML.includes("Overcast")) {
    icon.innerHTML = ".././assets/cloudy.png";
  }
  if (id.innerHTML.includes("Sunny")) {
    icon.innerHTML = ".././assets/sun.png";
  }
  if (id.innerHTML.includes("thunder") && id.includes("rain")) {
    icon.innerHTML = ".././assets/storm.png";
  }
  return icon;
}

export default function weatherIcon(icon, id) {
  if (id.innerHTML.includes("thunder") && id.includes("rain")) {
    icon.innerHTML = "./assets/storm.png";
  } else if (id.innerHTML.includes("thunder")) {
    icon.innerHTML = "./assets/thunder.png";
  } else if (id.innerHTML.includes("rain")) {
    icon.innerHTML = "./assets/raining.png";
  } else if (id.innerHTML.includes("Fog") || id.innerHTML.includes("Mist")) {
    icon.innerHTML = "./assets/cloud.png";
  } else if (
    id.innerHTML.includes("Cloudy") ||
    id.innerHTML.includes("Overcast")
  ) {
    icon.innerHTML = "./assets/cloudy.png";
  } else if (id.innerHTML.includes("Sunny")) {
    icon.innerHTML = "./assets/sun.png";
  }
  return icon;
}

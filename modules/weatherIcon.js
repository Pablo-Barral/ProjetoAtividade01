export default function weatherIcon(icon, id) {
  if (id.includes("thunder") && id.includes("rain")) {
    icon = "./assets/storm.png";
  } else if (id.includes("thunder")) {
    icon = "./assets/thunder.png";
  } else if (id.includes("rain")) {
    icon = "./assets/raining.png";
  } else if (id.includes("Fog") || id.includes("Mist")) {
    icon = "./assets/cloud.png";
  } else if (
    id.includes("Cloudy") ||
    id.includes("Overcast")
  ) {
    icon = "./assets/cloudy.png";
  } else if (id.includes("Sunny")) {
    icon = "./assets/sun.png";
  }
  return icon;
}

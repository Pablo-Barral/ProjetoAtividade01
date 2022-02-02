export default function weatherIcon(icon, id) {
  if (id.innerHTML.includes("thunder")) {
    icon.innerHTML = "../assets/thunder.png";
  }
  if (id.innerHTML.includes("rain")) {
    icon.innerHTML = "../assets/raining.png";
  }
  if (id.innerHTML.includes("cloudy")) {
    icon.innerHTML = "../assets/cloud.png";
  }
  if (id.innerHTML.includes("partly")) {
    icon.innerHTML = "../assets/cloudy.png";
  }
  if (id.innerHTML.includes("sunny")) {
    icon.innerHTML = "../assets/sun.png";
  }
  if (id.innerHTML.includes("thunder") && id.includes("rain")) {
    icon.innerHTML = "../assets/storm.png";
  }
  return icon;
}

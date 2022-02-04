import login from "./modules/login.js";
import clock from "./modules/clock.js";
import weather from "./modules/weather.js";
import logout from "./modules/logout.js";

history.pushState(
  null,
  "Home - First Project",
  "http://127.0.0.1:5500/index.html/login"
);
login();
logout();
setInterval(clock, 100);
weather();
setInterval(weather, 600000);

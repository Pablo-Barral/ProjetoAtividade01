import login from "./modules/login.js";
import clock from "./modules/clock.js";
import weather from "./modules/weather.js";

login();
setInterval(clock, 100);
weather();
setInterval(weather, 600000);

import login from "./modules/login.js";
import clock from "./modules/clock.js";
import weather from "./modules/weather.js";
import logout from "./modules/logout.js";

history.pushState(
  null,
  "Home - First Project",
  "https://pablo-barral.github.io/ProjetoAtividade01/login"
);
login();
logout();
setInterval(clock, 100);
weather();
setInterval(weather, 600000);

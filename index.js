import login from "./modules/login.js";
import clock from "./modules/clock.js";
import weather from "./modules/weather.js";
import logout from "./modules/logout.js";
import passSpace from "./modules/passSpace.js";

history.pushState(
  null,
  "Home - First Project",
  "https://pablo-barral.github.io/ProjetoAtividade01/login"
);
login();
passSpace();
logout();
setInterval(clock, 100);
weather();
setInterval(weather, 60000);

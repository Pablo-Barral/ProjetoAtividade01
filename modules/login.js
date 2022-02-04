import loginError from "./loginError.js";
import timeout from "./timeout.js";

export default function login() {
  const user = document.querySelector("#userBox input");
  const password = document.querySelector("#passwordBox input");
  const btnContinue = document.querySelector("#loginBox button");
  const loginPage = document.querySelector("#loginPage");
  const homePage = document.querySelector("#homePage");

  btnContinue.addEventListener("click", () => {
    if (user.value === "admin" && password.value === "admin") {
      loginPage.style.display = "none";
      homePage.style.display = "block";
      document.title = "Home - First Project";
      history.pushState(
        null,
        "Home - First Project",
        "https://pablo-barral.github.io/ProjetoAtividade01/home"
      );
      timeout();
    } else {
      loginError();
    }
  });
}

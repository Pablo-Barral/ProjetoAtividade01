export default function passSpace() {
  const password = document.querySelector("#passwordBox input");
  password.addEventListener("input", () => {
    if (password.value != "") {
      password.classList.add("passSpace");
    } else {
      password.classList.remove("passSpace");
    }
  });
}

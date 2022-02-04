export default function logout() {
  const btnLogout = document.querySelector("#logout");

  btnLogout.addEventListener("click", () => {
    history.pushState(
      null,
      "Login - First Project",
      "http://127.0.0.1:5500/index.html"
    );
    window.location.reload();
  });
}

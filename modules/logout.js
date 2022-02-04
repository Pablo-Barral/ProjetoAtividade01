export default function logout() {
  const btnLogout = document.querySelector("#logout");

  btnLogout.addEventListener("click", () => {
    history.pushState(
      null,
      "Login - First Project",
      "https://pablo-barral.github.io/ProjetoAtividade01/"
    );
    window.location.reload();
  });
}

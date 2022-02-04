export default function timeout() {
  const timer = document.querySelector("#timeoutTimer");
  let timeCount = 600;
  setInterval(() => {
    timer.innerHTML = timeCount;
    timeCount--;
    if (timeCount === 0) {
      history.pushState(
        null,
        "Login - First Project",
        "https://pablo-barral.github.io/ProjetoAtividade01/"
      );
      window.location.reload();
    }
  }, 1000);
}

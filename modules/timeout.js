export default function timeout() {
  const timer = document.querySelector("#timeoutTimer");
  let timeCount = 20;
  setInterval(() => {
    timer.innerHTML = timeCount;
    timeCount--;
    if (timeCount === 0) {
      history.pushState(
        null,
        "Login - First Project",
        "http://127.0.0.1:5500/index.html"
      );
      window.location.reload();
    }
  }, 1000);
}

export default function clock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthDay = date.getDate();
  const weekDay = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();

  const time = document.querySelector("#time");
  const dateShow = document.querySelector("#date");

  let weekDayShow = "";
  let monthShow = "";

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  switch (weekDay) {
    case 0:
      weekDayShow = "domingo";

      break;
    case 1:
      weekDayShow = "segunda-feira";

      break;
    case 2:
      weekDayShow = "terça-feira";

      break;
    case 3:
      weekDayShow = "quarta-feira";

      break;
    case 4:
      weekDayShow = "quinta-feira";

      break;
    case 5:
      weekDayShow = "sexta-feira";

      break;
    case 6:
      weekDayShow = "sábado";
      break;
    default:
      weekDayShow = "";
      break;
  }

  switch (month) {
    case 1:
      monthShow = "janeiro";
      break;
    case 2:
      monthShow = "fevereiro";
      break;
    case 3:
      monthShow = "março";
      break;
    case 4:
      monthShow = "abril";
      break;
    case 5:
      monthShow = "maio";
      break;
    case 6:
      monthShow = "junho";
      break;
    case 7:
      monthShow = "julho";
      break;
    case 8:
      monthShow = "agosto";
      break;
    case 9:
      monthShow = "setembro";
      break;
    case 10:
      monthShow = "outubro";
      break;
    case 11:
      monthShow = "novembro";
      break;
    case 12:
      monthShow = "dezembro";
    default:
      monthShow = "";
  }

  time.innerHTML = hour + ":" + minute;
  dateShow.innerHTML =
    weekDayShow + ", " + (monthDay) + " de " + monthShow + " de " + year;
}

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
  let monthDayShow = "";

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

  switch (monthDay) {
    case 1:
      monthDayShow = "janeiro";
      break;
    case 2:
      monthDayShow = "fevereiro";
      break;
    case 3:
      monthDayShow = "março";
      break;
    case 4:
      monthDayShow = "abril";
      break;
    case 5:
      monthDayShow = "maio";
      break;
    case 6:
      monthDayShow = "junho";
      break;
    case 7:
      monthDayShow = "julho";
      break;
    case 8:
      monthDayShow = "agosto";
      break;
    case 9:
      monthDayShow = "setembro";
      break;
    case 10:
      monthDayShow = "outubro";
      break;
    case 11:
      monthDayShow = "novembro";
      break;
    case 12:
      monthDayShow = "dezembro";
    default:
      monthDayShow = "";
  }

  time.innerHTML = hour + ":" + minute;
  dateShow.innerHTML =
    weekDayShow + ", " + (month + 1) + " de " + monthDayShow + " de " + year;
}

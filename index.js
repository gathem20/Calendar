const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satruday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerText = today.getDate();
day.innerText = week[today.getDay()];
month.innerText = months[today.getMonth()];
year.innerText = today.getFullYear();

const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerText = currentTime.getHours();
  min.innerText = currentTime.getMinutes();
  sec.innerText = currentTime.getSeconds();
});

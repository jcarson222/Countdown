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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 30, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${date} ${year} ${hour}:${minute}am`;

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  //future time in ms
  
  const today = new Date().getTime();

  const t = futureTime - today;

  //values in ms
  const oneDay = 1000*60*60*24;
  const oneHour = 1000*60*60;
  const oneMinute = 1000*60;
  const dayRemainder = t % oneDay;
  const hoursRemainder = dayRemainder % oneHour;
  const minutesRemainder = hoursRemainder % oneMinute;

  let days = t / oneDay;
  days = Math.floor(days); 
  //console.log(days);

  let hours = dayRemainder/oneHour;
  hours = Math.floor(hours);
  //console.log(hours);

  let minutes = hoursRemainder/oneMinute;
  minutes = Math.floor(minutes);
  //console.log(minutes)

  let seconds = minutesRemainder / 1000;
  seconds = Math.floor(seconds);
  //console.log(seconds);

  //set values array
  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = (values[index]);
  }); 

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired.</h4>`;
  };
};

//countdown function
const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
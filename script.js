      
                // const date = document.getElementById("date");
                // const time = document.getElementById("time");
                // // creating the date object and getting the date and time
                // let newDate = new date();
                // let year = newDate.getFullYear(2023);
                // let month = newDate.getMonth(9);
                // let todaysDate = newDate.getDate(11);
                // let hours = newDate.getHours(17);
                // let minutes = newDate.getMinutes(60);
                // let seconds = newDate.getSeconds(60);
                // date.innerHTML = " " + todaysDate + " / " + month + " / " + year;
                // time.innerHTML = hours + " :  " + minutes + " :  " + seconds;

const getDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const dayOfWeek = new Date();
let day = getDays[dayOfWeek.getDay()];

const specificDate = new Date(2023, 8, 11, 14, 30, 0);

specificDate.setHours(18, 36, 0, 0)

// const currentTime = dayOfWeek.setHours(22);

document.getElementById('date').textContent = day;
document.getElementById('time').textContent = specificDate;
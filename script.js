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
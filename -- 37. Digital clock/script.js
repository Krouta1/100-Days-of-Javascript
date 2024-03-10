const today = new Date();

function getDate(d) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

const date = document.querySelector('.date');
date.innerHTML = getDate(today);

// Get Time
function showTime() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = 'AM';

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  // Append 0 to single digit
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  document.querySelector('.time').innerHTML = `${h}:${m}:${s} ${session}`;
}

setInterval(showTime, 1000);

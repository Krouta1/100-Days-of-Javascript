const countdown = document.getElementById('countdown');
const countTo = '2025-01-01';

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const newYear = new Date(countTo).getTime();
  const totalSeconds = (newYear - now) / 1000;

  return {
    days: Math.floor(totalSeconds / 3600 / 24),
    hours: Math.floor((totalSeconds / 3600) % 24),
    minutes: Math.floor((totalSeconds / 60) % 60),
    seconds: Math.floor(totalSeconds % 60),
    totalSeconds,
  };
};

const formatTime = time => (time < 10 ? `0${time}` : time);

const timer = setInterval(() => {
  const timeLeft = calculateTimeLeft();

  if (timeLeft.totalSeconds <= 0) countdown.textContent = 'Happy New Year!';

  countdown.textContent = `${formatTime(timeLeft.days)}Days : ${formatTime(
    timeLeft.hours
  )}Hrs : ${formatTime(timeLeft.minutes)}Min : ${formatTime(
    timeLeft.seconds
  )}s`;
}, 1000);

//clear the timer if the time is up
const timeLeftForInterval = calculateTimeLeft();
if (timeLeftForInterval.totalSeconds <= 0) {
  clearInterval(timer);
  countdown.textContent = 'Happy New Year!';
}

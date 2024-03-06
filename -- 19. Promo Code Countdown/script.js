const countdown = document.getElementById('countdown');
const countTo = 1; // in minutes
let promoTime = countTo * 60;

const formatTime = (time) => (time < 10 ? `0${time}` : time);

function startCountdown(){
  const promoTimer = setInterval(() => {
    if(promoTime <= 0){
      clearInterval(promoTimer)
      countdown.textContent = 'Promo has ended!'
    }else {
      promoTime--
      const days = Math.floor(promoTime / 3600 / 24)
      const hours = Math.floor((promoTime / 3600) % 24)
      const minutes= Math.floor((promoTime / 60) % 60)
      const seconds= Math.floor(promoTime % 60)
      countdown.textContent = `TIME: ${formatTime(hours)}hr : ${formatTime(minutes)}min : ${formatTime(seconds)}s`
    }
  }, 1000);
}

startCountdown()

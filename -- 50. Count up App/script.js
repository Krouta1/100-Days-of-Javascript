const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 200; // 200 is the speed of the counter

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  // updateCounter();
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const counterPosition = counter.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (counterPosition < screenPosition) {
      updateCounter();
    }
  });
});

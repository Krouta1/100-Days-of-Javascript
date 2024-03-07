const links = document.querySelectorAll('.nav-list li a');
const header = document.querySelector("header");

const clickHandler = e => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
  });
};

//this is kinda weird but ok
for (const link of links) {
  link.addEventListener('click', clickHandler);
}

// Sticky Header
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

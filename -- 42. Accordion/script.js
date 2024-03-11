let activeAccordion = null;

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    const desc = this.nextElementSibling;

    if (activeAccordion) {
      activeAccordion.nextElementSibling.style.maxHeight = null;
      activeAccordion.classList.remove('active');
    }

    if (this === activeAccordion) {
      activeAccordion = null;
    } else {
      this.classList.add('active');
      desc.style.maxHeight = desc.scrollHeight + 'px';
      activeAccordion = this;
    }
  });
});

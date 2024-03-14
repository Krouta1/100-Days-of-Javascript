const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');

//Search filter
const search = document.getElementById('search');
const productName = document.querySelectorAll('.product-details h2');
const noResult = document.querySelector('.no-result');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';

    //switch tab content
    const filter = e.target.dataset.filter;
    storeProducts.forEach(product => {
      if (filter === 'all') {
        product.style.display = 'block';
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      }
    });
  });
}

//Search filter
search.addEventListener('keyup', function (e) {
  const text = e.target.value.toLowerCase();
  productName.forEach(product => {
    if (product.textContent.toLowerCase().indexOf(text) != -1) {
      product.parentElement.parentElement.style.display = 'block';
      noResult.style.display = 'none';
    } else {
      product.parentElement.parentElement.style.display = 'none';
      noResult.style.display = 'block';
    }
  });
});

const modal = document.getElementById('modal');
const input = document.getElementById('link');
const btn = document.getElementById('btn');
const close = document.getElementsByClassName('close')[0];

btn.addEventListener('click', openPopup);
close.addEventListener('click', function(e) {
	e.preventDefault();
	closePopup();
});
window.onclick = function(e) {
	if (e.target == modal) modal.style.display = 'none';
};

function openPopup(e) {
	e.preventDefault();
	modal.style.display = 'block';
	startCountdown();
}

function closePopup() {
	modal.style.display = 'none';
}

//counter
let revCounter = 10;
let progressBar = document.getElementById('pbar');
let counting = document.getElementById('counting');

function startCountdown() {
	let downloadTimer = setInterval(() => {
		progressBar.value = 10 - --revCounter;
		if (revCounter <= 0) {
			clearInterval(downloadTimer);
			closePopup();
			window.open(input.value, '_blank');
		}
		counting.innerHTML = revCounter;
	}, 1000);
}

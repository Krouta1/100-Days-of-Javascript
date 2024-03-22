const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

const speechBtnDiv = document.querySelector('#speech-btn');
const micBtn = document.querySelector('.btn .fas');
const instruction = document.querySelector('.instruction');

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

// Check for browser support
if (!SpeechRecognition) {
	speechBtnDiv.style.visibility = 'hidden';
	console.error('Speech recognition not supported in this browser.');
}

const recognition = new SpeechRecognition();

function micBtnClicked(e) {
	e.preventDefault();
	micBtn.classList.contains('fa-microphone')
		? recognition.start()
		: recognition.stop();
}

//start speech
recognition.addEventListener('start', () => {
	micBtn.classList.remove('fa-microphone');
	micBtn.classList.add('fa-microphone-slash');
	instruction.textContent = 'Recording...';
	searchInput.focus();
});

//stop speech
recognition.addEventListener('end', () => {
	micBtn.classList.remove('fa-microphone-slash');
	micBtn.classList.add('fa-microphone');
	instruction.textContent = 'Click the Mic icon to start';
});

//get result of text to speech
recognition.continuous = true;
let contet = '';
recognition.addEventListener('result', e => {
	const current = e.resultIndex;
	const transcript = e.result[current][0].transcript;
	contet += transcript;
	searchInput.value = content;
	searchInput.focus();
});

//event listeners
micBtn.addEventListener('click', micBtnClicked);

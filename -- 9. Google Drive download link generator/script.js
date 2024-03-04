//VARIABLES
const googleLink = document.getElementById('glink');
const btn = document.getElementById('btn');
const downloadLink = document.getElementById('download-link');
const container = document.querySelector('.download-link');
const embedAudio = document.getElementById('embed-audio');
const embedVideo = document.getElementById('embed-video');
const copyBtn = document.querySelector('.copy');
const clearBtn = document.querySelector('.clear');

//FUNCTIONS

// Generate download link
const generateLink = e => {
  e.preventDefault();
  const gLinkValue = googleLink.value;

  if (gLinkValue.includes('https://drive.google.com/file/d/')) {
    const getDowloadLink = googleLink.value
      .replace(
        'https://drive.google.com/file/d/',
        'https://drive.google.com/uc?export=download&id='
      )
      .replace('/view?usp=sharing', '');
    return getDowloadLink;
  }
};

// Copy link to clipboard
const copyLink = e => {
  const targets = {
    'copy-link': downloadLink,
    'copy-audio': embedAudio,
    'copy-video': embedVideo,
  };

  const target = targets[e.target.id];

  if (target) {
    if (target.value === '') {
      alert('No link to copy');
    } else {
      navigator.clipboard
        .writeText(target.value)
        .then(() => alert('Link copied to clipboard'));
    }
  }
};

// Generate Google Drive link
const gDriveLink = e => {
  const link = generateLink(e);
  downloadLink.value = link;
  console.log(downloadLink.value);
};

// Generate audio link
const embedAudioLink = e => {
  const link = generateLink(e);
  embedAudio.value = `
    <audio width='300' height='32' controls='controls' src="${link}" type="audio/mp3">
    </audio>`;
};

// Generate video link
const embedVideoLink = e => {
  const link = googleLink.value.replace('/view?usp=sharing', '');
  embedVideo.value = `
        <iframe width="560" height="315" src="${link}/preview" type="video/mp4">
        </iframe>`;
};

//EVENT LISTENERS
btn.addEventListener('click', function (e) {
  e.preventDefault();
  gDriveLink(e);
  embedAudioLink(e);
  embedVideoLink(e);
});
container.addEventListener('click', copyLink);
clearBtn.addEventListener('click', function () {
  googleLink.value = '';
  downloadLink.value = '';
  embedAudio.value = '';
  embedVideo.value = '';
});

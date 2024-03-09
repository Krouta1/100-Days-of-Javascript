const noteBtn = document.getElementById('add-btn'),
  noteTitle = document.getElementById('note-title'),
  noteText = document.getElementById('note-text'),
  clear = document.querySelector('.clear');

function getNotes() {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

function displayNotes() {
  const notes = getNotes();
  const notesHtml = notes.map(
    (note, i) =>
      `  
    <div class="note">
      <div class="note-cta">
        <p class="note-counter">Note ${i + 1}</p>
        <div class="note-cta-btn">
          <button id=${i} class="note-btn" onclick=deleteNote(this.id)>
            <i class="fas fa-trash"></i> Delete
          </button>
          <button id=${i} class="note-btn edit-btn" onclick=editNote(this.id)>
            <i class="fas fa-edit"></i> Edit
          </button>
        </div>
      </div>
      <hr />
      <h3 class="note-title">Title: ${note.title}</h3>
      <p class="note-text">${note.text}</p>
    </div> `
  );
  document.getElementById('notes').innerHTML =
    notesHtml.length === 0 ? 'Please add some note' : notesHtml.join('');
}

//note del btn
function deleteNote(index) {
  confirm('Are you sure you want to delete this note?');
  if (!confirm) return;

  const notes = getNotes();
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

//edit note
function editNote(index) {
  const notes = getNotes();
  const note = notes[index];
  noteTitle.value = note.title;
  noteText.value = note.text;
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

function addNote() {
  const notes = getNotes();
  const note = {
    title: noteTitle.value,
    text: noteText.value,
  };
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  noteTitle.value = '';
  noteText.value = '';
  displayNotes();
}

//Event Listeners
noteBtn.addEventListener('click', e => {
  e.preventDefault();
  noteTitle.value == '' || noteText.value == ''
    ? alert('Please add a title and note')
    : addNote();
});
clear.addEventListener('click', () => {
  localStorage.removeItem('notes');
  displayNotes();
});

displayNotes();

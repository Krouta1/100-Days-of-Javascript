// Variables
const btn = document.getElementById('btn');
const usersContainer = document.getElementById('users');

// Functions
const renderUser = user => {
  const userHTML = `
        <hr>
        <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Age: ${user.age}</li>
            <li>Email: ${user.email}</li>
        </ul>
    `;
  usersContainer.innerHTML += userHTML;
};

const displayUsers = users => {
  users.forEach(renderUser);
};

const getUser = e => {
  e.preventDefault();

  fetch('users.json')
    .then(res => res.json())
    .then(displayUsers);
};

// Event Listeners
btn.addEventListener('click', getUser);

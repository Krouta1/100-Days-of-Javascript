import * as variables from './variables.js';

export async function getUser(user) {
  variables.repos.innerHTML = '';
  variables.profile.innerHTML = '';
  const res = await fetch(`${variables.apiURL}${user}`);
  const data = await res.json();
  if (!res.ok) {
    return showError('User not found');
  }
  displayUser(data);
  displayRepos(data.repos_url);
}

export const showError = msg => {
  variables.repos.innerHTML = '';
  variables.profile.innerHTML = '';
  document
    .querySelector('.hide')
    .style.setProperty('display', 'none', 'important');
  variables.repos.className = 'alert alert-danger';
  variables.repos.appendChild(document.createTextNode(msg));

  setTimeout(() => {
    variables.repos.innerHTML = '';
    variables.repos.className = '';
  }, 3000);
};

export const displayUser = user => {
  variables.profile.innerHTML = `
    <img
    src="${user.avatar_url}"
    alt="${user.name}"
    class="img-thumbnail rounded-circle"/>
    <h2>${user.name}</h2>
    <p>${user.login}</p>
    <div class="d-grid">
        <a href="https://github.com/${
          user.login
        }" class="btn btn-outline-secondary" target="_blank" rel="noopener">View Profile</a>
    </div>
    <p class="pt-2">
    <span>${user.followers} Followers</span>
    <span>${user.following} Following</span>
    </p>
    <p>${user.public_repos} Repos</p>
    <p><i class="fas fa-marker-alt"></i>${user.location || 'none'}</p>
    `;
};

export const displayRepos = async reposURL => {
  const res = await fetch(`${reposURL}`);
  const repos = await res.json();

  document
    .querySelector('.hide')
    .style.setProperty('display', 'block', 'important');
  variables.errorMsg.style.setProperty('display', 'none', 'important');
  repos
    .map(repo => {
      variables.repos.innerHTML += `
    <span class="repo border border-rounded p-3">
        <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
        <p>
            <strong>Stars: ${repo.starazers_count} |</strong>
            <strong>Watchers: ${repo.watchers_count} |</strong>
            <strong>Forks: ${repo.forks_count}</strong>
        </p>
        </span>
    </span>`;
    })
    .slice(0, 5);
};

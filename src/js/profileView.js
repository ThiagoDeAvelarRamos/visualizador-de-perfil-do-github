export function renderProfile(userData, userRepos, container) {

  const reposHtml = userRepos.length > 0 ? userRepos.map(repo => `
    <div class="repository-card">
      <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
      <div class ="repository-stats">
      <span>⭐ Stars: ${repo.stargazers_count}</span>
      <span>🍴 Forks: ${repo.forks_count}</span>
      <span>👀 Watchers: ${repo.watchers_count}</span>
      <span>📝 language: ${repo.language || "Não especificada"}</span>
      </div>
    </div>
    `).join('') : `<p class="no-repos">Este usuário não possui repositórios públicos 😢.</p>`;

  container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name
    }" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || "Não possui bio cadastrada 😢."}</p>
      </div>
    </div>

    <div class="profile-counters">
        <div class="followers">
            <h4>👥 Seguidores</h4>
            <span>${userData.followers}</span>
        </div>
        <div class="following">
            <h4>👥 Seguindo</h4>
            <span>${userData.following}</span>
        </div>
    </div>

    <div class="profile-repositories">
        <h3>Repositórios</h3>
      <div class="repositories">
        ${reposHtml}
        </div>
    </div>
  `;
}


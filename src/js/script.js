const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResult = document.getElementById('profile-results')

const baseUrl = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        // Aqui você pode adicionar a logíca para usar o valor do input 
        const response = await fetch(`${baseUrl}/users/${userName}`);
        try {
            if (!response.ok) {
                alert('Usuário não encontrado.');
                return;
            }

            const userData = await response.json();

            profileResult.innerHTML = `
            <div class="profile-card">
                <img src= "${userData.avatar_url}" alt="Foto de ${userData.name}" class='profile-avatar'>
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Não possui bio cadrastada.'}</p>
                </div>
            </div>`;
        } catch (error) {
            alert('Ocorreu um erro ao buscar o usuário.');
        }

    } else {
        alert('Por favor, digite um nome de usuario do GitHub.')
    }
});
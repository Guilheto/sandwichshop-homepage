const content = document.getElementById("content")

function renderHome() {
    content.innerHTML = ""

    const home = document.createElement('div');
    home.classList.add('home')
    home.innerHTML = `
    <h2>Just arrived in Japan</h2>
    <h1>Sandoya</h1>
    <p>Savor the Flavor, Join the Club!</p>
    `;
    content.appendChild(home)
}

renderHome()
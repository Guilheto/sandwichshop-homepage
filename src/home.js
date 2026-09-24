const content = document.getElementById("content")

export function renderHome() {
    content.innerHTML = ""

    const home = document.createElement('div');
    home.classList.add('home')
    home.innerHTML = `
    <div class="title">
        <h2>It's about food</h2>
        <h1>SANDOYA</h1>
        <p>Savor the Flavor, Join the Club!</p>
    </div>  
    `;
    content.appendChild(home)
}
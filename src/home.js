const content = document.getElementById("content")

export function renderHome() {
    content.innerHTML = ""

    const home = document.createElement('div');
    home.classList.add('home')
    home.innerHTML = `
    <div class="title">
        <h2 class="home-h2">It's about food</h2>
        <h1 class="home-h1">SANDOYA</h1>
        <p class="home-p">Savor the Flavor, Join the Club!</p>
    </div>  
    `;
    content.appendChild(home)
}
export function homeDelay() {
    setTimeout(() => {
        document.querySelector(".home").classList.add("show");
    }, 200); // Change 500 to your desired milliseconds
};
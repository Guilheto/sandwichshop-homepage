const content = document.getElementById('content');

export function renderMenu() {
    content.innerHTML = ""

    const menu = document.createElement("div");
    menu.classList.add('menu')
    menu.innerHTML = `
    <h2>Menu</h2>
    <h3>Sandwiches</h3>
    <p>Chicken Katsu Sando</p>
    <p>$17</p>
    `;
    content.appendChild(menu);
}

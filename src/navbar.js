import { renderMenu } from "./menu.js"
import { renderContact } from "./contact.js"
import { renderHome, homeDelay } from "./home.js"

const navbar = document.querySelector("nav")
console.log("NAVBAR:", navbar);

export function renderNavbar(page) {
    navbar.innerHTML = ""

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button')

    if (page === 'home') {
        buttonContainer.innerHTML = `
        <button id="menu-btn">Menu</button>
        <button id="contact-btn">Contact</button>

    `;
    }

    if (page === 'menu') {
        buttonContainer.innerHTML = `
        <button id="home-btn">Home</button>
        <button id="contact-btn">Contact</button>
    `;
    }

    if (page === 'contact') {
        buttonContainer.innerHTML = `
    <button id="home-btn">Home</button>
    <button id="menu-btn">Menu</button>
    `;
    }

    navbar.appendChild(buttonContainer)

    const menuButton = document.getElementById('menu-btn')
    if (menuButton) {
        menuButton.addEventListener("click", () => {
            renderNavbar("menu")
            renderMenu()

        })
    }

    const contactButton = document.getElementById('contact-btn')
    if (contactButton) {
        contactButton.addEventListener("click", () => {
            renderNavbar("contact")
            renderContact()
        })
    }

    const homeButton = document.getElementById('home-btn')
    if (homeButton) {
        homeButton.addEventListener("click", () => {
            renderHome()
            renderNavbar("home")
            homeDelay()
        })
    }
}

// Create a home button with boolean and appendchild all of them according to the right page//
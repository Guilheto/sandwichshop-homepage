import {renderHome} from "./home.js"
import {homeDelay} from "./home.js"
import {renderNavbar} from "./navbar.js"
import {renderMenu} from "./menu.js"
import {renderContact} from "./contact.js"
import {greetings} from "./greetings.js"

console.log("Hello restaurant!");
console.log(greetings())

// const homeButton = document.querySelector('#home-btn')

// homeButton.addEventListener("click", () => {
//     renderHome();
//     homeDelay(); 
// });

window.addEventListener("load", () => {
    renderHome();
    renderNavbar("home");
    homeDelay(); 
});

// const menuButton = document.querySelector('#menu-btn')

// menuButton.addEventListener("click", () => {
//     renderMenu();
// });

// const contactButton = document.querySelector('#contact-btn')

// contactButton.addEventListener("click", () => {
//     renderContact();
// });

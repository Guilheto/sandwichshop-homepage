const content = document.getElementById('content');

export function renderContact() {
    content.innerHTML = "";

    const contact = document.createElement('div')
    contact.classList.add('contact')
    contact.innerHTML = `
    <h2>Contact</h2>
    <p>Call:</p>
    <p>+81 090-0999-7654</p>
    <p>Email:</p>
    <p>sandoya@email.com</p>
    `;
    content.appendChild(contact);
}
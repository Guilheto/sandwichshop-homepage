const content = document.getElementById('content');

export function renderContact() {
    content.innerHTML = "";

    const contact = document.createElement('div')
    contact.classList.add('contact')
    contact.innerHTML = `
    <div class="page-title">
        <h2>CONTACT</h2>
    </div>

    <div class="about">
        <div id="img-container">
            <img src="imgs/SLOGAN.png" alt="FUEL YOUR BELLY, FUEL YOUR DAY">
        </div>
        <div id="about-text">
            <p>At the heart of it all, SANDOYA is more than just a Sandwich shop, it's a place for passion,
                creativity, and productivity to thrive. Whether you're here for the perfect sandwich, a quiet
                workspace, or a dose of inspiration, I hope you find SANDOYA to be a home away from home.
            </p>
        </div>
    </div>   

    <form action="https://formspree.io/f/{FORM_ID}" target="_blank" class="fs-form" target="_top" method="POST">
        <div class="fs-field">
            <label class="fs-label" for="name">Full name</label>
            <input class="fs-input" id="name" name="name" required />
        </div>
        <div class="fs-field">
            <label class="fs-label" for="email">E-mail</label>
            <input class="fs-input" id="email" name="email" required />
        </div>
        <div class="fs-field">
            <label class="fs-label" for="email">Subject</label>
            <input class="fs-input" id="email" name="email" required />
        </div>
        <div class="fs-field">
            <label class="fs-label" for="message">Message</label>
            <textarea class="fs-textarea" id="message" name="message" required></textarea>
        </div>
        <div class="fs-button-group">
            <button class="fs-button" type="submit">Submit</button>
        </div>
    </form>
    `;
    content.appendChild(contact);
}
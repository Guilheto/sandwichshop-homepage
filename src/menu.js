const content = document.getElementById('content');

export function renderMenu() {
    content.innerHTML = ""

    const menu = document.createElement("div");
    menu.classList.add('menu')
    menu.innerHTML = `
   <div class="page-title">
            <h2>Menu</h2>
        </div>

        <div id="sandwich" class="section">

            <div class="subtitle">
                <h3>Sandwiches</h3>
            </div>

            <div class="menu">

                <div class="item">
                    <p>Chicken Katsu Sando</p>
                    <p>30</p>
                </div>
                <div class="item">
                    <p>Tamago Sando</p>
                    <p>24</p>
                </div>
                <div class="item">
                    <p>Avocado Mushroom Sando</p>
                    <p>35</p>
                </div>
                <div class="item">
                    <p>Karaage Sando</p>
                    <p>32</p>
                </div>

            </div>
        </div>

        <div id="toast" class="section">
            <h3>Toasts</h3>
        </div>

        <div class="menu">
            <div class="item">
                <p>Chicken Avo Toast</p>
                <p>26</p>
            </div>
            <div class="item">
                <p>Tamago Toast</p>
                <p>18</p>
            </div>
            <div class="item">
                <p>Tuna Mayo Corn Toast</p>
                <p>22</p>
            </div>
            <div class="item">
                <p>Salmon Toast</p>
                <p>28</p>
            </div>
        </div>

        <div id="toast" class="section">
            <h3>Beverages</h3>
        </div>

        <div class="hot-cold">
            <h4>HOT</h4>
        </div>

        <div class="menu">

            <div class="item">
                <p>Long Black</p>
                <p>6</p>
            </div>
            <div class="item">
                <p>Latte</p>
                <p>8</p>
            </div>
            <div class="item">
                <p>Tea</p>
                <p>7</p>
            </div>
            <div class="item">
                <p>Milk Tea</p>
                <p>7</p>
            </div>
        </div>

        <div class="hot-cold">
            <h4>COLD</h4>
        </div>

        <div class="menu">
            <div class="item">
                <p>Ice Long Black</p>
                <p>6</p>
            </div>
            <div class="item">
                <p>Ice Latte</p>
                <p>8</p>
            </div>
            <div class="item">
                <p>Soda</p>
                <p>6</p>
            </div>
            <div class="item">
                <p>Water</p>
                <p>5</p>
            </div>
        </div>
    </div>    
    `;
    content.appendChild(menu);
}

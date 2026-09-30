const content = document.getElementById('content');

export function renderMenu() {
    content.innerHTML = ""

    const menu = document.createElement("div");
    menu.classList.add('menu')
    menu.innerHTML = `
        <div class="page-title">
            <h2>MENU</h2>
        </div>

        <div id="sandwich" class="section">

            <div class="subtitle">
                <h3>Sandwiches</h3>
            </div>

            <div class="menu-items">
                <div class="item" style="grid-area: box-1" id="box-1">
                    <div class="name-price">
                        <p class="name">Chicken Katsu Sando</p>
                        <p>30</p>
                    </div>
                    <p class="description">Massa leve, fina e crocante recheada com carne suina e vegetais (repolho, cebola e nirá) e molho cítrico</p>
                </div>

                <div class="item" style="grid-area: box-2" id="box-2">
                    <div class="name-price">
                        <p class="name">Tamago Sando</p>
                        <p>24</p>
                    </div>
                        <p class="description">Massa leve, fina e crocante recheada com carne suina e vegetais (repolho, cebola e nirá) e molho cítrico</p>
                    </div>
                <div class="item" style="grid-area: box-3" id="box-3">
                    <div class="name-price">
                        <p class="name">Avocado Mushroom Sando</p>
                        <p>35</p>
                    </div>
                        <p class="description">Massa leve, fina e crocante recheada com carne suina e vegetais (repolho, cebola e nirá) e molho cítrico</p>
                    </div>
                <div class="item" style="grid-area: box-4" id="box-4">
                    <div class="name-price">
                        <p class="name">Karaage Sando</p>
                        <p>32</p>
                    </div>
                    <p class="description">Massa leve, fina e crocante recheada com carne suina e vegetais (repolho, cebola e nirá) e molho cítrico</p>
                </div>
            </div>
        </div>

        <div id="toast" class="section">
            <div class="subtitle">
               <h3>Toasts</h3>
            </div>
        

            <div class="menu-items">
                <div class="item" style="grid-area: box-1" id="box-1">
                    <div class="name-price">
                        <p class="name">Chicken Avo Toast</p>
                        <p>26</p>
                    </div>
                    <p class="description">Massa leve, fina e crocante recheada com carne suina e vegetais (repolho, cebola e nirá) e molho cítrico</p>
                </div>
                
                <div class="item" style="grid-area: box-2" id="box-2">
                    <div class="name-price">
                        <p class="name">Tamago Toast</p>
                        <p>18</p>
                    </div>
                    <p class="description">Massa leve, fina e crocante recheada com carne suina e vegetais (repolho, cebola e nirá) e molho cítrico</p>
                </div>

                <div class="item" style="grid-area: box-3" id="box-3">
                    <div class="name-price">
                        <p class="name">Tuna Mayo Corn Toast</p>
                        <p>22</p>
                    </div>
                    <p class="description">Massa leve, fina e crocante recheada com carne suina e vegetais (repolho, cebola e nirá) e molho cítrico</p>
                </div>

                <div class="item" style="grid-area: box-4" id="box-4">
                    <div class="name-price">
                        <p class="name">Salmon Toast</p>
                        <p>28</p>
                    </div>
                    <p class="description">Massa leve, fina e crocante recheada com carne suina e vegetais (repolho, cebola e nirá) e molho cítrico</p>
                </div>
            </div>
        </div>

        <div id="beverages" class="section">
            <div class="subtitle">
                <h3>Beverages</h3>
            </div>

            <div class="hot-cold">
                <h4>HOT</h4>
            </div>

            <div class="menu-items">

                <div class="item" style="grid-area: box-1" id="box-1">
                    <div class="name-price">
                        <p class="name">Long Black</p>
                        <p>6</p>
                    </div>
                </div>

                <div class="item" style="grid-area: box-2" id="box-2">
                    <div class="name-price">
                        <p class="name">Latte</p>
                        <p>8</p>
                    </div>
                </div>

                <div class="item" style="grid-area: box-3" id="box-3">
                    <div class="name-price">
                        <p class="name">Tea</p>
                        <p>7</p>
                    </div>
                </div>

                <div class="item" style="grid-area: box-4" id="box-4">
                    <div class="name-price">
                        <p class="name">Milk Tea</p>
                        <p>7</p>
                    </div>
                </div>

            </div>

            <div class="hot-cold">
                <h4>COLD</h4>
            </div>

            <div class="menu-items">
            
                <div class="item" style="grid-area: box-1" id="box-1">
                    <div class="name-price">
                        <p class="name">Ice Long Black</p>
                        <p>6</p>
                    </div>
                </div>
                <div class="item" style="grid-area: box-2" id="box-2">
                    <div class="name-price">
                        <p class="name">Ice Latte</p>
                        <p>8</p>
                    </div>
                </div>
                <div class="item" style="grid-area: box-3" id="box-3">
                    <div class="name-price">
                        <p class="name">Soda</p>
                        <p>6</p>
                    </div>
                </div>
                <div class="item style="grid-area: box-4" id="box-4">
                    <div class="name-price">
                        <p class="name">Water</p>
                        <p>5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    `;
    content.appendChild(menu);
}

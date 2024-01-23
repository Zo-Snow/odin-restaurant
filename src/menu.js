function createMenu() {
    const content = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList = "menu";
    content.appendChild(div);

    div.innerHTML = `
    <h2 class="menu-cat">Meals</h2>
            <div class="items">
                <div class="item one">
                    <p class="item-name">Steak Specio</p>
                    <p class="item-price">$45</p>
                </div>
                <div class="item two">
                    <p class="item-name">Grilled BBQ</p>
                    <p class="item-price">$70</p>
                </div>
                <div class="item three">
                    <p class="item-name">Fancy Salad</p>
                    <p class="item-price">$50</p>
                </div>
                <div class="item four">
                    <p class="item-name">Chimken</p>
                    <p class="item-price">$37</p>
                </div>
            </div>
            
            <h2 class="menu-cat">Desserts</h2>
            <div class="items">
                <div class="item five">
                    <p class="item-name">Choco Yum</p>
                    <p class="item-price">$14</p>
                </div>
                <div class="item six">
                    <p class="item-name">XioPioCchio</p>
                    <p class="item-price">$17</p>
                </div>
            </div>
            <h2 class="menu-cat">Drinks</h2>
            <div class="items">
                <div class="item seven">
                    <p class="item-name">Joos</p>
                    <p class="item-price">$7</p>
                </div>
                <div class="item eight">
                    <p class="item-name">Anotha Joos</p>
                    <p class="item-price">$11</p>
                </div>
                <div class="item nine">
                    <p class="item-name">Expensiv Joos</p>
                    <p class="item-price">$21</p>
                </div>
                <div class="item ten">
                    <p class="item-name">Bepis</p>
                    <p class="item-price">$4</p>
                </div>
            </div>
    `
}

export default createMenu;
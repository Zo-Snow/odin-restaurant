import createNavbar from "./navbar";
import createMenu from "./menu";
import createFooter from "./footer";

function createHome() {
    const content = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList = "home";
    content.appendChild(div);

    const h1 = document.createElement("h1");
    h1.innerHTML = "Expensivo";
    div.appendChild(h1);

    const p1 = document.createElement("p");
    p1.innerHTML = "A very expensive restaurant. Why is it expensive? Idk, its fancy. And the food? Well yea it is tasty like other tasty foods nothing special so just expensive for no reason really.";
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = "Served to you by the best shibes. Shibes are working here happily. No animal cruelty going on";
    div.appendChild(p2);

    const button = document.createElement("button");
    button.classList = "arrow";
    button.innerHTML = "Dive in 🡢";
    div.appendChild(button);

    button.addEventListener('click', () => {
        content.innerHTML = "";
        createNavbar();
        createMenu();
        createFooter();
    })
}

export default createHome;
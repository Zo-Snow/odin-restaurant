import createContact from "./contact";
import createHome from "./home";
import createMenu from "./menu";
import createFooter from "./footer";

function createNavbar() {
    const content = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList = "navbar";
    content.appendChild(div);

    const button = document.createElement("button");
    button.classList = "home-btn";
    button.innerHTML = "Home";
    div.appendChild(button);

    const button2 = document.createElement("button");
    button2.classList = "menu-btn";
    button2.innerHTML = "Menu";
    div.appendChild(button2);

    const button3 = document.createElement("button");
    button3.classList = "contact-btn";
    button3.innerHTML = "Contact";
    div.appendChild(button3);

    button.addEventListener('click', () => {
        content.innerHTML = "";
        createNavbar();
        createHome();
        createFooter();
    })

    button2.addEventListener('click', () => {
        content.innerHTML = "";
        createNavbar();
        createMenu();
        createFooter();
    })

    button3.addEventListener('click', () => {
        content.innerHTML = "";
        createNavbar();
        createContact();
        createFooter();
    })

}

export default createNavbar;
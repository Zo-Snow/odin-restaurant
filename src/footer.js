function createFooter() {
    const content = document.querySelector("#content");

    const footer = document.createElement("footer");
    footer.innerHTML = "Copyright @ zo-snow 2024<span>♥</span>"
    content.appendChild(footer);

}

export default createFooter;
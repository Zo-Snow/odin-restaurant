function createContact() {
    const content = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList = "contact";
    content.appendChild(div);

    const h2Two = document.createElement("h2");
    h2Two.innerHTML = "Contact Us";
    div.appendChild(h2Two);

    const p1 = document.createElement("p");
    p1.innerHTML = "Manager Shibe";
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = "arealemail@mail.com";
    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerHTML = "+1-23-456-78";
    div.appendChild(p3);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Location";
    div.appendChild(h2);

    const locationDiv = document.createElement("div");
    locationDiv.classList = "location-div";
    div.appendChild(locationDiv);

}

export default createContact;
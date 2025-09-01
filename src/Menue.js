import "./style.css";

export default function loadMenuePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to The Basil";
    content.appendChild(heading);

    const paragraph1 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = "A cozy, modern bistro specializing in Mediterranean fusion cuisine." ;
    paragraph1.appendChild(p1);
    content.appendChild(paragraph1);

    const paragraph2 = document.createElement("div");
    let p2 = document.createElement("p");
    p2.textContent = "A cozy, modern bistro specializing in Mediterranean fusion cuisine." ;
    paragraph2.appendChild(p2);
    content.appendChild(paragraph2);

    const paragraph3 = document.createElement("div");
    let p3 = document.createElement("p");
    p3.textContent = "A cozy, modern bistro specializing in Mediterranean fusion cuisine.";
    paragraph3.appendChild(p3);
    content.appendChild(paragraph3);
}
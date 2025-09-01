import "./style.css";

export default function loadContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Contact us!";
    content.appendChild(heading);

    const paragraph1 = document.createElement("div");
    let hfp1 = document.createElement("h3");
    hfp1.textContent = "Chefs info";
    paragraph1.appendChild(hfp1);
    let p1 = document.createElement("p");
    p1.innerHTML = "Ivan<br>555-555-5555<br>totallyRealEmail@notFake.com";
    paragraph1.appendChild(p1);
    content.appendChild(paragraph1);

    const paragraph2 = document.createElement("div");
    let hfp2 = document.createElement("h3");
    hfp2.textContent = "Menagers info";
    paragraph2.appendChild(hfp2);
    let p2 = document.createElement("p");
    p2.innerHTML = "Manya<br>555-555-5554<br>fullyRealEmail@notFake.com";
    paragraph2.appendChild(p2);
    content.appendChild(paragraph2);

    const paragraph3 = document.createElement("div");
    let hfp3 = document.createElement("h3");
    hfp3.textContent = "Waiters info";
    paragraph3.appendChild(hfp3);
    let p3 = document.createElement("p");
    p3.innerHTML = "Dex<br>555-555-5553<br>soRealRealEmail@notFake.com";
    paragraph3.appendChild(p3);
    content.appendChild(paragraph3);
}
import "./style.css";

console.log("Webpack is working!");

function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to The Basil";
    content.appendChild(heading);

    const paragraph1 = document.createElement("div");
    paragraph1.classList.add("section");
    let p1 = document.createElement("p");
    p1.innerHTML =
        "A cozy, modern bistro specializing<br> in Mediterranean fusion cuisine. "+
        "Warm lighting, rustic wooden tables, and a friendly staff make it perfect for casual dinners or weekend brunch. <br>" +
        "Signature dishes combine fresh herbs, local produce, and classic Mediterranean flavors with a modern twist." ;
    paragraph1.appendChild(p1);
    content.appendChild(paragraph1);

    const paragraph2 = document.createElement("div");
    paragraph2.classList.add("section");
    let hfp2 = document.createElement("h3");
    hfp2.textContent = "Working Hours";
    let ul = document.createElement("ul");
    const days = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm",
        "Sunday: we don't work"
    ];
    days.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    paragraph2.appendChild(hfp2);
    paragraph2.appendChild(ul);
    content.appendChild(paragraph2);

    const paragraph3 = document.createElement("div");
    paragraph3.classList.add("section");
    let hfp3 = document.createElement("h3");
    hfp3.textContent = "Location";
    paragraph3.appendChild(hfp3);
    let p3 = document.createElement("p");
    p3.textContent = "123 Forest Drive, Forestville, Maine";
    paragraph3.appendChild(p3);
    content.appendChild(paragraph3);
}

loadHomePage();

const headerNav = document.querySelector("nav");
const buttons = headerNav.querySelectorAll("button");
import menuPage from './menu.js';
import contactPage from './contact.js';

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        if (button.textContent === "Home") {
            loadHomePage();
        } else if (button.textContent === "Menu")  {
            menuPage();
        } else {
            contactPage();
        }
    })
})
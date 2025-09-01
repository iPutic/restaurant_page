import "./style.css";

console.log("Webpack is working!");

function loadHomePage () {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to The Basil";
    content.appendChild(heading);

    const paragraph1 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = "A cozy, modern bistro specializing in Mediterranean fusion cuisine." +
    "Warm lighting, rustic wooden tables, and a friendly staff make it perfect for casual dinners or weekend brunch. " +
    "Signature dishes combine fresh herbs, local produce, and classic Mediterranean flavors with a modern twist." ;
    paragraph1.appendChild(p1);
    content.appendChild(paragraph1);

    const paragraph2 = document.createElement("div");
    let p2 = document.createElement("p");
    p2.textContent = "A cozy, modern bistro specializing in Mediterranean fusion cuisine." +
    "Warm lighting, rustic wooden tables, and a friendly staff make it perfect for casual dinners or weekend brunch. " +
    "Signature dishes combine fresh herbs, local produce, and classic Mediterranean flavors with a modern twist." ;
    paragraph2.appendChild(p2);
    content.appendChild(paragraph2);

    const paragraph3 = document.createElement("div");
    let p3 = document.createElement("p");
    p3.textContent = "A cozy, modern bistro specializing in Mediterranean fusion cuisine." +
    "Warm lighting, rustic wooden tables, and a friendly staff make it perfect for casual dinners or weekend brunch. " +
    "Signature dishes combine fresh herbs, local produce, and classic Mediterranean flavors with a modern twist." ;
    paragraph3.appendChild(p3);
    content.appendChild(paragraph3);
}

loadHomePage();
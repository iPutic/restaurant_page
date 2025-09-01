import "./style.css";

function createInfoBlock(title, lines) {
    const block = document.createElement("div");

    const heading = document.createElement("h3");
    heading.textContent = title;
    block.appendChild(heading);

    const p = document.createElement("p");
    p.innerHTML = lines.join("<br>");
    block.appendChild(p);

    return block;
}

export default function loadContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Contact us!";
    content.appendChild(heading);

    const infoBlocks = [
        { title: "Chefs info", lines: ["Ivan", "555-555-5555", "totallyRealEmail@notFake.com"] },
        { title: "Managers info", lines: ["Manya", "555-555-5554", "fullyRealEmail@notFake.com"] },
        { title: "Waiters info", lines: ["Dex", "555-555-5553", "soRealRealEmail@notFake.com"] },
    ];

    infoBlocks.forEach(info => content.appendChild(createInfoBlock(info.title, info.lines)));
}

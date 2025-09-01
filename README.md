# 🍃 The Basil – Restaurant Page

A single-page restaurant website built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).
This project was my introduction to **Webpack**, **ES6 modules**, and dynamically generating pages with JavaScript.

The idea was simple: instead of writing multiple `.html` files, everything is rendered through JavaScript. That means the navigation swaps content without reloading the page.

---

## 🔧 Tech Stack

* **JavaScript (ES6+)** – modularized with `import`/`export`
* **Webpack** – bundling and asset management
* **CSS** – custom styling, responsive structure
* **HTML5** – base template

---

## ✨ Features

* Three dynamically generated sections:

  * **Home** – restaurant description, hours, and location
  * **Menu** – beverages, appetizers, mains, and desserts with placeholders for images
  * **Contact** – chef, manager, and waiter contact info
* Responsive layout with simple, clean styling
* Navigation buttons that swap out page content without reloading
* Placeholder images (to keep it clear this is a demo project, not a real restaurant site)

---

## 📂 Project Structure

```
restaurant_page/
│── src/
│   ├── index.js    # Home page + navigation logic
│   ├── menu.js     # Menu content
│   ├── contact.js  # Contact info
│   ├── style.css   # Styling
│── index.html      # Template file
│── webpack.config.js
│── package.json
```

---

## 🚀 Deployment

The live version is deployed with **GitHub Pages**.
👉 [View Live Demo](https://iputic.github.io/restaurant_page/)

---

## 💡 What I Learned

* How to set up **Webpack** from scratch (entry, output, loaders)
* How to organize code into **separate modules** and import/export them
* How to dynamically create and replace DOM elements with JavaScript
* How to deploy a Webpack project to **GitHub Pages** by publishing only the `dist/` folder

---

## 📌 Notes

* This is **not a real restaurant** – just a practice project.
* All images are placeholders.
* Built to show off **modular JavaScript** and **clean project structure**.

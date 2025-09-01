import "./style.css";

export default function loadMenuePage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Our Menue!</h1>
        <div class="sections">
            <h2>Beverages</h2>
                <div class ="items">
                    <h3>Sparkling Lemon Basil Soda</h3>
                    <p>
                        Refreshing citrus soda with a hint of fresh basil.
                    </p>
                    <img id="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
        </div> `
    alert("No images will appear, just one placeholder since this is a fake page!")
}
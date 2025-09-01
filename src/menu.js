import "./style.css";

export default function loadMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Our Menu!</h1>
        <div class="section">
            <h2>Beverages</h2>
                <div class ="items">
                    <h3>Sparkling Lemon Basil Soda <strong>Price</strong></h3>
                    <p>Refreshing citrus soda with a hint of fresh basil.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                <div class ="items">
                    <h3>Pomegranate & Ginger Cooler <strong>Price</strong></h3>
                    <p>Sweet and tangy pomegranate with a spicy ginger kick.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                <div class ="items">
                    <h3>Lavender Honey Latte <strong>Price</strong></h3>
                    <p>Creamy latte with floral lavender and a touch of honey.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
        </div>
        <div class="section">
            <h2>Appetizers</h2>
                <div class ="items">
                    <h3>Crispy Zucchini Fritters with Tzatziki <strong>Price</strong></h3>
                    <p>Golden zucchini fritters served with a cool yogurt dip.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                <div class ="items">
                    <h3>Stuffed Grape Leaves <strong>Price</strong></h3>
                    <p>Tender grape leaves stuffed with rice and herbs, drizzled with lemon. </p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                <div class ="items">
                    <h3>Tomato, Basil & Burrata Crostini <strong>Price</strong></h3>
                    <p>Toasted bread with creamy burrata and fresh tomato-basil topping.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
        </div>
        <div class="section">
            <h2>Main Courses</h2>
                <div class ="items">
                    <h3>Herb-Crusted Sea Bass <strong>Price</strong></h3>
                    <p>Oven-baked sea bass with a crispy herb crust and lemon butter sauce.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                <div class ="items">
                    <h3>Grilled Lamb Chops <strong>Price</strong></h3>
                    <p>Tender lamb chops glazed with pomegranate sauce, served with roasted vegetables</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                <div class ="items">
                    <h3>Mediterranean Vegetable Risotto <strong>Price</strong></h3>
                    <p>Creamy risotto with seasonal vegetables and fresh herbs.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                <div class ="items">
                    <h3>Chicken Souvlaki <strong>Price</strong> </h3>
                    <p>Grilled chicken skewers with lemon, garlic, and oregano, served with roasted veggies.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                <div class ="items">
                    <h3>Spinach & Feta Stuffed Portobello Mushrooms <strong>Price</strong></h3>
                    <p>Large mushrooms filled with creamy spinach and feta, baked to perfection.</p>
                    <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                </div>
                </div>
                <div class="section
    ">
                    <h2>Desserts</h2>
                        <div class ="items">
                            <h3>Baklava Bites <strong>Price</strong></h3>
                            <p>Sweet layered pastry with nuts and honey drizzle.</p>
                            <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                        </div>
                        <div class ="items">
                            <h3>Lemon Panna Cotta <strong>Price</strong></h3>
                            <p>Creamy custard infused with zesty lemon.</p>
                            <img class="placeholder" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="placeholder img">
                        </div>
                </div>`
    /*alert("No images will appear, just one placeholder since this is a fake page!")*/
}
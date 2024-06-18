import React from 'react';
import './MenuPage.css'; // Import the CSS file for custom styles

const MenuPage = () => {
    return (
        <div className="menu-container">
            <h1>Our Menu</h1>
            <div className="menu-grid">
                <div className="menu-item">
                    <img src="https://media.istockphoto.com/id/928092636/photo/fresh-croissants-with-chocolate-on-the-table-delicious-breakfas.jpg?s=612x612&w=0&k=20&c=ri0Ybi7rJfKfOPoSH0U-HaxKewnw-VEn1btvBDNIAcI=" alt="Chocolate Croissant" />
                    <h2>Chocolate Croissant</h2>
                    <p>Delicious buttery croissant filled with rich chocolate.</p>
                </div>
                <div className="menu-item">
                    <img src="https://media.istockphoto.com/id/1169935120/photo/red-velvet-cupcakes.jpg?s=612x612&w=0&k=20&c=p7jI3IdBhv46Sn28N23zFq24myA7tcVrgpkwSPW7b2Q=" alt="Red Velvet Cupcake" />
                    <h2>Red Velvet Cupcake</h2>
                    <p>Moist red velvet cupcake topped with creamy frosting.</p>
                </div>
                <div className="menu-item">
                    <img src="https://media.istockphoto.com/id/1256310566/photo/homemade-vanilla-muffins-with-blueberries-on-a-dark-concrete-background.jpg?s=612x612&w=0&k=20&c=bJUm0BYI0WZymtvbryDDS1G8N2RNy60dryLFVEmqJpg=" alt="Blueberry Muffin" />
                    <h2>Blueberry Muffin</h2>
                    <p>Moist muffin bursting with fresh blueberries.</p>
                </div>
                <div className="menu-item">
                    <img src="https://media.istockphoto.com/id/1464665505/photo/cinnamon-rolls-recipe-and-ingredients-at-table.jpg?s=612x612&w=0&k=20&c=VRwSfGP1HQ09nk5wEll5dVarWpUZuH9QdKvOAIK1ghg=" alt="Cinnamon Roll" />
                    <h2>Cinnamon Roll</h2>
                    <p>Soft and gooey roll with a sweet cinnamon filling.</p>
                </div>
                <div className="menu-item">
                    <img src="https://media.istockphoto.com/id/466724890/photo/healthy-homemade-carrot-cake.jpg?s=612x612&w=0&k=20&c=Qt89yzcMCq8awNO_EhJJwdBOp3yyJA2YYG01D7ZL3gA=" alt="Carrot Cake" />
                    <h2>Carrot Cake</h2>
                    <p>Moist cake with grated carrots, nuts, and cream cheese frosting.</p>
                </div>
                <div className="menu-item">
                    <img src="https://media.istockphoto.com/id/1472804077/photo/strawberry-shortcake.jpg?s=612x612&w=0&k=20&c=iMgi5yfEzcDy3HrV4pRHBU4RSz0ITEZ_22g9RdMJlXg=" alt="Strawberry Shortcake" />
                    <h2>Strawberry Shortcake</h2>
                    <p>Light and fluffy cake topped with fresh strawberries and whipped cream.</p>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;

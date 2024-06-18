import React from 'react';
import './HomePage.css'; // Import the CSS file for custom styles

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="hero">
                <img src="https://png.pngtree.com/thumb_back/fw800/background/20240530/pngtree-bakery-bread-border-with-copy-space-image_15735686.jpg" alt="Bakery" className="hero-image" />
                <h1 className="hero-title">Welcome to Our Bakery!</h1>
            </div>
            <div className="home-content">
                <p>
                    At our bakery, we believe in the magic of freshly baked goods. From the aroma of bread straight out of the oven to the delicate sweetness of our pastries, every bite is crafted with love and care.
                </p>
                <p>
                    Whether you're looking for a quick snack, a special treat, or the perfect cake for your next celebration, we've got you covered. Visit us and experience the warmth and charm of our bakery.
                </p>
            </div>
        </div>
    );
};

export default HomePage;

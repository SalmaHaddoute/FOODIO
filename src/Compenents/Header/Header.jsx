import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menu, setMenu] = useState("menu");

    return (
        <section className="header">
            <div className="header-contents">
                <h1>Order Your Favorite Food Here</h1>
                <p>
                    Choose from a diverse menu featuring a delectable array
                    of dishes crafted with the finest ingredients and culinary
                    expertise. Our mission is to satisfy your cravings and
                    elevate your dining experience, one delicious meal at a time.
                </p>
                <button
                    onClick={() => setMenu("menu")}
                    className={menu === "menu" ? "active" : ""}
                    aria-pressed={menu === "menu"}
                >
                    View Menu
                </button>
            </div>
        </section>
    );
};

export default Header;

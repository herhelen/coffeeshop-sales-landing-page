import "./styles.css";

import React from "react";
import logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <div className="header-container">
            <div className="logo" >
                <img src={logo} alt="logo coffeeshop" />
            </div>
            <p className="shop-name">CoffeeShop</p>
        </div>
    );

}
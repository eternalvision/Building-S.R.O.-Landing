import React from "react";
import { Elements } from "./Elements";

function Header() {
    return (
        <header>
            <ul className="Header-list">
                <Elements.LeftContent />
                <Elements.RightContent />
            </ul>
        </header>
    );
}

export default Header;

import React from "react";

function LeftContent() {
    return (
        <li className="Left-header__els">
            <a href="/">
                <ul className="Logo">
                    <li className="Logo-image">
                        <img width={60} height={60} src="" alt="" />
                    </li>
                    <li>
                        <ul className="Logo-title">
                            <li>Название компании</li>
                            <li>Визитка строительной компании</li>
                        </ul>
                    </li>
                </ul>
            </a>
        </li>
    );
}

export default LeftContent;

import React from "react";

export const LeftContent = ({ Media }) => {
    return (
        <li className="Left-header__els">
            <a href="/">
                <ul className="Logo">
                    <li className="Logo-image">
                        <Media.Logo />
                    </li>
                    <li>
                        <ul className="Logo-title">
                            <li>Natallia - Building S.R.O.</li>
                            <li>Stavební firma</li>
                        </ul>
                    </li>
                </ul>
            </a>
        </li>
    );
};

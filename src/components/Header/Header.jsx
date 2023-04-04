import React from "react";
import { LeftContent } from "./Elements/LeftContent";
import { RightContent } from "./Elements/RightContent";

export const Header = () => {
    return (
        <header>
            <section>
                <ul className="Header-list">
                    <LeftContent />
                    <RightContent />
                </ul>
            </section>
        </header>
    );
};

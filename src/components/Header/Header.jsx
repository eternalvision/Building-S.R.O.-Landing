import React from "react";
import { LeftContent } from "./Elements/LeftContent";
import { RightContent } from "./Elements/RightContent";

export const Header = ({ openModal }) => {
    return (
        <>
            <header className="Fade-Top">
                <section>
                    <ul className="Header-list">
                        <LeftContent />
                        <RightContent openModal={openModal} />
                    </ul>
                </section>
            </header>
        </>
    );
};

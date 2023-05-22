import React from "react";
import { LeftContent } from "./LeftContent/LeftContent";
import { RightContent } from "./RightContent/RightContent";

export const Header = ({ openModal, Media }) => {
    return (
        <>
            <header className="Fade-Top">
                <section>
                    <ul className="Header-list">
                        <LeftContent Media={Media} />
                        <RightContent openModal={openModal} />
                    </ul>
                </section>
            </header>
        </>
    );
};

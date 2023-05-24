import React from "react";
import { LeftContent } from "./LeftContent/LeftContent";
import { RightContent } from "./RightContent/RightContent";

export const Header = ({ Helpers, openModal, Media }) => {
    return (
        <>
            <header className="Fade-Top Header">
                <section>
                    <ul className="Header-list">
                        <LeftContent Media={Media} />
                        <RightContent
                            Media={Media}
                            Helpers={Helpers}
                            openModal={openModal}
                        />
                    </ul>
                </section>
            </header>
        </>
    );
};

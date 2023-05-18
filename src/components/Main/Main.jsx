import React from "react";
import { ContactLinks } from "./Elements/ContactLinks";
import { TitleForm } from "./Elements/TitleForm";
import { OurServices } from "./Elements/OurServices";
import { AboutUs } from "./Elements/AboutUs";
import { Gallery } from "./Elements/Gallery";

export const Main = ({ openModal }) => {
    return (
        <main>
            <ul>
                <li className="Contact-links Zoom">
                    <ContactLinks />
                </li>
                <li className="Title-Form Zoom Fade-Top">
                    <TitleForm openModal={openModal} />
                </li>
                <li className="Our-Services Fade-Bottom">
                    <OurServices openModal={openModal} />
                </li>
                <li className="About-Us Fade-Bottom">
                    <AboutUs />
                </li>
                <li className="Gallery Fade-Bottom">
                    <Gallery />
                </li>
            </ul>
        </main>
    );
};

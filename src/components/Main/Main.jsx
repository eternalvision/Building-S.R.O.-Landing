import React from "react";
import { AboutUs } from "./AboutUs/AboutUs";
import { ContactLinks } from "./ContactLinks/ContactLinks";
import { Gallery } from "./Gallery/Gallery";
import { OurServices } from "./OurServices/OurServices";
import { TitleForm } from "./TitleForm/TitleForm";

export const Main = ({ openModal, Media, Helpers }) => {
    return (
        <main>
            <ul>
                <li className="Contact-links Zoom">
                    <ContactLinks Media={Media} />
                </li>
                <li className="Title-Form Zoom Fade-Top">
                    <TitleForm openModal={openModal} Media={Media} />
                </li>
                <li className="Our-Services Fade-Bottom">
                    <OurServices openModal={openModal} Media={Media} />
                </li>
                <li className="About-Us Fade-Bottom">
                    <AboutUs Helpers={Helpers} Media={Media} />
                </li>
                <li className="Gallery Fade-Bottom">
                    <Gallery />
                </li>
            </ul>
        </main>
    );
};

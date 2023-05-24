import React from "react";
import { AboutUs } from "./AboutUs/AboutUs";
import { ContactLinks } from "./ContactLinks/ContactLinks";
import { ContainerCarousel } from "./Carousel/Carousel";
import { OurServices } from "./OurServices/OurServices";
import { TitleForm } from "./TitleForm/TitleForm";
import { Consultation } from "./Consultation/Consiltation";

export const Main = ({ openModal, Media, Helpers }) => {
    return (
        <main className="Main">
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
                    <AboutUs
                        Helpers={Helpers}
                        openModal={openModal}
                        Media={Media}
                    />
                </li>
                <li className="Carousel Fade-Bottom">
                    <ContainerCarousel />
                </li>
                <li className="Consultation Zoom">
                    <Consultation Media={Media} />
                </li>
            </ul>
        </main>
    );
};

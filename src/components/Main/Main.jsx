import React from "react";
import { ContactLinks } from "./Elements/ContactLinks";
import { TitleForm } from "./Elements/TitleForm";
import { OurServices } from "./Elements/OurServices";
import { AboutUs } from "./Elements/AboutUs";

export const Main = () => {
    return (
        <main>
            <section className="Contact-links">
                <ContactLinks />
            </section>
            <section className="Title-Form">
                <TitleForm />
            </section>
            <section className="Our-Services">
                <OurServices />
            </section>
            <section className="About-Us">
                <AboutUs />
            </section>
        </main>
    );
};

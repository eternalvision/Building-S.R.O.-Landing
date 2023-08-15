import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Media } from "./assets/Media";
import { Helpers } from "./helpers/Helpers";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Header Helpers={Helpers} openModal={openModal} Media={Media} />
            <Main Helpers={Helpers} openModal={openModal} Media={Media} />
            <Footer Helpers={Helpers} openModal={openModal} Media={Media} />
            <Helpers.Modal
                isOpen={isOpen}
                onClose={onClose}
                Media={Media}
                Helpers={Helpers}
            />
            <Helpers.Alert />
        </>
    );
}

export default App;

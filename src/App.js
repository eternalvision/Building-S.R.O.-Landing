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
            <Helpers.Modal isOpen={isOpen} onClose={onClose} />
            <Header openModal={openModal} Media={Media} />
            <Main openModal={openModal} Media={Media} Helpers={Helpers} />
            <Footer />
        </>
    );
}

export default App;

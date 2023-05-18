import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./helpers/Modal";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal} />
            <Header openModal={openModal} />
            <Main openModal={openModal} />
            <Footer />
        </>
    );
}

export default App;

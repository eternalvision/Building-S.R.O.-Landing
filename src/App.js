import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/reUsed/Modal/Modal";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <React.Fragment>
            <Header openModal={openModal} />
            <Main openModal={openModal} />
            <Footer />
            <Modal isOpen={isOpen} onClose={closeModal} />
        </React.Fragment>
    );
}

export default App;

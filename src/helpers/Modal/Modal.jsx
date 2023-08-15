import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Modal = ({ isOpen, onClose, Media, Helpers }) => {
    const form = useRef();

    let FormResult;
    if (FormResult) Helpers.Alert.message = FormResult;

    useEffect(() => {
        const handleBodyScroll = () => {
            document.body.style.overflow = isOpen ? "hidden" : "auto";
        };
        handleBodyScroll();
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_a5sgahv",
                "template_wuhiljq",
                form.current,
                "VlLtYvVnxytVtSvJ5"
            )
            .then(
                (result) => {
                    FormResult = result.text;
                },
                (error) => {
                    FormResult = error.text;
                }
            );
    };

    return (
        isOpen && (
            <div className="Modal Zoom">
                <div className="Modal-Content">
                    <ul className="Modal-List">
                        <li>
                            <button className="Modal-Close" onClick={onClose}>
                                <Media.CloseLogo />
                            </button>
                        </li>
                        <li>
                            <ul className="Modal-List__Content">
                                <li>
                                    <h3>Požádejte o zavolání</h3>
                                    <form
                                        className="Form"
                                        ref={form}
                                        onSubmit={sendEmail}>
                                        <ul className="Form-List">
                                            <li>
                                                <label htmlFor="Name">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="Name"
                                                        id="Name"
                                                        placeholder="Vaše jméno *"
                                                    />
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="phoneNumber">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="phoneNumber"
                                                        id="phoneNumber"
                                                        placeholder="Telefon *"
                                                    />
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="Comment">
                                                    <textarea
                                                        required
                                                        name="Comment"
                                                        id="Comment"
                                                        placeholder="Komentář"></textarea>
                                                </label>
                                            </li>
                                            <li className="Form-Item__Button">
                                                <input
                                                    type="submit"
                                                    value="Odeslat"
                                                />
                                            </li>
                                        </ul>
                                    </form>
                                </li>
                                <li className="Modal-Item__Image">
                                    <ul>
                                        <li></li>
                                        <li>
                                            <Media.FormImage />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    );
};

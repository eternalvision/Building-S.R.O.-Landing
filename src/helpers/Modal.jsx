import { useEffect } from "react";
import { Media } from "../assets/media/Media";

export const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleBodyScroll = () => {
            document.body.style.overflow = isOpen ? "hidden" : "auto";
        };

        handleBodyScroll();

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

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
                                    <form className="Form">
                                        <ul className="Form-List">
                                            <li>
                                                <label htmlFor="Name">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="name"
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
                                                        name="Comment"
                                                        id="Comment"
                                                        placeholder="Komentář"></textarea>
                                                </label>
                                            </li>
                                            <li className="Form-Item__termsOfUse">
                                                <input
                                                    required
                                                    type="checkbox"
                                                    name="termsOfUse"
                                                    id="termsOfUse"
                                                />
                                                <label htmlFor="termsOfUse">
                                                    <span>
                                                        Přečtěte si uživatelskou
                                                        smlouvu *
                                                    </span>
                                                </label>
                                            </li>
                                            <li className="Form-Item__Button">
                                                <input
                                                    type="button"
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

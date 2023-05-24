import React from "react";

export const RightContent = ({ Media, Helpers, openModal }) => {
    const formattedPhoneNumber = Helpers.PhoneNumber();
    return (
        <>
            <li className="Right-Header__els">
                <ul className="Right-Header__list">
                    <li>
                        <ul className="Right-Contacts">
                            <li>
                                <span>Jsme k dispozici 24/7:</span>
                            </li>
                            <li className="Number-link">
                                <a
                                    href={"tel:" + formattedPhoneNumber}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Media.FcPhone />
                                    <span>
                                        {formattedPhoneNumber.replace(
                                            /(\+\d{3})(\d{3})(\d{3})(\d{3})/,
                                            "$1 $2 $3 $4"
                                        )}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <button onClick={openModal}>
                                    <span>Požádejte o zavolání</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </>
    );
};

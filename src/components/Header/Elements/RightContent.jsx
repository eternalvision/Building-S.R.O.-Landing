import React from "react";
import { FcPhone } from "react-icons/fc";

export let phoneNumber = "+420776766906";
export const RightContent = () => {
    if (!phoneNumber.startsWith("+420")) {
        phoneNumber = `+420${phoneNumber}`;
    }

    return (
        <li className="Right-Header__els">
            <ul className="Right-Header__list">
                <li>
                    <ul className="Right-Contacts">
                        <li>
                            <span>Jsme k dispozici 24/7:</span>
                        </li>
                        <li className="Number-link">
                            <a
                                href={`tel:${phoneNumber}`}
                                target="_blank"
                                rel="noreferrer">
                                <FcPhone />
                                <span>
                                    {phoneNumber.replace(
                                        /(\+\d{3})(\d{3})(\d{3})(\d{3})/,
                                        "$1 $2 $3 $4"
                                    )}
                                </span>
                            </a>
                        </li>
                        <li>
                            <button>
                                <span>Požádejte o zavolání</span>
                                <div></div>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};

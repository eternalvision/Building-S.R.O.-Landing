import React from "react";
import { FcPhone } from "react-icons/fc";

function formatPhoneNumber(phoneNumberString) {
    const cleaned = phoneNumberString.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
    return match ? `+420 ${match[1]} ${match[2]} ${match[3]}` : null;
}

function PhoneNumber({ phoneNumber }) {
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber.slice(3));
    return (
        <a href={`tel:${phoneNumber}`}>{formattedPhoneNumber || phoneNumber}</a>
    );
}

function RightContent() {
    const phoneNumber = "+420123123123";
    return (
        <li className="Right-Header__els">
            <ul className="Right-Header__list">
                <li>
                    <FcPhone />
                </li>
                <li>
                    <ul className="Right-Contacts">
                        <li>
                            <span>Мы на связи 24/7:</span>
                        </li>
                        <li>
                            <PhoneNumber phoneNumber={phoneNumber} />
                        </li>
                        <li>
                            <button>
                                <span>Заказать звонок</span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    );
}

export default RightContent;

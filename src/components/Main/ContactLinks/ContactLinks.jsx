import React from "react";

var phoneNumber = "+420776766906";
export const ContactLinks = ({ Media }) => {
    if (!phoneNumber.startsWith("+420")) {
        phoneNumber = `+420${phoneNumber}`;
    }
    return (
        <ul className="Link-list">
            <li>
                <a
                    href={`viber://chat?number=${phoneNumber}`}
                    className="Viber-link"
                    rel="noreferrer"
                    target="_blank">
                    <Media.ViberLogo />
                    <span>Napište nám na Viber</span>
                </a>
            </li>
            <li>
                <a
                    href={`https://wa.me/${phoneNumber}`}
                    className="WhatsApp-link"
                    rel="noreferrer"
                    target="_blank">
                    <Media.WhatsAppLogo />
                    <span>Napište nám na WhatsApp</span>
                </a>
            </li>
            <li>
                <a
                    href={`https://t.me/${phoneNumber}`}
                    className="Telegram-link"
                    rel="noreferrer"
                    target="_blank">
                    <Media.TelegramLogo />
                    <span>Napište nám na Telegram</span>
                </a>
            </li>
        </ul>
    );
};

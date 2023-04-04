import React from "react";
import { ViberLogo } from "../../../assets/svgs/ViberLogo";
import { WhatsAppLogo } from "../../../assets/svgs/WhatsAppLogo";
import { TelegramLogo } from "../../../assets/svgs/TelegramLogo";
import { phoneNumber } from "../../Header/Elements/RightContent";

export const ContactLinks = () => {
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
                    <ViberLogo />
                    <span>Napište nám na Viber</span>
                </a>
            </li>
            <li>
                <a
                    href={`https://wa.me/${phoneNumber}`}
                    className="WhatsApp-link"
                    rel="noreferrer"
                    target="_blank">
                    <WhatsAppLogo />
                    <span>Napište nám na WhatsApp</span>
                </a>
            </li>
            <li>
                <a
                    href={`https://t.me/${phoneNumber}`}
                    className="Telegram-link"
                    rel="noreferrer"
                    target="_blank">
                    <TelegramLogo />
                    <span>Napište nám na Telegram</span>
                </a>
            </li>
        </ul>
    );
};

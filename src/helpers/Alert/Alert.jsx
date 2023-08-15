import { useState, useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";

export const Alert = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    if (isVisible) {
        if (message === "OK") {
            return (
                <ul>
                    <li
                        className="Status"
                        style={{
                            backgroundColor: "green",
                            boxShadow: "0 0 30px 0 #32a5329d",
                        }}>
                        <section className="AlertSection">
                            <ul>
                                <li>
                                    <BiCheckCircle />
                                    <span>Zpráva odeslána</span>
                                </li>
                            </ul>
                        </section>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li
                        className="Status"
                        style={{
                            backgroundColor: "red",
                            boxShadow: "0 0 30px 0 #c83f27d6",
                        }}>
                        <section className="AlertSection">
                            <ul>
                                <li>
                                    <BiCheckCircle />
                                    <span>
                                        Při odesílání vaší zprávy došlo k chybě,
                                        zkuste to prosím znovu
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </li>
                </ul>
            );
        }
    } else {
        return null;
    }
};

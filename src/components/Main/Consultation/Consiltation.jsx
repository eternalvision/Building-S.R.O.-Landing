import React from "react";

export const Consultation = ({ Media }) => {
    return (
        <ul>
            <li>
                <div>
                    <Media.ConsultanceImg />
                </div>
                <div>
                    <section>
                        <h2>Potřebujete konzultaci?</h2>
                        <p>Zanechte požadavek a my vám zavoláme zpět.</p>
                    </section>
                    <section>
                        <form action="">
                            <ul className="Consultation-form__list">
                                <li>
                                    <input type="text" placeholder="Telefon" />
                                </li>
                                <li>
                                    <input type="button" value="Odeslat" />
                                </li>
                            </ul>
                        </form>
                    </section>
                </div>
            </li>
        </ul>
    );
};

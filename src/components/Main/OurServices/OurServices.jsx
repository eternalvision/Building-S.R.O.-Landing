import React from "react";

export const OurServices = ({ Media, openModal }) => {
    return (
        <>
            <p>NABÍZÍME</p>
            <h2>Naše služby</h2>
            <ul className="Services-list">
                <li>
                    <div>
                        <div>
                            <Media.ExampleImg />
                        </div>
                    </div>
                    <section>
                        <h4>Oprava na klíč</h4>
                        <p>
                            Služba, kdy si klient objedná a zaplatí opravu
                            objektu a specialisté provedou práce dle požadavků a
                            přání klienta.
                        </p>
                        <button onClick={openModal}>
                            <span>Spojit se s námi</span>
                            <Media.PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Media.ExampleImg />
                        </div>
                    </div>
                    <section>
                        <h4>Výstavba domů</h4>
                        <p>
                            Proces, při kterém se pozemek promění v obytný dům
                            připravený k bydlení.
                        </p>
                        <button onClick={openModal}>
                            <span>Spojit se s námi</span>
                            <Media.PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Media.ExampleImg />
                        </div>
                    </div>
                    <section>
                        <h4>Benátský štuk</h4>
                        <p>
                            Typ nástěnné dekorace, která má vlastní vlastnosti
                            hladkého povrchu s jemným leskem.
                        </p>
                        <button onClick={openModal}>
                            <span>Spojit se s námi</span>
                            <Media.PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Media.ExampleImg />
                        </div>
                    </div>
                    <section>
                        <h4>Rozvod elektřiny v domě</h4>
                        <p>Instalace elektroinstalace v bytovém domě.</p>
                        <button onClick={openModal}>
                            <span>Spojit se s námi</span>
                            <Media.PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Media.ExampleImg />
                        </div>
                    </div>
                    <section>
                        <h4>Instalace vodovodního systému</h4>
                        <p>
                            Instalace vodovodního systému v budově nebo
                            zařízení.
                        </p>
                        <button onClick={openModal}>
                            <span>Spojit se s námi</span>
                            <Media.PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Media.ExampleImg />
                        </div>
                    </div>
                    <section>
                        <h4>Montáž sádrokartonu a Instalace obkladů</h4>
                        <p>
                            <b>Instalace sádrokartonu</b> - proces vkládání
                            sádrokartonu na kovové rámy pro částečný výstup z
                            konstrukce.
                        </p>

                        <p>
                            <b>Instalace obkladů</b> - instalace keramických
                            nebo kamenných desek na stěny, podlahy a další
                            vnitřní povrchy.
                        </p>
                        <button onClick={openModal}>
                            <span>Spojit se s námi</span>
                            <Media.PointerLogo />
                        </button>
                    </section>
                </li>
            </ul>
        </>
    );
};

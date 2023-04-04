import React from "react";
import { Images } from "../../../assets/images/Images";
import { PointerLogo } from "../../../assets/svgs/PointerLogo";

export const OurServices = () => {
    return (
        <React.Fragment>
            <p>NABÍZÍME</p>
            <h2>Naše služby</h2>
            <ul className="Services-list">
                <li>
                    <div>
                        <div>
                            <Images.Card1Image />
                        </div>
                    </div>
                    <section>
                        <h4>Oprava na klíč</h4>
                        <p>
                            Služba, kdy si klient objedná a zaplatí opravu
                            objektu a specialisté provedou práce dle požadavků a
                            přání klienta.
                        </p>
                        <button>
                            <span>Spojit se s námi</span>
                            <PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Images.Card2Image />
                        </div>
                    </div>
                    <section>
                        <h4>Výstavba domů</h4>
                        <p>
                            Proces, při kterém se pozemek promění v obytný dům
                            připravený k bydlení.
                        </p>
                        <button>
                            <span>Spojit se s námi</span>
                            <PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Images.Card3Image />
                        </div>
                    </div>
                    <section>
                        <h4>Benátský štuk</h4>
                        <p>
                            Typ nástěnné dekorace, která má vlastní vlastnosti
                            hladkého povrchu s jemným leskem.
                        </p>
                        <button>
                            <span>Spojit se s námi</span>
                            <PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Images.Card4Image />
                        </div>
                    </div>
                    <section>
                        <h4>Rozvod elektřiny v domě</h4>
                        <p>Instalace elektroinstalace v bytovém domě.</p>
                        <button>
                            <span>Spojit se s námi</span>
                            <PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Images.Card4Image />
                        </div>
                    </div>
                    <section>
                        <h4>Instalace vodovodního systému</h4>
                        <p>
                            Instalace vodovodního systému v budově nebo
                            zařízení.
                        </p>
                        <button>
                            <span>Spojit se s námi</span>
                            <PointerLogo />
                        </button>
                    </section>
                </li>
                <li>
                    <div>
                        <div>
                            <Images.Card4Image />
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
                        <button>
                            <span>Spojit se s námi</span>
                            <PointerLogo />
                        </button>
                    </section>
                </li>
            </ul>
        </React.Fragment>
    );
};

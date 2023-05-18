import { Media } from "../../../assets/media/Media";
export const AboutUs = () => {
    return (
        <ul>
            <li>
                <ul className="AboutUs-title">
                    <li>
                        <div>
                            <Media.PaintLogo />
                        </div>
                        <span>Individuální přístup</span>
                    </li>
                    <li>
                        <div>
                            <Media.WorkerLogo />
                        </div>
                        <span>Bezplatné konzultace</span>
                    </li>
                    <li>
                        <div>
                            <Media.LineLogo />
                        </div>
                        <span>Pohodlný platební systém</span>
                    </li>
                </ul>
            </li>
            <li>
                <ul className="AboutUs-info">
                    <li className="AboutUs-info__title">
                        <ul>
                            <li>O společnosti</li>
                            <li>
                                <p>
                                    Naše společnost se specializuje na výstavbu
                                    kvalitních a inovativních obytných a
                                    komerčních budov. Poskytujeme celou řadu
                                    služeb, od plánování a projektování až po
                                    výstavbu a údržbu budov.
                                </p>
                                <p>
                                    Máme rozsáhlé zkušenosti ve stavebnictví a
                                    jsme hrdí na svou pověst spolehlivého a
                                    odpovědného partnera. Poskytujeme vysoce
                                    kvalitní služby a používáme pouze
                                    nejmodernější technologie a materiály,
                                    abychom zajistili bezpečnost a trvanlivost
                                    každého projektu.
                                </p>
                                <p>
                                    Jsme společnost s evropskou úrovní služeb,
                                    jejímž cílem je splnit potřeby a očekávání
                                    každého klienta. Náš tým tvoří vysoce
                                    kvalifikovaní odborníci, kteří jsou
                                    připraveni poskytnout zákazníkům nejlepší
                                    řešení v oblasti stavebnictví v závislosti
                                    na jejich potřebách a rozpočtu.
                                </p>
                                <p>
                                    Naše společnost se snaží vytvářet krásné,
                                    pohodlné a udržitelné stavby, které vydrží
                                    mnoho let a budou zdrojem hrdosti pro své
                                    majitele a uživatele.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Media.AboutUsImg />
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <hr />
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </li>
        </ul>
    );
};

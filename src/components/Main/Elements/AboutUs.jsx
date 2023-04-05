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
                <ul>
                    <li></li>
                    <li>
                        <div>
                            <div></div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

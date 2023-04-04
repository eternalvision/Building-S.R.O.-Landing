import { Images } from "../../../assets/images/Images";
import { PointerLogo } from "../../../assets/svgs/PointerLogo";

export const TitleForm = () => {
    return (
        <ul>
            <li>
                <div>
                    <Images.MainImage />
                </div>
                <div>
                    <section>
                        <h1>Konstrukce</h1>
                        <p>poskytujeme celou škálu služeb</p>
                        <button>
                            <span>Spojit se s námi</span>
                            <PointerLogo />
                        </button>
                    </section>
                </div>
            </li>
        </ul>
    );
};

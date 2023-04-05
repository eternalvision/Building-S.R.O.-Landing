import { Media } from "../../../assets/media/Media";

export const TitleForm = () => {
    return (
        <ul>
            <li>
                <div>
                    <Media.MainTitleImage />
                </div>
                <div>
                    <section>
                        <h1>Konstrukce</h1>
                        <p>poskytujeme celou škálu služeb</p>
                        <button>
                            <span>Spojit se s námi</span>
                            <Media.PointerLogo />
                        </button>
                    </section>
                </div>
            </li>
        </ul>
    );
};

import TitleImage from "./jpg/TitleImage.jpg";
import ExampleImage from "./jpg/ExampleImage.jpg";
import AboutUsImage from "./jpg/AboutUsImage.jpg";

import LineLogo from "./svg/LineLogo";
import PaintLogo from "./svg/PaintLogo";
import PointerLogo from "./svg/PointerLogo";
import TelegramLogo from "./svg/TelegramLogo";
import ViberLogo from "./svg/ViberLogo";
import WhatsAppLogo from "./svg/WhatsAppLogo";
import WorkerLogo from "./svg/WorkerLogo";

const MainTitleImage = () => {
    return <img className="Main-img" src={TitleImage} alt="" />;
};

const ExampleImg = () => {
    return <img className="Main-img" alt="example" src={ExampleImage} />;
};

const AboutUsImg = () => {
    return <img className="Main-img" alt="example" src={AboutUsImage} />;
};

export const Media = {
    ExampleImg,
    AboutUsImg,
    MainTitleImage,
    LineLogo,
    PaintLogo,
    PointerLogo,
    TelegramLogo,
    ViberLogo,
    WhatsAppLogo,
    WorkerLogo,
};

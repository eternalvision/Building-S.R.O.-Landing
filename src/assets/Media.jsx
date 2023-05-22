import TitleImage from "./jpg/TitleImage.jpg";
import ExampleImage from "./jpg/ExampleImage.jpg";
import AboutUsImage from "./jpg/AboutUsImage.jpg";
import FormImg from "./jpg/FormImage.jpg";

import Logo from "./svg/Logo";
import LineLogo from "./svg/LineLogo";
import PaintLogo from "./svg/PaintLogo";
import PointerLogo from "./svg/PointerLogo";
import TelegramLogo from "./svg/TelegramLogo";
import ViberLogo from "./svg/ViberLogo";
import WhatsAppLogo from "./svg/WhatsAppLogo";
import WorkerLogo from "./svg/WorkerLogo";
import CloseLogo from "./svg/CloseLogo";
import MedalLogo from "./svg/MedalLogo";
import RocketLogo from "./svg/RocketLogo";
import MedallionLogo from "./svg/MedallionLogo";

const MainTitleImage = () => {
    return <img className="Main-img" src={TitleImage} alt="" />;
};

const FormImage = () => {
    return <img className="Form-img" src={FormImg} alt="" />;
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
    FormImage,
    Logo,
    LineLogo,
    PaintLogo,
    PointerLogo,
    TelegramLogo,
    ViberLogo,
    WhatsAppLogo,
    WorkerLogo,
    CloseLogo,
    MedalLogo,
    RocketLogo,
    MedallionLogo,
};

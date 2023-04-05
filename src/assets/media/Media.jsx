import TitleImage from "./jpg/TitleImage.jpg";
import ExampleImage from "./jpg/ExampleImage.jpg";
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

export const Media = {
    ExampleImg,
    MainTitleImage,
    // Card1Image,
    // Card2Image,
    // Card3Image,
    // Card4Image,
    LineLogo,
    PaintLogo,
    PointerLogo,
    TelegramLogo,
    ViberLogo,
    WhatsAppLogo,
    WorkerLogo,
};

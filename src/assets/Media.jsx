import { FcPhone } from "react-icons/fc";
import TitleImage from "./jpg/TitleImage.jpg";
import ExampleImage from "./jpg/ExampleImage.jpg";
import AboutUsImage from "./jpg/AboutUsImage.jpg";
import FormImg from "./jpg/FormImage.jpg";
import Consultance from "./jpg/Consultance.jpg";
import Mastercard from "./jpg/Mastercard.jpg";

import Money from "./png/money.png";
import Visa from "./png/visa.png";

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
    return <img className="Main-img" alt="" src={TitleImage} />;
};
const FormImage = () => {
    return <img className="Form-img" alt="" src={FormImg} />;
};
const ExampleImg = () => {
    return <img className="Main-img" alt="example" src={ExampleImage} />;
};
const AboutUsImg = () => {
    return <img className="Main-img" alt="example" src={AboutUsImage} />;
};
const ConsultanceImg = () => {
    return <img className="Main-img" alt="example" src={Consultance} />;
};
const MastercardImg = () => {
    return (
        <img
            width={60}
            height={45}
            className="MethodsLogo"
            alt=""
            src={Mastercard}
        />
    );
};
const MoneyImg = () => {
    return (
        <img
            width={60}
            height={45}
            className="MethodsLogo"
            alt=""
            src={Money}
        />
    );
};
const VisaImg = () => {
    return (
        <img width={60} height={45} className="MethodsLogo" alt="" src={Visa} />
    );
};

export const Media = {
    ExampleImg,
    AboutUsImg,
    MainTitleImage,
    FormImage,
    ConsultanceImg,
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
    FcPhone,
    MastercardImg,
    MoneyImg,
    VisaImg,
};

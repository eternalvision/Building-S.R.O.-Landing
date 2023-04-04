import TitleImage from "./TitleImage.jpg";
import Card1 from "./Card1.jpg";
import Card2 from "./Card2.jpg";
import Card3 from "./Card3.jpg";
import Card4 from "./Card4.jpg";

const MainImage = () => {
    return <img className="Main-img" src={TitleImage} alt="" />;
};

const Card1Image = () => {
    return <img className="Main-img" src={Card1} alt="" />;
};

const Card2Image = () => {
    return <img className="Main-img" src={Card2} alt="" />;
};

const Card3Image = () => {
    return <img className="Main-img" src={Card3} alt="" />;
};

const Card4Image = () => {
    return <img className="Main-img" src={Card4} alt="" />;
};

export const Images = {
    MainImage,
    Card1Image,
    Card2Image,
    Card3Image,
    Card4Image,
};

import React from "react";
import Slider from "react-slick";

import ImageF from "../../../assets/media/jpg/54640811_2.jpg";
import ImageS from "../../../assets/media/jpg/54687669_2.jpg";
import ImageT from "../../../assets/media/jpg/54896523_2.jpg";
import ImageC from "../../../assets/media/jpg/55107416_2.jpg";

export const Gallery = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 100,
    };
    return (
        <section className="Gallery-section">
            <h4>GALERIE</h4>
            <p>Podívejte se na naši práci</p>
            <Slider {...settings}>
                <div className="Gallery-image__block">
                    <img width={580} height={350} src={ImageF} alt="" />
                </div>
                <div className="Gallery-image__block">
                    <img width={580} height={350} src={ImageS} alt="" />
                </div>
                <div className="Gallery-image__block">
                    <img width={580} height={350} src={ImageT} alt="" />
                </div>
                <div className="Gallery-image__block">
                    <img width={580} height={350} src={ImageC} alt="" />
                </div>
                <div className="Gallery-image__block">
                    <img width={580} height={350} src={ImageF} alt="" />
                </div>
                <div className="Gallery-image__block">
                    <img width={580} height={350} src={ImageS} alt="" />
                </div>
                <div className="Gallery-image__block">
                    <img width={580} height={350} src={ImageT} alt="" />
                </div>
                <div className="Gallery-image__block">
                    <img width={580} height={350} src={ImageC} alt="" />
                </div>
            </Slider>
        </section>
    );
};

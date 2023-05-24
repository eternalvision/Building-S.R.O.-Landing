import React from "react";
import ImageGallery from "react-image-gallery";

export const ContainerCarousel = () => {
    const images = [
        {
            original: "https://picsum.photos/id/1018/1920/1080/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1920/1080/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1920/1080/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <section className="Carousel-section">
            <h4>GALERIE</h4>
            <p>Podívejte se na naši práci</p>
            <ImageGallery items={images} />
        </section>
    );
};

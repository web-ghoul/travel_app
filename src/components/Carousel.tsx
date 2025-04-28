import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const images = [
  "/images/image1.svg",
  "/images/image2.svg",
  "/images/image3.svg",
  "/images/image1.svg",
  "/images/image2.svg",
  "/images/image3.svg",
  "/images/image1.svg",
  "/images/image2.svg",
  "/images/image3.svg",
];

const Carousel = () => {
  const [settings, setSettings] = useState({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  });

  const handleWindowSize = () => {
    if (window.innerWidth <= 768) {
      setSettings({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      });
    } else if (window.innerWidth <= 992) {
      setSettings({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      });
    } else {
      setSettings({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      });
    }
  };

  useEffect(() => {
    handleWindowSize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        handleWindowSize();
      });
    }
  }, []);

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} className="carousel_image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

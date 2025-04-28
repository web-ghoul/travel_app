import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

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

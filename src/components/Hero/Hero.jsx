import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { slidesData } from "../../data/slidesData";
import SlideItem from "./SlideItem";
slidesData;

const Hero = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {slidesData.map((slide) => (
            <SlideItem slide={slide} />
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Hero;

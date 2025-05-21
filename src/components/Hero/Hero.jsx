import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import { slidesData } from "../../data/slidesData";
import SlideItem from "./SlideItem";

const Hero = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 0,
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
    <div
      className={`w-full h-[60vh] ${darkMode ? "bg-[#655252]" : "bg-gray-50"}`}
    >
      <div className="swiper mySwiper h-full w-full">
        <div
          className={`swiper-wrapper h-full ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {slidesData.map((slide) => (
            <SlideItem key={slide.id} slide={slide} />
          ))}
        </div>
        <div
          className={`swiper-pagination ${
            darkMode ? "!text-gray-200" : "!text-gray-800"
          }`}
        ></div>
        <div
          className={`swiper-button-next ${
            darkMode ? "!text-gray-200" : "!text-gray-800"
          }`}
        ></div>
        <div
          className={`swiper-button-prev ${
            darkMode ? "!text-gray-200" : "!text-gray-800"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Hero;

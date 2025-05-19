import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
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
          <div className="swiper-slide relative">
            <img
              src="https://via.placeholder.com/1200x400?text=Find+Top+Freelancers"
              alt="Banner 1"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 banner-text">
              <div className="text-center">
                <h2 className="text-3xl font-bold">Find Top Freelancers</h2>
                <p className="mt-2">Hire experts for your projects today!</p>
                <button
                  className="mt-4 px-4 py-2 rounded"
                  style={{ backgroundColor: "#85A947", color: "#EFE3C2" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="swiper-slide relative">
            <img
              src="https://via.placeholder.com/1200x400?text=Post+Your+Task"
              alt="Banner 2"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 banner-text">
              <div className="text-center">
                <h2 className="text-3xl font-bold">Post Your Task</h2>
                <p className="mt-2">Get bids from skilled professionals.</p>
                <button
                  className="mt-4 px-4 py-2 rounded"
                  style={{ backgroundColor: "#85A947", color: "#EFE3C2" }}
                >
                  Post Now
                </button>
              </div>
            </div>
          </div>
          <div className="swiper-slide relative">
            <img
              src="https://via.placeholder.com/1200x400?text=Join+Our+Community"
              alt="Banner 3"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 banner-text">
              <div className="text-center">
                <h2 className="text-3xl font-bold">Join Our Community</h2>
                <p className="mt-2">Connect with freelancers worldwide.</p>
                <button
                  className="mt-4 px-4 py-2 rounded"
                  style={{ backgroundColor: "#85A947", color: "#EFE3C2" }}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import { ServiceData } from "../Home/ServiceData";

const ActiveSlider = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col w-full md:mt-8">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[FreeMode, Autoplay, Navigation]}
          className="w-full h-auto"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col md:flex-row items-center bg-white px-6 md:px-16 py-6">
                <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 antialiased ">
                  <h4 className="text-2xl lg:text-6xl font-semibold text-blue-600">
                    {item.title}
                  </h4>
                  <p className="lg:text-lg text-gray-600 mt-2">
                    {item.content}
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <img
                    src={item.backgroundImage}
                    alt={item.title}
                    className="w-full h-auto max-h-80 rounded-lg object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden md:block">
          <div className="swiper-button-prev flex items-center justify-center absolute mx-2 top-1/2">
            <i className="fa-solid fa-angles-left"></i>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="swiper-button-next flex items-center justify-center absolute mx-2 top-1/2">
            <i className="fa-solid fa-angles-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveSlider;

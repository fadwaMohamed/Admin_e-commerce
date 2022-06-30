import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ImageSlide from "./imageSlide";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderHome = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {[1, 2, 3].map((img) => {
        return (
          <SwiperSlide key={img}>
            <ImageSlide image={`slide${img}.jpg`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderHome;

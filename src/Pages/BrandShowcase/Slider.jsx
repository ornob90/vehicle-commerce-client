import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCube,
  Autoplay,
} from "swiper/modules";
// import "swiper/swiper-bundle.min.css";
import "swiper/css/bundle";

const Slider = ({ ads }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {ads.map((ad) => (
        <SwiperSlide key={ad.id}>
          <img src={ad.img} className="h-[450px] w-full object-cover" alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

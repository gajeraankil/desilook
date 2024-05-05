import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import carousel_1 from "../assets/carousel_1.webp";
import carousel_2 from "../assets/carousel_2.webp";
import carousel_3 from "../assets/carousel_3.webp";
import carousel_4 from "../assets/carousel_4.webp";

const Hero = () => {
  return (
    <Swiper
      modules={[A11y, Autoplay, Navigation]}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Box
          className="block w-screen h-auto"
          component="img"
          alt="Desilook"
          src={carousel_1}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className="block w-screen h-auto"
          component="img"
          alt="Desilook"
          src={carousel_2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className="block w-screen h-auto"
          component="img"
          alt="Desilook"
          src={carousel_3}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Box
          className="block w-screen h-auto"
          component="img"
          alt="Desilook"
          src={carousel_4}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;

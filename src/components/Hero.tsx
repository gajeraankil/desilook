import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import carousel_1 from "../assets/carousel_1.webp";
import carousel_2 from "../assets/carousel_2.webp";
import carousel_3 from "../assets/carousel_3.webp";
import carousel_4 from "../assets/carousel_4.webp";

const Hero = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Box component="section">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[A11y, Autoplay, Navigation]}
        slidesPerView={1}
        navigation={false}
        scrollbar={{ draggable: true }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {[carousel_1, carousel_2, carousel_3, carousel_4]?.map(
          (carousel, index) => (
            <SwiperSlide key={index}>
              <Box
                className="block h-auto w-screen"
                component="img"
                alt="Desilook"
                src={carousel}
              />
            </SwiperSlide>
          ),
        )}
        <IconButton
          className="absolute left-2.5 top-2/4 z-[1] -translate-y-2/4 bg-[#ffffffb3] text-[#343f52]"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          className="absolute right-2.5 top-2/4 z-[1] -translate-y-2/4 bg-[#ffffffb3] text-[#343f52]"
          onClick={() => swiperRef.current.slideNext()}
        >
          <ArrowForward />
        </IconButton>
      </Swiper>
    </Box>
  );
};

export default Hero;

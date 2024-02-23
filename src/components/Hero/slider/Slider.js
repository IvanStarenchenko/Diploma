import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay , A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4500 , disableOnInteraction: true }}
    >
      {children.map((slide, index) => (
        <SwiperSlide key={index} className = "swiper-slide">
            <div className="slide-hero__text">
                    <h5 className="slide-tag" data-swiper-parallax="200" data-swiper-parallax-opacity="0.7">T-shirt / Tops</h5>
                    <h1 className="slide-title"data-swiper-parallax="100">Summer Value Pack</h1>
                    <h4 className="slide-sub"data-swiper-parallax="150" data-swiper-parallax-opacity="0.5">cool / colorful / comfy</h4>
                    <a className="slide-btn" href="#"><span>Shop Now</span> </a>
                </div>
            {slide}
        </SwiperSlide>
        
      ))}
    
    </Swiper>
  );
};

export default Slider;

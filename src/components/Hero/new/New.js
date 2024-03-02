import './new.scss'

import React from 'react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Инициализация модулей Swiper


const NewStaff = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, A11y]}
      breakpoints={{
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
      navigation
      autoplay={{ delay: 3000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-new">
            <div className="slide-new__inner">
              <img src={slide} alt={`Slide ${index + 1}`} />
              <div className="new-product__name">Knitted Joggers</div>
            </div>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewStaff
import './new.scss'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Инициализация модулей Swiper


const NewStaff = ({ slides }) => {
  return (
    <Swiper
    spaceBetween={30}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
            <div class="swiper-slide slide-new">
                <div class="slide-new__inner">
                    <img src={slide} alt={`Slide ${index + 1}`} />
                    <div class="new-product__name">Knitted Joggers</div>
                </div>
            </div>
         
        </SwiperSlide>
      ))}
    </Swiper>
  );
};



export default NewStaff
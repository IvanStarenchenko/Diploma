import './Feedback.scss'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import first from '../../../img/hero/feedback/1.png';
import second from '../../../img/hero/feedback/2.png';
import third from '../../../img/hero/feedback/3.png';
import threeAndHalf from '../../../img/hero/feedback/3.5stars.png';
import fourStars from '../../../img/hero/feedback/4stars.png';

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <h2 className="feedback__title title">Feedback</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: '.feedback-swiper-button-next',
            prevEl: '.feedback-swiper-button-prev',
          }}
          pagination={{
            el: '.feedback-swiper-pagination',
            clickable: true,
          }}
        >
            <div class="swiper feedback-swiper">
                <div class="swiper-wrapper">
                    <SwiperSlide>
                    <div className="slide-feedback__card card-feedback">
                    {
                        <div class="swiper-slide slide-feedback">
                            <div class="slide-feedback__card card-feedback">
                                <div class="card-feedback__person">
                                    <img class="person" src={first} alt=""/>
                                    <img src={threeAndHalf} alt=""/>
                                </div>
                                <div class="card-feedback__name">Floyd Miles</div>
                                <p class="card-feedback__text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                    }
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-feedback__card card-feedback">
                        {
                            <div class="swiper-slide slide-feedback">
                                <div class="slide-feedback__card card-feedback">
                                    <div class="card-feedback__person">
                                    <img class="person" src={second} alt=""/>
                                    <img src={fourStars} alt=""/>
                                    </div>
                                    <div class="card-feedback__name">Floyd Miles</div>
                                    <p class="card-feedback__text">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>

                                </div>
                            </div> 
                        }
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-feedback__card card-feedback">
                        {
                            <div class="swiper-slide slide-feedback">
                                <div class="slide-feedback__card card-feedback">
                                    <div class="card-feedback__person">
                                    <img class="person" src={third} alt=""/>
                                        <img src={threeAndHalf} alt=""/>
                                    </div>
                                    <div class="card-feedback__name">Floyd Miles</div>
                                    <p class="card-feedback__text">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                        }
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-feedback__card card-feedback">
                        {
                            <div class="swiper-slide slide-feedback">
                                <div class="slide-feedback__card card-feedback">
                                    <div class="card-feedback__person">
                                    <img class="person" src={second} alt=""/>
                                    <img src={fourStars} alt=""/>
                                    </div>
                                    <div class="card-feedback__name">Floyd Miles</div>
                                    <p class="card-feedback__text">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>

                                </div>
                            </div> 
                        }
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-feedback__card card-feedback">
                        {
                            <div class="swiper-slide slide-feedback">
                                <div class="slide-feedback__card card-feedback">
                                    <div class="card-feedback__person">
                                    <img class="person" src={third} alt=""/>
                                        <img src={threeAndHalf} alt=""/>
                                    </div>
                                    <div class="card-feedback__name">Floyd Miles</div>
                                    <p class="card-feedback__text">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                        }
                        </div>
                    </SwiperSlide>
                </div>
            </div>
        </Swiper>
        <div className="feedback-swiper-pagination"></div>
        <div className="feedback-swiper-button-prev"></div>
        <div className="feedback-swiper-button-next"></div>
      </div>
    </section>
  );
};


export default Feedback
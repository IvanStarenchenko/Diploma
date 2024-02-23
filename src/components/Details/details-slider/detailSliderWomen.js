import first from '../../../img/details/01.png'
import second from '../../../img/details/02.png'
import third from '../../../img/details/03.png'
import fourth from '../../../img/details/04.png'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

import {Pagination, Scrollbar, Thumbs ,FreeMode,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
const DetailsSliderWomen = (props) => {
    const { id } = useParams();
    const selectedItem = props.productM.find((item) => item.id === parseInt(id));
  
    if (!selectedItem) {
      return <div>Товар не найден</div>;
    }
    return(
        <div className="product-detail__slider">
            <div className="swiper swiper-product">
                <div className="swiper-wrapper wrapper-product">
                    <div className="swiper-slide slide-product">
                        <img src={selectedItem && selectedItem.itemImageMain} alt=""/>
                    </div>
                </div>

            </div>
            <div className="swiper swiper-thumbs">
                <div className="swiper-wrapper wrapper-thumbs">
                    <div className="swiper-slide slide-thumb">
                        <img src={selectedItem && selectedItem.itemImageSide} alt=""/>
                    </div>
                    <div className="swiper-slide slide-thumb">
                        <img src={selectedItem && selectedItem.itemImageSide2} alt=""/>
                    </div>
                    <div className="swiper-slide slide-thumb">
                        <img src={selectedItem && selectedItem.itemImageSide3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
// const DetailsSlider = () => {
//     const images = [first , second , third , fourth]
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     return(
//         <>
//             <Swiper
//                 modules={[Pagination, Scrollbar ,Navigation, Thumbs , FreeMode] }
//                 thumbs={{ swiper: thumbsSwiper }}
//                 spaceBetween={30}
//                 slidesPerView={1}
                
//                 pagination={{ clickable: true }}
//             >
//                 {images.map((slide, index) => (
//                 <SwiperSlide key={index} className = "swiper-slide">
//                     {slide}
//                 </SwiperSlide>
//                 ))}
//             </Swiper>
//             <Swiper
//                 // onSwiper={setThumbsSwiper}
//                 spaceBetween={10}
//                 slidesPerView={1}
//                 freeMode={true}
//                 watchSlidesProgress={true}
//                 modules={[FreeMode, Navigation, Thumbs]}
//                 >
//                   {images.map((slide, index) => (
//                     <SwiperSlide key={index} className = "swiper-slide">
//                         {slide}
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </>
//     )
// }

export default DetailsSliderWomen
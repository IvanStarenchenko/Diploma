import React from 'react';
import { Pagination, Scrollbar, Navigation, Thumbs, FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import first from '../../../img/details/01.png'
import second from '../../../img/details/02.png'
import third from '../../../img/details/03.png'
import fourth from '../../../img/details/04.png'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

// import { Pagination, Scrollbar, Thumbs, FreeMode, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// const DetailsSlider = (props) => {
//     const { id } = useParams();
//     const selectedItem = props.product.find((item) => item.id === parseInt(id));

//     if (!selectedItem) {
//         return <div>Товар не найден</div>;
//     }
//     return (
//         <div className="product-detail__slider">
//             <div className="swiper swiper-product">
//                 <div className="swiper-wrapper wrapper-product">
//                     <div className="swiper-slide slide-product">
//                         <img src={selectedItem && selectedItem.itemImageMain} alt="" />
//                     </div>
//                 </div>
//             </div>

//             <div className="swiper swiper-thumbs">
//                 <div className="swiper-wrapper wrapper-thumbs">
//                     <div className="swiper-slide slide-thumb">
//                         <img src={selectedItem && selectedItem.itemImageSide} alt="" />
//                     </div>
//                     <div className="swiper-slide slide-thumb">
//                         <img src={selectedItem && selectedItem.itemImageSide2} alt="" />
//                     </div>
//                     <div className="swiper-slide slide-thumb">
//                         <img src={selectedItem && selectedItem.itemImageSide3} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
const DetailsSlider = (props) => {
    const images = [first, second, third, fourth]
    const [thumbsSwiper] = useState(null);
    const { id } = useParams();
    const selectedItem = props.product.find((item) => item.id === parseInt(id));
    return (
        <Swiper
            modules={[Pagination, Scrollbar, Navigation, Thumbs, FreeMode]}
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={30}
            slidesPerView={1}

            pagination={{ clickable: true }}
        >
            {images.map((slide, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <img src={selectedItem && selectedItem.itemImageMain} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default DetailsSlider
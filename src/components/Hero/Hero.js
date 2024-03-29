import './slider/slider.scss'

import Slider from './slider/Slider'
import Discount from './discount/discount'
import NewStaff from './new/New'
import Brands from './brands/Brands'
import Fashion from './Fashion/Fashion'
import Categories from './categories/Categories'
import CategoriesW from './categoriesW/CategoriesW'
import Saving from './saving/Saving'
import Limelight from './limelight/Limelight'
import Feedback from './feedback/Feedback'

import bg from '../../img/hero/slider/bg.jpg'
import first from '../../img/hero/new/01.png'
import second from '../../img/hero/new/02.png'
import third from '../../img/hero/new/03.png'
import fourth from '../../img/hero/new/04.png'
const Hero = () => {
    const imagesNew = [
        first,
        second,
        third,
        fourth,
        first,
        second,
        third,
        fourth,
        // Добавьте другие изображения по мере необходимости
    ];
    return (
        <section className="hero">
            <div className="swiper swiper-hero">
                <div className="container container--wide">
                    <div className="swiper-wrapper">
                        <div className='slide-hero'></div>

                        <Slider>
                            <img className='slide-hero__image' src={bg} />

                            <img className='slide-hero__image' src={bg} />

                            <img className='slide-hero__image' src={bg} />

                            <img className='slide-hero__image' src={bg} />
                        </Slider>
                    </div>
                </div>
            </div>

            <div className='block discount'>
                <Discount />
            </div>

            <div className='block newStaff'>
                <div className='new-slider'>
                    <div className='swiper new-swiper'>
                        <div className="container">
                            <h2 className="new__title title">New Arival</h2>

                            <div className='swiper-wrapper new-wrapper'>
                                <NewStaff slides={imagesNew} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='block saving'>
                <Saving />
            </div>

            <div className='block fashion'>
                <Fashion />
            </div>

            <div className='block categories'>
                <Categories />
            </div>

            <div className='block categoriesW'>
                <CategoriesW />
            </div>

            <div className='block brands'>
                <Brands />
            </div>

            <div className='block limelight'>
                <Limelight />
            </div>

            <div className='block feedback'>
                <Feedback />
            </div>
        </section>
    )
}

export default Hero
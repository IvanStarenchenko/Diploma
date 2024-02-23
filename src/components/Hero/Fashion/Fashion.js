import './Fashion.scss'
import image from '../../../img/hero/fashion/02.png'
const Fashion = () => {
    return (
        <section className="fashion">
            <div className="container">
                <div className="fashion__content">
                    <div className="fashion__main">
                        <div className="fashion__text">
                            <h3 className="fashion__title">WE MADE YOUR EVERYDAY FASHION BETTER!</h3>
                            <p className="fashion__subtitle">In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                            <a href="#" className="fashion__btn"><span>Shop Now</span></a>
                        </div>
                    </div>
                    <div className="fashion__image"><img src={image} alt=""/></div>
                </div>
            </div>
        </section>
    )
}

export default Fashion
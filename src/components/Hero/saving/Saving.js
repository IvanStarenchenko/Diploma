import './saving.scss'
import first from '../../../img/hero/saving/1.png'
import second from '../../../img/hero/saving/2.png'
import third from '../../../img/hero/saving/3.png'
import fourth from '../../../img/hero/saving/4.png'
import fifth from '../../../img/hero/saving/5.png'
import sixth from '../../../img/hero/saving/svg/black.svg'
import seventh from '../../../img/hero/saving/svg/white.svg'

const Saving = () => {
    return (
        <section className="saving">
            <div className="container">
                <h2 className="saving__title title">Big Saving Zone</h2>

                <div className="saving__items">
                    <div className="saving__item item">
                        <div className="item__text">
                            <h3 className="item__title">Hawaiian Shirts</h3>
                            <p className="item__subtitle">Dress up in summer vibe</p>
                            <div className="item__discount">UPTO 50% OFF</div>
                            <img className="item__arrow" src={seventh} alt="" />
                            <a className="item__btn">SHOP NOW</a>
                        </div>
                        <img className="item__bg" src={first} alt="" />
                    </div>

                    <div className="saving__item item">
                        <div className="item__text">
                            <div className="item__limited">Limited Stock</div>
                            <h3 className="item__title">Printed T-Shirt</h3>
                            <p className="item__subtitle">New Designs Every Week</p>
                            <div className="item__discount">UPTO 40% OFF</div>
                            <img className="item__arrow" src={seventh} alt="" />
                            <a className="item__btn">SHOP NOW</a>
                        </div>
                        <img className="item__bg" src={second} alt="" />
                    </div>

                    <div className="saving__item item">
                        <div className="item__text">
                            <h3 className="item__title">Cargo Joggers</h3>
                            <p className="item__subtitle">Move with style & comfort</p>
                            <div className="item__discount">UPTO 50% OFF</div>
                            <img className="item__arrow" src={sixth} alt="" />
                            <a className="item__btn">SHOP NOW</a>
                        </div>
                        <img className="item__bg" src={third} alt="" />
                    </div>

                    <div className="saving__item item item--wide">
                        <div className="item__text">
                            <h3 className="item__title">Urban Shirts</h3>
                            <p className="item__subtitle">Live In Confort</p>
                            <div className="item__discount">FLAT 60% OFF</div>
                            <img className="item__arrow" src={sixth} alt="" />
                            <a className="item__btn">SHOP NOW</a>
                        </div>
                        <img className="item__bg" src={fourth} alt="" />
                    </div>

                    <div className="saving__item item item--wide">
                        <div className="item__text">
                            <h3 className="item__title">Oversized T-Shirts</h3>
                            <p className="item__subtitle">Street Style Icon</p>
                            <div className="item__discount">FLAT 60% OFF</div>
                            <img className="item__arrow" src={sixth} alt="" />
                            <a className="item__btn">SHOP NOW</a>
                        </div>
                        <img className="item__bg" src={fifth} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Saving
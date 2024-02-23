import './saving.scss'
import first from '../../../img/hero/saving/1.png'
import second from '../../../img/hero/saving/2.png'
import third from '../../../img/hero/saving/3.png'
import fourth from '../../../img/hero/saving/4.png'
import fifth from '../../../img/hero/saving/5.png'

const Saving = () => {
    return(
        <section className="saving">
            <div className="container">
                <h2 className="saving__title title">Big Saving Zone</h2>
                <div className="saving__blocks">
                    <div className="saving__top">
                        <div className="saving__block hawaii">
                            <div className="hawaii__text saving-top-text">
                                <h3 className="saving-top-text__title">Hawaiian Shirts</h3>
                                <p className="saving-top-text__subtitle">Dress up in summer vibe</p>
                                <div className="saving-top-text__discount">UPTO 50% OFF</div>
                                <a className="saving-top-text__bnt">SHOP NOW</a>
                            </div>
                            <img src={first}  alt=""/>
                        </div>
                        <div className="saving__block">
                            <div className="printed__text saving-top-text">
                                <div className="saving-top-text__limited">Limited Stock</div>
                                <h3 className="saving-top-text__title">Printed T-Shirt</h3>
                                <p className="saving-top-text__subtitle">New Designs Every Week</p>
                                <div className="saving-top-text__discount">UPTO 40% OFF</div>
                                <a className="saving-top-text__bnt">SHOP NOW</a>
                            </div>
                            <img src= {second} alt=""/>
                        </div>
                        <div className="saving__block">
                            <div className="cargo__text saving-top-text">
                                <h3 className="saving-top-text__title">Cargo Joggers</h3>
                                <p className="saving-top-text__subtitle">Move with style & comfort</p>
                                <div className="saving-top-text__discount">UPTO 50% OFF</div>
                                <a className="saving-top-text__bnt black-btn">SHOP NOW</a>
                            </div>
                            <img src={third} alt=""/>
                        </div>
                    </div>
                    <div className="saving__bottom">
                        <div className="saving__block">
                            <div className="urban__text saving-bottom-text">
                                <h3 className="saving-bottom-text__title">Urban Shirts</h3>
                                <p className="saving-bottom-text__subtitle">Live In Confort</p>
                                <div className="saving-bottom-text__discount">FLAT 60% OFF</div>
                                <a className="saving-bottom-text__bnt">SHOP NOW</a>
                            </div>
                            <img src={fourth} alt=""/>
                        </div>
                        <div className="saving__block">
                            <div className="oversize__text saving-bottom-text">
                                <h3 className="saving-bottom-text__title">Oversized T-Shirts</h3>
                                <p className="saving-bottom-text__subtitle">Street Style Icon</p>
                                <div className="saving-bottom-text__discount">FLAT 60% OFF</div>
                                <a className="saving-bottom-text__bnt">SHOP NOW</a>
                            </div>
                            <img src={fifth} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Saving
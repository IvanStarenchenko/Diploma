import './Footer.scss'
import insta from '../../img/footer/insta.svg'
import facebook from '../../img/footer/facebook.svg'
import google from '../../img/footer/google.svg'
import apple from '../../img/footer/apple.svg'
import link from '../../img/footer/link.svg'
import twitter from '../../img/footer/twitter.svg'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <nav className="footer__menu">
                    <ul className="footer__list">
                        <li className="footer__title">Need Help</li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Track Order</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Returns & Refunds</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">FAQ's</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Career</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__title">Company</li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Track Order</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Returns & Refunds</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">FAQ's</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Career</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__title">More Info</li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Track Order</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Returns & Refunds</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">FAQ's</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Career</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__title">Location</li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Track Order</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Returns & Refunds</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">FAQ's</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Career</a></li>
                    </ul>
                </nav>
                <div className="footer__groups">
                    <div className="footer__social">
                        <img src={facebook} alt=""/>
                        <img src={insta} alt=""/>
                        <img src={twitter}alt=""/>
                        <img src={link} alt=""/>
                    </div>       
                </div>
                <div className="footer__app">
                    <h3 className="footer__title">Download The App </h3>
                    <div className="footer__stores stores-footer">
                        <div className="stores-footer__item">
                            <img src={google} alt=""/>
                            <div className="stores-footer__text">
                                <p className="stores-footer__overtitle">Available on the</p>
                                <h4 className="stores-footer__title">Google Play</h4>
                            </div>
                        </div>
                        <div className="stores-footer__item">
                            <img src={apple} alt=""/>
                            <div className="stores-footer__text">
                                <p className="stores-footer__overtitle">Available on the</p>
                                <h4 className="stores-footer__title">Google Play</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="accordion">
                <div className="accordion__item">
                    <div className="accordion__item-trigger">
                        <div className="trigger__text">Popular Categories</div>
                        <div className="trigger__img">
                            <span className="trigger__line-1"></span>
                            <span className="trigger__line-2"></span>
                        </div>
                    </div>
                    <div className="accordion__item-content">
                        <div className="content__text">Какой-то рандомный текст для аккордеона</div>
                    </div>
                </div>
            </div> */}
            <div className="footer__copy">Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</div>
        </footer>
     
    )
}

export default Footer
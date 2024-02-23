import { NavLink } from "react-router-dom"
import Check1 from '../../img/cart/01.png'
import Check2 from '../../img/cart/02.png'
import Check3 from '../../img/cart/03.png'
import google from '../../img/checkout/google.png'
import paypal from '../../img/checkout/paypal.png'
import paypass from '../../img/checkout/paypass.png'
import visa from '../../img/checkout/visa.png'
import "./CheckOut.scss"
const CheckOut = () => {
    return(
        <>
        <section className="details">
            <div className="container">
                <div className="details__text">
                    <div className="details__links">
                        <NavLink to = {'/Main'}>Home</NavLink>
                        <span>My Account</span>
                        <span>Check Out</span>
                    </div>
                    <div className="details__title title">Check Out</div>
                    <div className="details__subtitle subtitle">Billing Details</div>
                </div>
                <div className="details__group">
                    <div className="details__block">
                        <div className="details__block-top">
                            <label>
                                <p>First Name*</p>
                                <input type="text" placeholder="First Name"/>
                            </label>
                            <label>
                                <p>Last Name*</p>
                                <input type="text" placeholder="Last Name"/>
                            </label>
                            <label>
                                <p>Company Name</p>
                                <input type="text" placeholder="Company Name"/>
                            </label>
                            <label>
                                <p>Country / Region*</p>
                                <input type="text" placeholder="Country / Region"/>
                            </label>
                            <label>
                                <p>Street Address*</p>
                                <input type="text" placeholder="House number and street name"/>
                            </label>
                            <label>
                                <p>Apt, suite, unit</p>
                                <input type="text" placeholder="apartment, suite, unit, etc. (optional)"/>
                            </label>
                        </div>
                        <div className="details__block-bottom">
                            <div className="details__inputs">
                                <label>
                                    <p>City*</p>
                                    <input type="text" placeholder="Town / City"/>
                                </label>
                                <label>
                                    <p>State*</p>
                                    <div className="wrapper">
                                        <div className="details-accordion js-accordion">
                                            <div className="details-accordion__block js-accordion-block">
                                                <div className="details-accordion__title js-accordion-trigger" aria-expanded="false">
                                                    State
                                                </div>
                                                
                                                <div className="menu__content js-accordion-content" aria-hidden="true">
                                                    <div>
                                                        <ul className="details-accordion__filter-list">
                                                            <li>America</li>
                                                            <li>America</li>
                                                            <li>America</li>
                                                            <li>America</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <label>
                                    <p>Postal Code*</p>
                                    <input type="number" placeholder="Postal Code"/>
                                </label>
                                <label>
                                    <p>Phone*</p>
                                    <input type="number" placeholder="Phone"/>
                                </label>
                            </div>    
                        </div>
                    </div>
                    <div className="details__block">
                        <div className="details__summary summary-inner">
                            <h3 className="summary-inner__title">Order Summary</h3>
                            <div className="summary-inner__products">
                                <div className="summary-inner__product product-summary">
                                    <img src={Check1} className="product-summary__image" alt=""/>
                                    <div className="product-summary__text">
                                        <div className="product-summary__name">Blue Flower Print Crop Top <span>x 1</span></div>
                                        <div className="product-summary__color">Color : <span>Yellow</span> </div>
                                    </div>
                                    <div className="product-summary__price">$29.00</div>
                                </div>
                                <div className="summary-inner__product product-summary">
                                    <img src={Check2} className="product-summary__image" alt=""/>
                                    <div className="product-summary__text">
                                        <div className="product-summary__name">Levender Hoodie <span>x 2</span></div>
                                        <div className="product-summary__color">Colour : <span> Levender</span></div>
                                    </div>
                                    <div className="product-summary__price">$119.00</div>
                                </div>
                                <div className="summary-inner__product product-summary">
                                    <img src={Check3} className="product-summary__image" alt=""/>
                                    <div className="product-summary__text">
                                        <div className="product-summary__name">Black Sweatshirt<span>x 2</span></div>
                                        <div className="product-summary__color">Color : <span>Black </span></div>
                                    </div>
                                    <div className="product-summary__price">$123.00</div>
                                </div>
                            </div>
                            <div className="summary-inner__subtotal summary-item">
                                <div className="summary-item__name summary-name">Subtotal <span>( 3 items )</span></div>
                                <div className="summary-item__price summary-price">$513.00</div>
                            </div>
                            <div className="summary-inner__subtotal summary-item">
                                <div className="summary-item__name summary-name">Savings</div>
                                <div className="summary-item__price summary-price">-$30.00</div>
                            </div>
                            <div className="summary-inner__subtotal summary-item">
                                <div className="summary-item__name summary-name">Shipping</div>
                                <div className="summary-item__price summary-price">-$5.00</div>
                            </div>
                            <div className="summary-inner__subtotal summary-item">
                                <div className="summary-item__name summary-name">Total</div>
                                <div className="summary-item__price summary-price">$478.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="details__btn">
                        <a className="details__button" href="#">Continue to delivery</a>
                        <label>
                            <input type="checkbox"/>
                            <p>Save my information for a faster checkout</p>
                        </label>
                    </div>
                </div>
            </div>
        </section>
        <section className="choise">
            <div className="container">
                <div className="choise__block addres-inner">
                    <h3 className="addres-inner__title choise-title">Shipping Address</h3>
                    <p className="addres-inner__subtitle choise-sub">Select the address that matches your card or payment method.</p>
                    <div className="choise__body">
                        <div className="addres-inner__select adress-payment-inner">
                            <div className="adress-payment-inner__same">
                                <input type="radio" id="addresChoice1" name="addres" value="same"/>
                                <label className="choise-label" for="contactChoice1">Same as Billing address</label>
                            </div>
                            <div className="adress-payment-inner__different">
                                <input type="radio" id="addresChoice2" name="addres" value="different"/>
                                <label className="choise-label" for="contactChoice2">Use a different shipping address</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choise__block method-inner">
                    <h3 className="method-inner__title choise-title">Shipping Method</h3>
                    <div className="choise__body">
                        <div className="method-inner__arrives choise-label">Arrives by Monday, June 7</div>
                        <div className="method-inner__charges charges-inner">
                            <div className="charges-inner__text">
                                <p className="choise-label">Delivery Charges</p>
                                <p className='choise-sub'>Additional fess may apply</p>
                            </div>
                            <div className="charges-inner__price">$5.00</div>
                        </div>
                    </div>
                </div>
                <div className="choise__block payment-inner">
                    <h3 className="payment-inner__title choise-title">Payment Method</h3>
                    <p className="payment-inner__subtitle choise-sub">All transactions are secure and encrypted.</p>
                    <div className="choise__body">
                        <div className="payment-inner__select select-payment-inner">
                            <div className="select-payment-inner__cards">
                                <input type="radio" id="paymentChoice1" name="payment" value="card"/>
                                <label className="choise-label" for="contactChoice1">Credit Card</label>
                                <p className="choise-sub">We accept all major credit cards.</p>

                                <div className="select-payment-inner__images">
                                    <img src={google} alt=""/>
                                    <img src={visa} alt=""/>
                                    <img src={paypal} alt=""/>
                                    <img src={paypass} alt=""/>
                                </div>

                                <div className ="select-payment-inner__inputs">
                                    <input type="number"/>
                                    <input type="text"/>
                                    <input type="text"/>
                                    <input type="number"/>
                                </div>
                            </div>
                            <div className="select-payment-inner__cash">
                                <input type="radio" id="paymentChoice2" name="payment" value="cash"/>
                                
                                <label className="choise-label" for="contactChoice2">
                                    Cash on delivery
                                    <p className="choise-sub">Pay with cash upon delivery.</p>
                                </label>
                            </div>
                            <div className="select-payment-inner__paypal">
                                <input type="radio" id="paymentChoice3" name="payment" value="paypal"/>
                                <label className="choise-label" for="contactChoice2">Paypal</label>
                            </div>                          
                        </div>
                    </div>
                </div>
                <div className="choise__button">Pay Now</div>
            </div>
        </section>
        </>
    )
}

export default CheckOut
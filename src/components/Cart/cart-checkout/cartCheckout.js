import { NavLink } from 'react-router-dom'
const CartCheckout = () => {
    return (
        <>
            <section className="checkout">
                <div className="container">
                    <div className="checkout__content">
                        <div className="checkout__discount discount-inner">
                            <h4 className="discount-inner__title">Discount  Codes</h4>
                            <p className="discount-inner__subtitle">Enter your coupon code if you have one</p>
                            <div className="discount-inner__input">
                                <label>
                                    <input type="text"></input>
                                    <button type="submit">Apply Coupon</button>
                                </label>
                            </div>
                            <div><a href="products.html" className="discount-inner__button">Continue Shopping</a></div>
                        </div>
                        <div className="checkout__price price-inner">
                            <div className="price-inner__item">
                                <div className="price-inner__title">Sub Total</div>
                                <div className="price-inner__total">513$</div>
                            </div>
                            <div className="price-inner__item">
                                <div className="price-inner__title">Sub Total</div>
                                <div className="price-inner__total">513$</div>
                            </div>
                            <div className="price-inner__item">
                                <div className="price-inner__title">Sub Total</div>
                                <div className="price-inner__total">513$</div>
                            </div>
                            <div className="price-inner__button"><NavLink to={'/CheckOut'}>Proceed To Checkout</NavLink></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CartCheckout
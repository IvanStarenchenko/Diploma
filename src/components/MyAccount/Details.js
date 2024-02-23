import './account/orders/order-details.scss'
import Aside from './Aside'
const Details = () => {
    return(
        <main>
            <div className='container'>
                <div className='account__content'>
                    <Aside />
                    <section className="account__orders-details details-inner" id="details">
                                <h3 className="details-inner__title content-title"> <button>  </button> Order Details</h3>
                                <div className="details-inner__order-info">
                                    <div className="details-inner__left">
                                        <div className="details-inner__number">Order no: #123456789</div>
                                        <div className="details-inner__placed">Placed On  2 June 2023 2:40 PM </div>
                                    </div>
                                    <div className="details-inner__total">Total : <span>$143.00</span></div>
                                </div>
                                <div className="details-inner__progress progess-line">
                                    <span className="progess-line__circle progress-ready"> <p>Order Placed</p> </span>
                                    <span className="progess-line__circle progress-inprogress"> <p>Inprogress</p> </span>
                                    <span className="progess-line__circle progress-notready"> <p>shipped</p> </span>
                                    <span className="progess-line__circle progress-notready progress-notready--end"><p>Delivered</p> </span>
                                </div>
                                <div className="details-inner__message">
                                    <div className="details-inner__time">8 June 2023 3:40 PM   </div>
                                    <div className="details-inner__verified">Your order has been successfully verified.</div>
                                </div>
                                <div className="details-inner__products">
                                    <div className="details-inner__product">
                                        <div className="details-inner__card">
                                            <img src="img/account/wish/1.png" alt="" className="details-inner__image"/>
                                            <div className="details-inner__text">
                                                <div className="details-inner__name">Printed white cote</div>
                                                <div className="details-inner_color">Color : <span>White</span></div>  
                                            </div>
                                        </div>
                                        <div className="details-inner__quantity">
                                            Qty : <span>1</span>
                                        </div>
                                        <div className="details-inner__price">$29.00</div>
                                        <div className="wishlist-inner__delete">
                                            <span className="horizontal"></span>
                                            <span className="vertical"></span>
                                        </div>
                                    </div>
                                    <div className="details-inner__product">
                                        <div className="details-inner__card">
                                            <img src="img/account/wish/2.png" alt="" className="details-inner__image"/>
                                            <div className="details-inner__text">
                                                <div className="details-inner__name">Printed white cote</div>
                                                <div className="details-inner_color">Color : <span>White</span></div>  
                                            </div>
                                        </div>
                                        <div className="details-inner__quantity">
                                            Qty : <span>1</span>
                                        </div>
                                        <div className="details-inner__price">$29.00</div>
                                        <div className="wishlist-inner__delete">
                                            <span className="horizontal"></span>
                                            <span className="vertical"></span>
                                        </div>
                                    </div>
                                </div>
                    </section>
                </div>    
            </div>
        </main>
    )
}
export default Details
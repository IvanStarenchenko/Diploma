import wish1 from '../../../../img/account/wish/1.png'
import wish2 from '../../../../img/account/wish/2.png'
import wish3 from '../../../../img/account/wish/3.png'
import { NavLink } from 'react-router-dom'
const ActiveContent = (props) => {
    return(
        <>
        <div className="orders-inner__content content-active">
            <div className="content-active__group">
                <div className="content-active__block">
                    <div className="content-active__order">
                        <div className="content-active__left">
                            <div className="content-active__number">Order no: #123456789</div>
                            <div className="content-active__order-date content-info">Order Date : <span>2 June 2023 2:40 PM</span></div>
                            <div className="content-active__delivery-date content-info">Estimated Delivery Date : <span>8 June 2023</span></div>
                        </div>
                        <div className="content-active__right">
                            <div className="content-active__status content-info">Order Status : Inprogress </div>
                            <div className="content-active__payment content-info">Payment Method : Cash on delivery</div>
                        </div>
                    </div>
                    <div className="content-active__product">
                        <div className="content-active__card">
                            <img className="content-active__image" src={wish1} alt=""/>
                            <div className="content-active__text">
                                <div className="content-active__name">Black Printed T-shirt</div>
                                <div className="content-active__color content-info">Colour : <span>Pink</span></div>
                                <div className="content-active__quantity content-info">Qty :  <span>1</span></div>
                                <div className="content-active__total content-info">Total : $23.00</div>
                            </div>
                        </div>
                        <NavLink to = {'/Details'} className="content-active__btn" id="detailsBtn"><span>View Detail</span></NavLink>
                    </div>
                </div>
                <div className="content-active__block">
                    <div className="content-active__order">
                        <div className="content-active__left">
                            <div className="content-active__number">Order no: #123456789</div>
                            <div className="content-active__order-date content-info">Order Date : <span>2 June 2023 2:40 PM</span></div>
                            <div className="content-active__delivery-date content-info">Estimated Delivery Date : <span>8 June 2023</span></div>
                        </div>
                        <div className="content-active__right">
                            <div className="content-active__status content-info">Order Status : Inprogress </div>
                            <div className="content-active__payment content-info">Payment Method : Cash on delivery</div>
                        </div>
                    </div>
                    <div className="content-active__product">
                        <div className="content-active__card">
                            <img className="content-active__image" src={wish2} alt=""/>
                            <div className="content-active__text">
                                <div className="content-active__name">Printed blue & white Cote </div>
                                <div className="content-active__color content-info">Colour : <span>White</span> </div>
                                <div className="content-active__quantity content-info">Qty : <span>1</span></div>
                                <div className="content-active__total content-info">Total : $143.00</div>
                            </div>
                        </div>
                        <NavLink to = {'/Details'} className="content-active__btn" id="detailsBtn"><span>View Detail</span></NavLink>
                    </div>
                </div>
                <div className="content-active__block">
                    <div className="content-active__order">
                        <div className="content-active__left">
                            <div className="content-active__number">Order no: #123456789</div>
                            <div className="content-active__order-date content-info">Order Date : <span>2 June 2023 2:40 PM</span></div>
                            <div className="content-active__delivery-date content-info">Estimated Delivery Date : <span>8 June 2023</span></div>
                        </div>
                        <div className="content-active__right">
                            <div className="content-active__status content-info">Order Status : Inprogress </div>
                            <div className="content-active__payment content-info">Payment Method : Cash on delivery</div>
                        </div>
                    </div>
                    <div className="content-active__product">
                        <div className="content-active__card">
                            <img className="content-active__image" src={wish3} alt=""/>
                            <div className="content-active__text">
                                <div className="content-active__name">Black Printed T-shirt</div>
                                <div className="content-active__color content-info">Colour : <span>Blue</span> </div>
                                <div className="content-active__quantity content-info">Qty : <span>1</span></div>
                                <div className="content-active__total content-info">Total : $93.00</div>
                            </div>
                        </div>
                        <NavLink to = {'/Details'} className="content-active__btn" id="detailsBtn"><span>View Detail</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ActiveContent
import { NavLink } from 'react-router-dom'
import '../../account/orders/orders.scss'
import Aside from '../../Aside'

import CancelledContent from '../Cancelled/CancelledContent'
import OrdersLinks from '../OrderLinks'
const Cancelled = () => {
    return(
        <div className='account'>
            <div className='container'>
                <div className='account__content'>
                    <Aside/>
                    <section className="account__cancelled cancelled-inner" id="orders">
                                <h3 className="orders-inner__title content-title">My Orders</h3>
                                <OrdersLinks/>
                                <CancelledContent/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Cancelled
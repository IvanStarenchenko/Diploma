import { NavLink } from 'react-router-dom'
import '../../account/orders/orders.scss'
import Aside from '../../Aside'
import CompletedContent from './CompletedContent'
import OrdersLinks from '../OrderLinks'
const Completed = () => {
    return(
        <div className='account'>
            <div className='container'>
                <div className='account__content'>
                    <Aside/>
                    <section className="account__active active -inner" id="orders">
                                <h3 className="orders-inner__title content-title">My Orders</h3>
                                <OrdersLinks/>
                                <CompletedContent/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Completed
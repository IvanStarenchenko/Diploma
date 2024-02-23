import { NavLink } from 'react-router-dom'
import '../../account/orders/orders.scss'
import Aside from '../../Aside'
import OrdersLinks from '../OrderLinks'
import ActiveContent from './ActiveContent'

const Active = () => {
    return(
        <div className='account'>
            <div className='container'>
                <div className='account__content'>
                    <Aside/>
                    <section className="account__active active-inner" id="orders">
                        <h3 className="orders-inner__title content-title">My Orders</h3>
                        <OrdersLinks/>
                        <ActiveContent/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Active
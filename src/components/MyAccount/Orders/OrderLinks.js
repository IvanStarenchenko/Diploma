
import { NavLink } from 'react-router-dom'
const OrdersLinks = () => {
    return(
        <section className="account__cancelled cancelled-inner" id="orders">
                <nav className="orders-inner__nav">
                    <ul className="orders-inner__list">
                        <NavLink to = {'/Profile/Active'} className="orders-inner__item active-orders-link">Active</NavLink>
                        <NavLink to = {'/Profile/Cancelled'} className="orders-inner__item">Cancelled</NavLink>
                        <NavLink to = {'/Profile/Completed'} className="orders-inner__item">Completed</NavLink>
                    </ul>
                </nav>
        </section>
    )
}

export default OrdersLinks
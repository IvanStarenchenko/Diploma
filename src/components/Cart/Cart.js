import './Cart.scss'
import { NavLink } from 'react-router-dom'
import { deleteItemFromCart } from '../../redux/cartReducer'
import CartInfo from './cart-info/cartInfo'
import CartContent from './cart-content/cartContent'
import CartCheckout from './cart-checkout/cartCheckout'
import { connect } from 'react-redux'
const Cart = (props) => {
    return(
        <>
            <CartInfo />  
            <CartContent cartContent = {props.cartContent} deleteItemFromCart = {props.deleteItemFromCart}/>
            <CartCheckout/>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        cartContent: state.cart.cartContent,
    }
}

export default connect(mapStateToProps , {deleteItemFromCart})(Cart)
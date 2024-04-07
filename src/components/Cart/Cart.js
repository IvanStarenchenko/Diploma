import './Cart.scss'
import { NavLink } from 'react-router-dom'
import { deleteItemFromCart, updateItemInCart , increaseSummury , decreaseSummury} from '../../redux/cartReducer'
import CartInfo from './cart-info/cartInfo'
import CartContent from './cart-content/cartContent'
import CartCheckout from './cart-checkout/cartCheckout'
import { connect } from 'react-redux'
const Cart = (props) => {
    return(
        <>
            <CartInfo />  
            <CartContent summury = {props.summury} cartContent = {props.cartContent} increaseSummury = {props.increaseSummury} decreaseSummury= {props.decreaseSummury} deleteItemFromCart = {props.deleteItemFromCart} updateItemInCart={props.updateItemInCart} />
            <CartCheckout summury = {props.summury} cartContent = {props.cartContent}/>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        cartContent: state.cart.cartContent,
        summury: state.cart.summury,
    }
}

export default connect(mapStateToProps , {deleteItemFromCart , updateItemInCart , increaseSummury , decreaseSummury})(Cart)
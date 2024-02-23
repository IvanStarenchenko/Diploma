import { NavLink } from 'react-router-dom'

const CartInfo = () => {
    return(
        <section className="info">
        <div className="container">
            <div className="info__navigation">
                <NavLink to="/Main">Home</NavLink>
                <div>My account</div>
            </div>
            <div className="info__text">
                <p>Please fill in the fields below and click place order to complete your purchase!</p>
                <p>Already registered? <a href="#">Please login here</a></p>
            </div>
        </div>
        </section>
    )
}

export default CartInfo
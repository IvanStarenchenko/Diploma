import empty from '../../../img/cart/empty.png'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const CartContent = (props) => {
    const cartItemId = props.cartContent.id
    const deleteItem = (cartItemId) => {
        props.deleteItemFromCart(cartItemId)
    }
    return (
        <section className="block cart">
            <div className="container">
                <div className="cart__inner inner-cart">
                    {
                        !props.cartContent || props.cartContent.length === 0
                            ? <div className='inner-cart__empty'>
                                <img className='emptyImage' src={empty}></img>
                                <div className='inner-cart__empty-text empty-text'>
                                    <div className='empty-text__title'> Your cart is empty and sad </div>
                                    <div className='empty-text__subtitle'> Add something to make it happy! </div>
                                </div>
                                <NavLink className='emptyButton' to={'/Man'}><span>Continue Shopping</span></NavLink>
                            </div>
                            : props.cartContent.map(item => (
                                <>
                                <ul className="cart__details">
                                    <li>Product Details</li>
                                    <li>Price</li>
                                    <li>Quantity</li>
                                    <li>shipping</li>
                                    <li>subtotal</li>
                                    <li>action</li>
                                </ul>
                                <div key={item.id}>
                                   
                                    <div className="inner-cart__product product-cart">
                                        <div className="product-cart__details">
                                            <img src={item.image} alt="" className="product-cart__image" />
                                            <div className="product-cart__info">
                                                <div className="product-cart__title">{item.name}</div>
                                                <div className="product-cart__color">Color : {item.color}</div>
                                                <div className="product-cart__siZe">Size : {item.size}</div>
                                            </div>
                                        </div>
                                        <div className="product-cart__price" id="blue-flower-print-crop-top-price">{item.priceS}</div>
                                        <div className="product-cart__quantiy">
                                            <button id="decrement">-</button>
                                            <div id="counter">1</div>
                                            <button id="increment">+</button>
                                        </div>
                                        <div className="product-cart__shipping">FREE</div>
                                        <div className="product-cart__totalprice" id="blue-flower-print-crop-top-total">{item.subtotal}</div>
                                        <button className="product-cart__action" onClick={() => { deleteItem(item.id) }}>
                                            <svg width="17" height="20" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.20702 8C7.20702 7.50294 6.80407 7.1 6.30702 7.1C5.80996 7.1 5.40702 7.50294 5.40702 8H7.20702ZM5.40702 16C5.40702 16.4971 5.80996 16.9 6.30702 16.9C6.80407 16.9 7.20702 16.4971 7.20702 16H5.40702ZM11.4526 8C11.4526 7.50294 11.0497 7.1 10.5526 7.1C10.0556 7.1 9.65263 7.50294 9.65263 8H11.4526ZM9.65263 16C9.65263 16.4971 10.0556 16.9 10.5526 16.9C11.0497 16.9 11.4526 16.4971 11.4526 16H9.65263ZM3.22048 18.782L3.60997 17.9707L3.22048 18.782ZM2.29278 17.908L3.08442 17.4799H3.08442L2.29278 17.908ZM14.5669 17.908L13.7752 17.4798V17.4799L14.5669 17.908ZM13.6392 18.782L13.2497 17.9707H13.2497L13.6392 18.782ZM1 4.1C0.502944 4.1 0.1 4.50294 0.1 5C0.1 5.49706 0.502944 5.9 1 5.9V4.1ZM15.8596 5.9C16.3567 5.9 16.7596 5.49706 16.7596 5C16.7596 4.50294 16.3567 4.1 15.8596 4.1V5.9ZM3.81491 5C3.81491 5.49706 4.21786 5.9 4.71491 5.9C5.21197 5.9 5.61491 5.49706 5.61491 5H3.81491ZM11.2447 5C11.2447 5.49706 11.6477 5.9 12.1447 5.9C12.6418 5.9 13.0447 5.49706 13.0447 5H11.2447ZM5.40702 8V16H7.20702V8H5.40702ZM9.65263 8V16H11.4526V8H9.65263ZM13.8982 5V15.8H15.6982V5H13.8982ZM11.4018 18.1H5.45789V19.9H11.4018V18.1ZM1.1614 5V15.8H2.9614V5H1.1614ZM5.45789 18.1C4.84945 18.1 4.44413 18.0994 4.13271 18.0754C3.83033 18.0521 3.69385 18.0109 3.60997 17.9707L2.83099 19.5934C3.2012 19.7711 3.58898 19.8389 3.99456 19.8701C4.39111 19.9006 4.87745 19.9 5.45789 19.9V18.1ZM1.1614 15.8C1.1614 16.3443 1.16062 16.81 1.19369 17.1914C1.22782 17.5849 1.30291 17.9696 1.50113 18.3361L3.08442 17.4799C3.05127 17.4186 3.01067 17.3093 2.98696 17.0358C2.96219 16.7502 2.9614 16.3758 2.9614 15.8H1.1614ZM3.60997 17.9707C3.37513 17.8579 3.19428 17.683 3.08442 17.4799L1.50113 18.3361C1.79832 18.8856 2.26696 19.3226 2.83099 19.5934L3.60997 17.9707ZM13.8982 15.8C13.8982 16.3758 13.8975 16.7502 13.8727 17.0358C13.849 17.3093 13.8084 17.4186 13.7752 17.4798L15.3585 18.3361C15.5567 17.9696 15.6318 17.5849 15.666 17.1914C15.699 16.81 15.6982 16.3443 15.6982 15.8H13.8982ZM11.4018 19.9C11.9822 19.9 12.4685 19.9006 12.8651 19.8701C13.2707 19.8389 13.6585 19.7711 14.0287 19.5934L13.2497 17.9707C13.1658 18.0109 13.0293 18.0521 12.7269 18.0754C12.4155 18.0994 12.0102 18.1 11.4018 18.1V19.9ZM13.7752 17.4799C13.6654 17.683 13.4845 17.8579 13.2497 17.9707L14.0287 19.5934C14.5927 19.3226 15.0613 18.8856 15.3585 18.3361L13.7752 17.4799ZM1 5.9H2.0614V4.1H1V5.9ZM2.0614 5.9H14.7982V4.1H2.0614V5.9ZM14.7982 5.9H15.8596V4.1H14.7982V5.9ZM5.61491 4.2C5.61491 3.05108 6.74448 1.9 8.42982 1.9V0.1C6.01179 0.1 3.81491 1.8143 3.81491 4.2H5.61491ZM8.42982 1.9C10.1152 1.9 11.2447 3.05108 11.2447 4.2H13.0447C13.0447 1.8143 10.8479 0.1 8.42982 0.1V1.9ZM3.81491 4.2V5H5.61491V4.2H3.81491ZM11.2447 4.2V5H13.0447V4.2H11.2447Z" fill="#8A33FD" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                </> 
                            ))
                    }
 
                </div>
            </div>
        </section>
    )
}

export default CartContent
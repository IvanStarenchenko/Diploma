import './account/wish/wishlist.scss'
import Aside from './Aside'
import wish1 from '../../img/account/wish/1.png'
import wish2 from '../../img/account/wish/2.png'
import wish3 from '../../img/account/wish/3.png'
import wish4 from '../../img/account/wish/4.png'
import empty from '../../img/cart/empty.png'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteItemFromFav } from '../../redux/favoriteReducer'
const Wishlist = (props) => {
    const favItemId = props.favoriteContent.id
    const deleteItem = (favItemId) => {
        props.deleteItemFromFav(favItemId)
    }
    return(
        <>          
        <div className='account'>
            <div className='container'>
                <div className='account__content'>
                    <Aside/>
                    <section className="account__wishlist wishlist-inner" id="wishlist">
                        <h3 className="wishlist__title content-title">Wishlist</h3>
                        <div className="block wishlist">
                            <div className="wishlist__inner inner-wishlist">
                                {
                                    !props.favoriteContent || props.favoriteContent.length === 0
                                        ? <div className='inner-cart__empty'>
                                            <img className='emptyImage' src={empty}></img>
                                            <div className='inner-cart__empty-text empty-text'>
                                                <div className='empty-text__title'> Your cart is empty and sad </div>
                                                <div className='empty-text__subtitle'> Add something to make it happy! </div>
                                            </div>
                                            <NavLink className='emptyButton' to={'/Man'}><span>Continue Shopping</span></NavLink>
                                        </div>
                                        : props.favoriteContent.map(item => (
                                            <>
                                            <div key={item.id}>
                                                <div className="wishlist-inner__block">
                                                    <button className="wishlist-inner__delete" onClick={() => { deleteItem(item.id) }}>
                                                            <span className="horizontal"></span>
                                                            <span className="vertical"></span>
                                                        </button>
                                                        <img className="wishlist-inner__image" src={item.image} alt=""/>
                                                        <div className="wishlist-inner__text">
                                                            <div className="wishlist-inner__name">{item.name}</div>
                                                            <div className="wishlist-inner__color">Color : {item.color}</div>
                                                            <div className="wishlist-inner__quantity">Quantity : 1</div>
                                                        </div>
                                                        <div className="wishlist-inner__price">{item.priceS}</div>
                                                        <div className="wishlist-inner__button">Add to cart</div>
                                                    </div>
                                                </div>
                                            </> 
                                        ))
                                }
            
                            </div>
                        </div>
                     </section>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        favoriteContent: state.favorite.favoriteContent,
    }
}

export default connect(mapStateToProps , {deleteItemFromFav})(Wishlist)
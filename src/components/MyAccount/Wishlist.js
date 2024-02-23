import './account/wish/wishlist.scss'
import Aside from './Aside'
import wish1 from '../../img/account/wish/1.png'
import wish2 from '../../img/account/wish/2.png'
import wish3 from '../../img/account/wish/3.png'
import wish4 from '../../img/account/wish/4.png'
const Wishlist = () => {
    return(
        <>          
        <div className='account'>
            <div className='container'>
                <div className='account__content'>
                    <Aside/>
                    <section className="account__wishlist wishlist-inner" id="wishlist">
            <h3 className="wishlist__title content-title">Wishlist</h3>
            <div className="wishlist-inner__group">
                <div className="wishlist-inner__block">
                    <div className="wishlist-inner__delete">
                        <span className="horizontal"></span>
                        <span className="vertical"></span>
                    </div>
                    <img className="wishlist-inner__image" src={wish1} alt=""/>
                    <div className="wishlist-inner__text">
                        <div className="wishlist-inner__name">Blue Flower Print Crop Top </div>
                        <div className="wishlist-inner__color">Color : Yellow</div>
                        <div className="wishlist-inner__quantity">Quantity : 1</div>
                    </div>
                    <div className="wishlist-inner__price">$29.00</div>
                    <div className="wishlist-inner__button">Add to cart</div>
                </div>
                <div className="wishlist-inner__block">
                    <div className="wishlist-inner__delete">
                        <span className="horizontal"></span>
                        <span className="vertical"></span>
                    </div>
                    <img className="wishlist-inner__image" src={wish2} alt=""/>
                    <div className="wishlist-inner__text">
                        <div className="wishlist-inner__name">Yellow Flower Print Dress</div>
                        <div className="wishlist-inner__color">Color : Yellow</div>
                        <div className="wishlist-inner__quantity">Quantity : 1</div>
                    </div>
                    <div className="wishlist-inner__price">$78.00</div>
                    <div className="wishlist-inner__button">Add to cart</div>
                </div>
                <div className="wishlist-inner__block">
                    <div className="wishlist-inner__delete">
                        <span className="horizontal"></span>
                        <span className="vertical"></span>
                    </div>
                    <img className="wishlist-inner__image" src={wish3} alt=""/>
                    <div className="wishlist-inner__text">
                        <div className="wishlist-inner__name">White Hoodie long sleeve</div>
                        <div className="wishlist-inner__color">Color : White</div>
                        <div className="wishlist-inner__quantity">Quantity : 1</div>
                    </div>
                    <div className="wishlist-inner__price">$134.00</div>
                    <div className="wishlist-inner__button">Add to cart</div>
                </div>
                <div className="wishlist-inner__block">
                    <div className="wishlist-inner__delete">
                        <span className="horizontal"></span>
                        <span className="vertical"></span>
                    </div>
                    <img className="wishlist-inner__image" src={wish4} alt=""/>
                    <div className="wishlist-inner__text">
                        <div className="wishlist-inner__name">Brown men’s long sleeve T-shirt</div>
                        <div className="wishlist-inner__color">Color : Brown</div>
                        <div className="wishlist-inner__quantity">Quantity : 1</div>
                    </div>
                    <div className="wishlist-inner__price">$93.00</div>
                    <div className="wishlist-inner__button">Add to cart</div>
                </div>
            </div>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default Wishlist
import '../discount/discount.scss'
import first from '../../../img/hero/discount/1.png'
import second from '../../../img/hero/discount/2.png'


const Discount = () => {
    return (
        <section className="discount">
            <div className="container">
                <div className="discount__blocks">
                    <div className="discount__block">
                        <div className="discount__text">
                            <p className="discount__overtitle">Low Price</p>
                            <h3 className="discount__title">High Coziness</h3>
                            <div className="discount__subtitle">UPTO 50% OFF</div>
                            <a href="#" class="discount__link">Explore Items</a>
                        </div>
                        <img src={first} alt=""/>
                    </div>
                    <div className="discount__block">
                        <div className="discount__text">
                            <p className="discount__overtitle">Beyoung Presents</p>
                            <h3 className="discount__title">Breezy Summer <br/>
                                Style</h3>
                            <div className="discount__subtitle">UPTO 50% OFF</div>
                            <a href="#" className="discount__link">Explore Items</a>
                        </div>
                        <img src={second} alt=""/>
                    </div>  
                </div>          
            </div>
        </section>
    )
}

export default Discount
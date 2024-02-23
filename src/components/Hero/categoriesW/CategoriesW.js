import '../categories/Categories.scss'
import first from '../../../img/hero/categoriesW/1.png'
import second from '../../../img/hero/categoriesW/2.png'
import third from '../../../img/hero/categoriesW/3.png'
import fourth from '../../../img/hero/categoriesW/4.png'
import arrow from '../../../img/hero/categories/svg/arrow.svg'

const CategoriesW = () => {
    return(
        <section className="categories">
    <div className="container">
        <h2 className="categories__title title">Categories For Women</h2>
        <div className="categories__cards">
            <div className="categories__card card-categories">
                <div className="card-categories__image"><img src={first} alt=""/></div>
                <div className="card-categories__content">
                    <div className="card-categories__text">
                        <div className="card-categories__title">Hoodies & Sweetshirt</div>
                         <div className="card-categories__explore">Explore Now!</div>
                    </div>
                    <img src={arrow} alt=""/>
                </div>
            </div>
            <div className="categories__card card-categories">
                <div className="card-categories__image"><img src={second} alt=""/></div>
                <div className="card-categories__content">
                    <div className="card-categories__text">
                        <div className="card-categories__title">Coats & Parkas</div>
                         <div className="card-categories__explore">Explore Now!</div>
                    </div>
                    <img src={arrow} alt=""/>
                </div>
            </div>
            <div className="categories__card card-categories">
                <div className="card-categories__image"><img src={third} alt=""/></div>
                <div className="card-categories__content">
                    <div className="card-categories__text">
                        <div className="card-categories__title">Tees & T-Shirt</div>
                         <div className="card-categories__explore">Explore Now!</div>
                    </div>
                    <img src={arrow} alt=""/>
                </div>
            </div>
            <div className="categories__card card-categories">
                <div className="card-categories__image"><img src={fourth} alt=""/></div>
                <div className="card-categories__content">
                    <div className="card-categories__text">
                        <div className="card-categories__title">Boxers</div>
                         <div className="card-categories__explore">Explore Now!</div>
                    </div>
                    <img src={arrow} alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}
export default CategoriesW
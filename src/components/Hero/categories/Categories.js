import './Categories.scss'
import first from '../../../img/hero/categories/1.png'
import second from '../../../img/hero/categories/2.png'
import third from '../../../img/hero/categories/3.png'
import fourth from '../../../img/hero/categories/4.png'
import fifth from '../../../img/hero/categories/5.png'
import six from '../../../img/hero/categories/6.png'
import seven from '../../../img/hero/categories/7.png'
import eleven from '../../../img/hero/categories/8.png'
import arrow from '../../../img/hero/categories/svg/arrow.svg'
const Categories = () => {
    return(
        <section className="categories">
            <div className="container">
                <h2 className="categories__title title">Categories For Men</h2>
                <div className="categories__cards">
                    <div className="categories__card card-categories">
                        <div className="card-categories__image"><img src={first}alt=""/></div>
                        <div className="card-categories__content">
                            <div className="card-categories__text">
                                <div className="card-categories__title">Shirts</div>
                                <div className="card-categories__explore">Explore Now!</div>
                            </div>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="categories__card card-categories">
                        <div className="card-categories__image"><img src={second} alt=""/></div>
                        <div className="card-categories__content">
                            <div className="card-categories__text">
                                <div className="card-categories__title">Boxers</div>
                                <div className="card-categories__explore">Explore Now!</div>
                            </div>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="categories__card card-categories">
                        <div className="card-categories__image"><img src={third} alt=""/></div>
                        <div className="card-categories__content">
                            <div className="card-categories__text">
                                <div className="card-categories__title">Plain T-Shirt</div>
                                <div className="card-categories__explore">Explore Now!</div>
                            </div>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="categories__card card-categories">
                        <div className="card-categories__image"><img src={fourth} alt=""/></div>
                        <div className="card-categories__content">
                            <div className="card-categories__text">
                                <div className="card-categories__title">Polo T-Shirt</div>
                                <div className="card-categories__explore">Explore Now!</div>
                            </div>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="categories__card card-categories">
                        <div className="card-categories__image"><img src={fifth} alt=""/></div>
                        <div className="card-categories__content">
                            <div className="card-categories__text">
                                <div className="card-categories__title">Hoodies & Sweetshirt</div>
                                <div className="card-categories__explore">Explore Now!</div>
                            </div>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="categories__card card-categories">
                        <div className="card-categories__image"><img src={six} alt=""/></div>
                        <div className="card-categories__content">
                            <div className="card-categories__text">
                                <div className="card-categories__title">Jeans</div>
                                <div className="card-categories__explore">Explore Now!</div>
                            </div>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="categories__card card-categories">
                        <div className="card-categories__image"><img src={seven} alt=""/></div>
                        <div className="card-categories__content">
                            <div className="card-categories__text">
                                <div className="card-categories__title">Activewear</div>
                                <div className="card-categories__explore">Explore Now!</div>
                            </div>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="categories__card card-categories">
                        <div className="card-categories__image"><img src={eleven} alt=""/></div>
                        <div className="card-categories__content">
                            <div className="card-categories__text">
                                <div className="card-categories__title">Activewear</div>
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

export default Categories
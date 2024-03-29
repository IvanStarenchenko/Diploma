import './Limelight.scss'
import first from '../../../img/hero/limelight/1.png'
import third from '../../../img/hero/limelight/3.png'
import fouth from '../../../img/hero/limelight/4.png'
import second from '../../../img/hero/limelight/2.png'

const Limelight = () => {
    return (
        <section className="limelight">
            <div className="container">
                <h2 className="limelight__title title">In The Limelight</h2>

                <div className="limelight__cards">
                    <a className="limelight__card card-content" href="product-detail.html">
                        <div className="card-content__image"><img src={first} alt="" /></div>

                        <div className="card-content__fav">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#3C4242" strokeWidth="1.26066" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="card-content__content">
                            <div className="card-content__text">
                                <div className="card-content__name">Black Sweatshirt with ....</div>

                                <div className="card-content__brand">Jhanvi’s  Brand</div>
                            </div>

                            <div className="card-content__price">123.00$</div>
                        </div>
                    </a>

                    <div className="limelight__card card-content">
                        <div className="card-content__image"><img src={second} alt="" /></div>

                        <div className="card-content__fav">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#3C4242" strokeWidth="1.26066" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="card-content__content">
                            <div className="card-content__text">
                                <div className="card-content__name">line Pattern Black H...</div>

                                <div className="card-content__brand">AS’s  Brand</div>
                            </div>

                            <div className="card-content__price">123.00$</div>
                        </div>
                    </div>

                    <div className="limelight__card card-content">
                        <div className="card-content__image"><img src={third} alt="" /></div>

                        <div className="card-content__fav">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#3C4242" strokeWidth="1.26066" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="card-content__content">
                            <div className="card-content__text">
                                <div className="card-content__name">Black Shorts</div>

                                <div className="card-content__brand">MM’s  Brand</div>
                            </div>

                            <div className="card-content__price">123.00$</div>
                        </div>
                    </div>

                    <div className="limelight__card card-content">
                        <div className="card-content__image"><img src={fouth} alt="" /></div>

                        <div className="card-content__fav">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#3C4242" strokeWidth="1.26066" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="card-content__content">
                            <div className="card-content__text">
                                <div className="card-content__name">Levender Hoodie with ....</div>

                                <div className="card-content__brand">Nike’s  Brand</div>
                            </div>

                            <div className="card-content__price">123.00$</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Limelight
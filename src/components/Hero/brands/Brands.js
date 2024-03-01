import './Brands.scss'
import first from '../../../img/hero/brands/1.png'
import second from '../../../img/hero/brands/2.png'
import third from '../../../img/hero/brands/3.png'
import fouth from '../../../img/hero/brands/4.png'
import fifth from '../../../img/hero/brands/5.png'

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <div className="brands__wrapper">
                    <h2 className="brands__title">Top Brands Deal</h2>
                    <p className="brands__subtitle">Up To <span>60%</span> off on brands</p>
                    <div className="brands__items">
                        <div className="brands__item"><img src={first} alt="" /></div>
                        <div className="brands__item"><img src={second} alt="" /></div>
                        <div className="brands__item"><img src={third} alt="" /></div>
                        <div className="brands__item"><img src={fouth} alt="" /></div>
                        <div className="brands__item"><img src={fifth} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands
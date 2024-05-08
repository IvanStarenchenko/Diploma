import '../common/Products.scss'
import '../../Hero/categories/Categories.scss'
import { getProducts } from '../../../redux/catalogReducer'

import Filter from '../common/Filter'
import Online from '../common/Online'
import BestPrices from '../common/BestPrices'
import CatalogWomen from '../CatalogNew'
import { useState,useEffect } from 'react'
import { connect } from 'react-redux'

const WomansProducts = (props) => {
    const [isSwitched , setSwitch] = useState(false)
    const [isNewActive , setActiveNew] = useState(true)
    const [isRecActive , setActiveRec] = useState(false)
    useEffect(() => {
        props.getProducts('women')
    }, {})
    return (
        <div className="container ">
            <section className="block catalog">
                <div className='filter'>
                    <Filter />
                </div>

                <div className="catalog-products">
                    <div className="catalog-products__top">
                        <h3 className="catalog-products__title">Women’s Clothing</h3>

                        <div className="catalog-products__filter">Filter</div>

                        <div className="catalog-products__controls">
                        <button onClick={() => {setSwitch(false); setActiveRec(false); setActiveNew(true)} } className={isNewActive ? "catalog-products__new active" : "catalog-products__new" }  id="newBtn">New</button>

                        <button onClick= {() => {setSwitch(true); setActiveRec(true); setActiveNew(false)}}className={isRecActive ? "catalog-products__recomended active" : "catalog-products__recomended" } id="recommendedBtn">Recommended</button>
                        </div>
                    </div>

                    <div className='products'>
                        <CatalogWomen items={props.products} />
                    </div>
                </div>
            </section>

            <section className="block online">
                <Online />
            </section>

            <section className="block  best-prices">
                <BestPrices />
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.catalog.products,
        pageSize: state.catalog.pageSize,
        currentPage: state.catalog.currentPage,
        portionSize: state.catalog.portionSize,
    }
}

export default connect(mapStateToProps, { getProducts })(WomansProducts)

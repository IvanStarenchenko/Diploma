import '../common/Products.scss'
import '../../Hero/categories/Categories.scss'
import { getMenProducts } from '../../../redux/catalogReducer'

import Filter from '../common/Filter'
import Online from '../common/Online'
import BestPrices from '../common/BestPrices'
import CatalogWomen from '../Catalog'
import { useState } from 'react'
import { connect } from 'react-redux'

const WomansProducts = (props) => {

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
                            <div className="catalog-products__new active" id="newBtn">New</div>

                            <div className="catalog-products__recommended" id="recommendedBtn">Recommended</div>
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
        products: state.catalog.womenProducts,
        pageSize: state.catalog.pageSize,
        currentPage: state.catalog.currentPage,
        portionSize: state.catalog.portionSize,
    }
}

export default connect(mapStateToProps, { getMenProducts })(WomansProducts)

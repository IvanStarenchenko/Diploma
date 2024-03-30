import '../common/Products.scss'
import '../../Hero/categories/Categories.scss'

import Paginator from '../../Common/Paginator'
import { getMenProducts } from '../../../redux/catalogReducer'

import Filter from '../common/Filter'
import Online from '../common/Online'
import BestPrices from '../common/BestPrices'
import CatalogNew from '../CatalogNew'
import CatalogRec from '../CatalogRec'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const MansProducts = (props) => {
    const [isSwitched , setSwitch] = useState(false)
    const [isNewActive , setActiveNew] = useState(true)
    const [isRecActive , setActiveRec] = useState(false)


    useEffect(() => {
        props.getMenProducts(props.currentPage, props.pageSize)
    }, {})

    const onPageChanged = (currentPage) => {
        props.getMenProducts(currentPage, props.pageSize)
    }
    return (
        <div className="container ">
            <section className="block catalog">
                <div className='filter'>
                    <Filter />
                </div>

                <div className="catalog-products">
                    <div className="catalog-products__top">
                        <h3 className="catalog-products__title">Men’s Clothing</h3>

                        <div className="catalog-products__filter">Filter</div>

                        <div className="catalog-products__controls">
                            <button onClick={() => {setSwitch(false); setActiveRec(false); setActiveNew(true)} } className={isNewActive ? "catalog-products__new active" : "catalog-products__new" }  id="newBtn">New</button>

                            <button onClick= {() => {setSwitch(true); setActiveRec(true); setActiveNew(false)}}className={isRecActive ? "catalog-products__recomended active" : "catalog-products__recomended" } id="recommendedBtn">Recommended</button>
                        </div>
                    </div>

                    <div className='products'>
                        {isSwitched === false 
                            ? <CatalogNew items ={props.products} />
                            : <CatalogRec itemsRec ={props.productsRec} />

                        }

                        {/* products = {products} */}
                    </div>

                    {/* <Paginator onPageChanged = {onPageChanged} currentPage = {props.currentPage} totalItemsCount = {props.totalItemsCount} pageSize = {props.pageSize} portionSize = {props.portionSize} />  */}
                </div>
            </section>

            <section className="block online">
                <Online />
            </section>

            <section className="block best-prices">
                <BestPrices />
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.catalog.menProducts,
        productsRec: state.catalog.menProductsRec,
        pageSize: state.catalog.pageSize,
        currentPage: state.catalog.currentPage,
        portionSize: state.catalog.portionSize,
    }
}

export default connect(mapStateToProps, { getMenProducts })(MansProducts)

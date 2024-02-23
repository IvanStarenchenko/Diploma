import '../common/Products.scss'
import '../../Hero/categories/Categories.scss'

import Paginator from '../../Common/Paginator'
import { getMenProducts } from '../../../redux/catalogReducer'

import Filter from '../common/Filter'
import Online from '../common/Online'
import BestPrices from '../common/BestPrices'
import Catalog from '../Catalog'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const MansProducts = (props) => {

    useEffect(() => {
        props.getMenProducts(props.currentPage , props.pageSize)  
    } , {})

   const onPageChanged = (currentPage) => {
        props.getMenProducts(currentPage , props.pageSize)      
    }
    return(
        <div className="container ">
            <section className="catalog">
                <div className='filter'>
                    <Filter/>
                </div>
                <div className="catalog-products">
                    <div className="catalog-products__top">
                        <h3 className="catalog-products__title">Men’s Clothing</h3>
                        <div className="catalog-products__controls">
                            <div className="catalog-products__new active" id="newBtn">New</div>
                            <div className="catalog-products__recommended" id="recommendedBtn">Recommended</div>
                        </div>
                    </div>
                    <div className='catalog'>
                        <Catalog items = {props.products} /> 
                        {/* products = {products} */}
                    </div>  
                    {/* <Paginator onPageChanged = {onPageChanged} currentPage = {props.currentPage} totalItemsCount = {props.totalItemsCount} pageSize = {props.pageSize} portionSize = {props.portionSize} />  */}
                </div>
            </section>
            <section className="online">
                <Online/>
            </section>
            <section className="best-prices">
                <BestPrices />
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        products: state.catalog.menProducts,
        pageSize: state.catalog.pageSize,
        currentPage: state.catalog.currentPage,
        portionSize: state.catalog.portionSize,
    }
}

export default connect(mapStateToProps , {getMenProducts})(MansProducts)

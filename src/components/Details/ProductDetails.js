import DetailsSlider from "./details-slider/detailSlider"
import DetailsDescription from "./detailsDescription/detailsDescription"
import DetailsAbout from "./details-about/DetailsAbout"
import DetailsSimilar from "./detailsSimilar/detailsSimilar"
import { getProducts } from "../../redux/productsReducer"
import './ProductDetails.scss'
import { connect } from "react-redux"
 


const Details = (props) => {
    return(
        <> 
            <section className="product-detail">
                <div className="container">
                    <div className="product-detail__groups">
                        <DetailsSlider product = {props.product}/>
                        <DetailsAbout changeProperty = {props.changeProperty}  cartContent = {props.cartContent} deleteItemFromCart = {props.deleteItemFromCart} product = {props.product} addItemToCart = {props.addItemToCart}/>
                    </div>
                </div>
            </section>
            <section className="product-description">
                <div className="container">
                    <h3 className="product-description__title title">Product Description</h3>
                    <DetailsDescription />
                </div>
            </section>
            <section className="product-similar">
                <div className="container">
                    <h3 className="product-similar__title title">Similar Products</h3>
                    <DetailsSimilar />
                </div>
            </section>
        </>
    )
}


export default Details

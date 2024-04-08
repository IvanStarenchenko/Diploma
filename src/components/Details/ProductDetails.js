import DetailsSlider from "./details-slider/detailSlider"
import DetailsDescription from "./detailsDescription/detailsDescription"
import DetailsAbout from "./details-about/DetailsAbout"
import DetailsSimilar from "./detailsSimilar/detailsSimilar"
import { getProducts } from "../../redux/productsReducer"
import './ProductDetails.scss'
import { connect } from "react-redux"



const Details = (props) => {
    return (
        <>
            <section className="block product-detail">
                <div className="container">
                    <div className="product-detail__groups">
                        <DetailsSlider product = {props.product}/>
                        <DetailsAbout decreaseSummury = {props.decreaseSummury} increaseSummury = {props.increaseSummury} changeProperty = {props.changeProperty} cartContent = {props.cartContent} deleteItemFromCart = {props.deleteItemFromCart} product = {props.product} addItemToCart = {props.addItemToCart}/>
                    </div>
                </div>
            </section>

            <section className="block product-description">
                <div className="container">
                    <h3 className="product-description__title title">Product Description</h3>
                    <DetailsDescription />
                </div>
            </section>

            <section className="block product-similar">
                <div className="container">
                    <h3 className="product-similar__title title">Similar Products</h3>
                    <DetailsSimilar />
                </div>
            </section>
        </>
    )
}


export default Details

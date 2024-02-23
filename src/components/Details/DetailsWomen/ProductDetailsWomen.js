import DetailsSliderMen from "../details-slider/detailSliderMen"
import DetailsSliderWomen from "../details-slider/detailSliderWomen"
import DetailsDescription from "../detailsDescription/detailsDescription"
import DetailsAboutMen from "../details-about/DetailsAboutMen"
import DetailsAboutWomen from "../details-about/DetailsAboutWomen"
import DetailsSimilar from "../detailsSimilar/detailsSimilar"
import { getProducts } from "../../../redux/productsReducer"
import '../ProductDetails.scss'
import { connect } from "react-redux"
 


const DetailsWomen = (props) => {
    return(
        <> 
            <section className="product-detail">
                <div className="container">
                    <div className="product-detail__groups">
                        {/* <DetailsSliderMen productM = {props.productM}/>
                        <DetailsAboutMen productM = {props.productM}/> */}
                        <DetailsAboutWomen productW = {props.productW}/>
                        <DetailsSliderWomen productM = {props.productW}/>

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


export default DetailsWomen

import React, { useEffect,useRef } from 'react';
import { getProducts } from "../../redux/productsReducer"
import { addItemToCart , deleteItemFromCart} from '../../redux/cartReducer';
import { changeProperty} from '../../redux/catalogReducer';
import { useParams} from 'react-router-dom';
import { compose } from 'redux';
import Details from './ProductDetails';
import { connect } from "react-redux"
 


const DetailsContainer = (props) => {

    
    return(
       <Details changeProperty = {props.changeProperty} deleteItemFromCart = {props.deleteItemFromCart} product = {props.product} addItemToCart = {props.addItemToCart} cartContent = {props.cartContent}/>
    )
}

let mapStateToProps = (state) => {
    return{
      product: state.catalog.menProducts,
      cartContent: state.cart.cartContent,
    }
  }

export default compose(
    connect(mapStateToProps , {getProducts , addItemToCart , deleteItemFromCart , changeProperty}),
  )(DetailsContainer);  




      // const { productId } = props.match.params;
    // const prevPropsRef = useRef();
    // const refreshProfile = () => {
    //     if (!productId) {
    //       props.getProducts(1);
    //     } else {
    //       props.getProducts(productId);
    //     }
    //   };
    
      // useEffect(() => {
      //   refreshProfile();
      // }, [productId]); 
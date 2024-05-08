import React, { useEffect,useRef } from 'react';
import { getProducts } from "../../redux/productsReducer"
import { addItemToCart , deleteItemFromCart , increaseSummury , decreaseSummury} from '../../redux/cartReducer';
import { changeProperty , setComment} from '../../redux/catalogReducer';
import { Navigate, useParams} from 'react-router-dom';
import { compose } from 'redux';
import Details from './ProductDetails';
import { connect } from "react-redux"



const DetailsContainer = (props) => {

  if(!props.isLogin){
   return(
    <Navigate to = "/SignIn" />
   )
   
    
    
    }
    return(
       <Details setComment = {props.setComment} comments = {props.comments} getNewProperties = {props.getNewProperties} productById = {props.productById} decreaseSummury = {props.decreaseSummury} increaseSummury = {props.increaseSummury} changeProperty = {props.changeProperty} deleteItemFromCart = {props.deleteItemFromCart} product = {props.product} addItemToCart = {props.addItemToCart} cartContent = {props.cartContent}/>
    )
}

let mapStateToProps = (state) => {
    return{
      product: state.catalog.products,
      productById: state.catalog.product,
      comments: state.catalog.comments,
      cartContent: state.cart.cartContent,
      isLogin: state.auth.isLogin,
      
    }
  }

export default compose(
    connect(mapStateToProps , {getProducts , setComment , addItemToCart , deleteItemFromCart ,changeProperty , increaseSummury , decreaseSummury}),
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
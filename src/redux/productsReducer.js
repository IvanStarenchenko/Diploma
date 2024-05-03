import {productsAPI } from "../api/Api";
const GET_PRODUCTS = 'GET_PRODUCTS';
let initialState = {
 product: null
}

const productsReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS: {
          console.log(action.product)
          return {
              ...state,
              product: action.product
          }
      }
      
      default:
            return state
    }
}


  
export const setProduct = (product) => {
    return{
        type: GET_PRODUCTS,
        product,
    }
}

export const getProducts = (productId) => async (dispatch) => {
    try {
      let response = await productsAPI.getProduct(productId);
      dispatch(setProduct(response.data));
    } catch (error) {
      if (error.response) {
        console.error('Ошибка ответа сервера:', error.response.data);
        console.error('Статус кода:', error.response.status);
      } else if (error.request) {
        console.error('Ошибка запроса. Нет ответа от сервера.');
      } else {
        console.error('Ошибка настройки запроса:', error.message);
      }
    }
  };
  

export default productsReducer;
import { productsAPI , reviewsAPI } from "../api/Api";


const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_PROPERTY = 'SET_PROPERTY';
const SET_PRODUCT = 'SET_PRODUCT';
const SET_COMMENTS = 'SET_COMMENTS';



let initialState = {
  products: [],
  product: {},  
  comments: [],

// menProductsRec: [
//   { id: 1 , itemImageMain: man02 , itemImageSide: man02 , itemImageSide2: man02 , itemImageSide3: man03 , itemName: 'Rec line Pattern Black N...' , itemBrand: 'AS’s  Brand' , itemPrice: 123.00 ,  itemColor: 'black' , itemSize:'XS'},
//   { id: 2 , itemImageMain: man03 , itemImageSide: man03 , itemImageSide2: man04 , itemImageSide3: man01 , itemName: 'Rec line Pattern Black I...' , itemBrand: 'AS’s  Brand' , itemPrice: 124.00 ,  itemColor: 'black' , itemSize:'XS'},
//   { id: 3 , itemImageMain: man01 , itemImageSide: man04 , itemImageSide2: man03 , itemImageSide3: man02 , itemName: 'Rec line Pattern Black G...' , itemBrand: 'AS’s  Brand' , itemPrice: 125.00 ,  itemColor: 'black' , itemSize:'XS'},
//   { id: 4 , itemImageMain: man04 , itemImageSide: man01 , itemImageSide2: man02 , itemImageSide3: man03 , itemName: 'Rec line Pattern Black G...' , itemBrand: 'AS’s  Brand' , itemPrice: 126.00 ,  itemColor: 'black' , itemSize:'XS'},
//   { id: 5 , itemImageMain: man03 , itemImageSide: man04 , itemImageSide2: man01 , itemImageSide3: man02 , itemName: 'Rec line Pattern Black E...' , itemBrand: 'AS’s  Brand' , itemPrice: 127.00 ,  itemColor: 'black' , itemSize:'XS'},
//   { id: 6 , itemImageMain: man02 , itemImageSide: man02 , itemImageSide2: man02 , itemImageSide3: man03 , itemName: 'Rec line Pattern Black R...' , itemBrand: 'AS’s  Brand' , itemPrice: 128.00 ,  itemColor: 'black' , itemSize:'XS'},

// ],
// womenProducts: [
//   { id: 1 , itemImageMain: woman01 , itemName: 'Black Sweatshirt with ....' , itemBrand: 'AS’s  Brand' , itemPrice: '123.00$'},
//   { id: 2 , itemImageMain: woman02 , itemName: 'White T-shirt' , itemBrand: 'AS’s  Brand' , itemPrice: '124.00$'},
//   { id: 3 , itemImageMain: woman03 , itemName: 'Levender Hoodie with ...' , itemBrand: 'AS’s  Brand' , itemPrice: '125.00$'},
//   { id: 4 , itemImageMain: woman02 , itemName: 'Leaves Pattern White...' , itemBrand: 'AS’s  Brand' , itemPrice: '126.00$'},
//   { id: 5 , itemImageMain: woman04 , itemName: 'White Graphic Crop Top' , itemBrand: 'AS’s  Brand' , itemPrice: '127.00$'}, 

//   { id: 1, itemImageMain: man01, itemImageSide: man02, itemImageSide2: man02, itemImageSide3: man03, itemName: 'line Pattern Black N...', itemBrand: 'AS’s  Brand', itemPriceXS: '123.00$', itemPriceS: '133.00$', itemPriceM: '143.00$', itemPriceL: '153.00$', itemPriceXL: '163.00$', itemColor: 'Orange', itemSize: 'XS', itemSubtotal: '123.00$' },
//   { id: 2, itemImageMain: man02, itemImageSide: man03, itemImageSide2: man04, itemImageSide3: man01, itemName: 'line Pattern Black I...', itemBrand: 'AS’s  Brand', itemPriceXS: '124.00$', itemPriceS: '135.00$', itemPriceM: '146.00$', itemPriceL: '157.00$', itemPriceXL: '168.00$', itemColor: 'Black', itemSize: 'XS', itemSubtotal: '124.00$' },
//   { id: 3, itemImageMain: man03, itemImageSide: man04, itemImageSide2: man03, itemImageSide3: man02, itemName: 'line Pattern Black G...', itemBrand: 'AS’s  Brand', itemPriceXS: '125.00$', itemPriceS: '136.00$', itemPriceM: '147.00$', itemPriceL: '158.00$', itemPriceXL: '169.00$', itemColor: 'Brown', itemSize: 'XS', itemSubtotal: '125.00$' },
//   { id: 4, itemImageMain: man04, itemImageSide: man01, itemImageSide2: man02, itemImageSide3: man03, itemName: 'line Pattern Black G...', itemBrand: 'AS’s  Brand', itemPriceXS: '126.00$', itemPriceS: '137.00$', itemPriceM: '148.00$', itemPriceL: '159.00$', itemPriceXL: '170.00$', itemColor: 'Green', itemSize: 'XS', itemSubtotal: '126.00$' },
//   { id: 5, itemImageMain: man03, itemImageSide: man04, itemImageSide2: man01, itemImageSide3: man02, itemName: 'line Pattern Black E...', itemBrand: 'AS’s  Brand', itemPriceXS: '127.00$', itemPriceS: '138.00$', itemPriceM: '149.00$', itemPriceL: '160.00$', itemPriceXL: '171.00$', itemColor: 'Brown', itemSize: 'XS', itemSubtotal: '127.00$' },
//   { id: 6, itemImageMain: man01, itemImageSide: man02, itemImageSide2: man02, itemImageSide3: man03, itemName: 'line Pattern Black R...', itemBrand: 'AS’s  Brand', itemPriceXS: '128.00$', itemPriceS: '139.00$', itemPriceM: '150.00$', itemPriceL: '161.00$', itemPriceXL: '172.00$', itemColor: 'Orange', itemSize: 'XS', itemSubtotal: '128.00$' },

// ],

  currentPage: 1,
  totalItemsCount: 0,
  pageSize: 10,
  portionSize: null,
}
const catalogReducer = (state = initialState, action) => {
    switch (action.type){
     
      case SET_PRODUCTS:
        return  {
          ...state,
          products: action.products,
           
        } 
       
      case SET_PRODUCT:
          return{
            ...state,
            product: action.productById,
        }  
      case SET_COMMENTS:
          return{
            ...state,
            comments: action.comments,
        }  

        case SET_PROPERTY:
          return{
            ...state,
            product:{
              ...state.product,
              size:action.newSize,
              color: action.newColor,
            }
          }

      
      default:
            return state
    }

  // switch (action.type) {

  //   case SET_MEN_PRODUCTS:
  //     return {
  //       ...state,
  //       menProducts: action.menProducts
  //     }

  //   case SET_WOMEN_PRODUCTS:
  //     return {
  //       ...state,
  //       womenProducts: action.womenProducts
  //     }

  //   default:
  //     return state
  // }
}

export const setProducts = (products) => {
  
  return {
    type: SET_PRODUCTS,
    products,
  }
  
}


 
  export const changeProperty = (id, newSize , newColor) => {
    return {
      type: SET_PROPERTY,
      id,
      newSize,
      newColor
    }
  }

export const setProduct = (productById) => {
  return {
    type: SET_PRODUCT,
    productById
  }

}
export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    comments
  }

}



export const getProductById = (productId) => async (dispatch) => {
  try {
      let response = await productsAPI.getProductById(productId);
      dispatch(setProduct(response.data));
      let responseComm = await reviewsAPI.getReviews(productId);
      if (responseComm && responseComm.data){
        dispatch(setComments(responseComm.data));
      }
  } catch (error) {
      if (error.response && error.response.status === 401) {
          console.warn('Authorization error:', error);
 
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          
          
      }
      return Promise.resolve(null);
  }
};
export const setComment = (productId , comment) => async (dispatch) => {
  try {
      const text = comment.comment
      let response = await reviewsAPI.postReviews(productId , text);
      dispatch(setComment(response.data));
      let responseComm = await reviewsAPI.getReviews(productId);
      console.log(responseComm.data)
      if (responseComm && responseComm.data){
        dispatch(setComments(responseComm.data));
      }
  } catch (error) {
      if (error.response && error.response.status === 401) {
          console.warn('Authorization error:', error);
 
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          
          
      }
      return Promise.resolve(null);
  }
};



export const getProductByName = (productName , products) => async (dispatch) => {
  try {
      const productData = productName;
      
      let response = await productsAPI.getProductByName(productData.productName);
      if (response && response.data) {
        const keys = Object.keys(response.data)
        const lenght = keys.length
        if(lenght === 0){
          dispatch(getProducts('men'));
        }else{
          dispatch(setProducts(response.data));    
        }
      } else {
          console.error('Unexpected response structure:', response.data);
      }
  } catch (error) { 
      if (error.response) {
          // Ошибка HTTP-ответа
          console.error('HTTP Error:', error.response.status);
          console.error('Response data:', error.response.data);
          console.error('Response headers:', error.response.headers);
      } else if (error.request) {
          // Запрос был отправлен, но ответ не был получен
          console.error('No response received for the request:', error.request);
      } else {
          // Произошла ошибка при настройке запроса
          console.error('Error setting up request:', error.message);
      }
  }
};
export const getProducts = (category) => async (dispatch) => {
  try {
      let response = await productsAPI.getProducts(category);
      if (response && response.data) {
          dispatch(setProducts(response.data));
          console.log('Men products:', response.data);
      } else {
          console.error('Unexpected response structure:', response.data);
      }
  } catch (error) {
      if (error.response) {
          // Ошибка HTTP-ответа
          console.error('HTTP Error:', error.response.status);
          console.error('Response data:', error.response.data);
          console.error('Response headers:', error.response.headers);
      } else if (error.request) {
          // Запрос был отправлен, но ответ не был получен
          console.error('No response received for the request:', error.request);
      } else {
          // Произошла ошибка при настройке запроса
          console.error('Error setting up request:', error.message);
      }
  }
};
export default catalogReducer;



















// export const getWomenProducts = (currentPage, pageSize) => async (dispatch) => {
//   try {
//     let responce = await productsAPI.getMenProducts(currentPage, pageSize)
//     dispatch(setMenProducts(responce.data.items));
//   } catch (error) {
//     if (error.response) {
//       console.error('Ошибка ответа сервера:', error.response.data);
//       console.error('Статус кода:', error.response.status);
//     } else if (error.request) {
//       console.error('Ошибка запроса. Нет ответа от сервера.');
//     } else {
//       console.error('Ошибка настройки запроса:', error.message);
//     }
//   }

// }


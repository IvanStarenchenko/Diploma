import { productsAPI } from "../api/Api";

import woman01 from '../img/hero/limelight/1.png'
import woman02 from '../img/hero/limelight/2.png'
import woman03 from '../img/hero/limelight/3.png'
import woman04 from '../img/hero/limelight/4.png'

import man01 from '../img/Products/man/01.png'
import man02 from '../img/Products/man/02.png'
import man03 from '../img/Products/man/03.png'
import man04 from '../img/Products/man/04.png'

const SET_MEN_PRODUCTS = 'SET_MEN_PRODUCTS';
const SET_WOMEN_PRODUCTS = 'SET_WOMEN_PRODUCTS';
const SET_SIZE = 'SET_SIZE';
const SET_PRICE = 'SET_PRICE';

let initialState = {
  menProducts: [
    { id: 1 , itemImageMain: man01 , itemImageSide: man02 , itemImageSide2: man02 , itemImageSide3: man03 , itemName: 'line Pattern Black N...' , itemBrand: 'AS’s  Brand' , itemPrice: 123.00 + '$',  itemColor: 'Orange' , itemSize:'XS', itemSubtotal: '123.00$'},
    { id: 2 , itemImageMain: man02 , itemImageSide: man03 , itemImageSide2: man04 , itemImageSide3: man01 , itemName: 'line Pattern Black I...' , itemBrand: 'AS’s  Brand' , itemPrice: 124.00 + '$',  itemColor: 'Black' , itemSize:'XS', itemSubtotal: '124.00$'},
    { id: 3 , itemImageMain: man03 , itemImageSide: man04 , itemImageSide2: man03 , itemImageSide3: man02 , itemName: 'line Pattern Black G...' , itemBrand: 'AS’s  Brand' , itemPrice: 125.00 + '$',  itemColor: 'Brown' , itemSize:'XS', itemSubtotal: '125.00$'},
    { id: 4 , itemImageMain: man04 , itemImageSide: man01 , itemImageSide2: man02 , itemImageSide3: man03 , itemName: 'line Pattern Black G...' , itemBrand: 'AS’s  Brand' , itemPrice: 126.00 + '$',  itemColor: 'Green' , itemSize:'XS', itemSubtotal: '126.00$'},
    { id: 5 , itemImageMain: man03 , itemImageSide: man04 , itemImageSide2: man01 , itemImageSide3: man02 , itemName: 'line Pattern Black E...' , itemBrand: 'AS’s  Brand' , itemPrice: 127.00 + '$',  itemColor: 'Brown' , itemSize:'XS', itemSubtotal: '127.00$'},
    { id: 6 , itemImageMain: man01 , itemImageSide: man02 , itemImageSide2: man02 , itemImageSide3: man03 , itemName: 'line Pattern Black R...' , itemBrand: 'AS’s  Brand' , itemPrice: 128.00 + '$', itemColor: 'Orange' , itemSize:'XS', itemSubtotal: '128.00$'},

],

  womenProducts: [
    { id: 1 , itemImageMain: woman01 , itemName: 'Black Sweatshirt with ....' , itemBrand: 'AS’s  Brand' , itemPrice: '123.00$'},
    { id: 2 , itemImageMain: woman02 , itemName: 'White T-shirt' , itemBrand: 'AS’s  Brand' , itemPrice: '124.00$'},
    { id: 3 , itemImageMain: woman03 , itemName: 'Levender Hoodie with ...' , itemBrand: 'AS’s  Brand' , itemPrice: '125.00$'},
    { id: 4 , itemImageMain: woman02 , itemName: 'Leaves Pattern White...' , itemBrand: 'AS’s  Brand' , itemPrice: '126.00$'},
    { id: 5 , itemImageMain: woman04 , itemName: 'White Graphic Crop Top' , itemBrand: 'AS’s  Brand' , itemPrice: '127.00$'}, 

], // если не заработает, попробуй поменять на null
  currentPage: 1,
  totalItemsCount: 0,
  pageSize: 10,
  portionSize: null, 
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type){
     
      case SET_MEN_PRODUCTS:
        return  {
          ...state,
          menProducts: action.menProducts
        } 
   
      case SET_WOMEN_PRODUCTS:
        return  {
          ...state,
          womenProducts: action.womenProducts
        } 
        case SET_SIZE:
        const { id, newSize } = action;
        const updatedMenProducts = state.menProducts.map(item => {
          if (item.id === id) {
            // Обновляем размер и цену товара
            return {
              ...item,
              itemSize: newSize,
            };
          }
          return item;
        });
  

      return {
        ...state,
        menProducts: updatedMenProducts,
      };
      default:
            return state
    }
}

export const setMenProducts = (menProducts) => {
    return {
      type: SET_MEN_PRODUCTS,
      menProducts
    }
}
export const setWomenProducts = (womenProducts) => {
    return {
      type: SET_WOMEN_PRODUCTS,
      womenProducts
    }
}
 

export const changeSize = (id, newSize) => {
  return {
    type: SET_SIZE,
    id,
    newSize,
  }
}


export const getMenProducts = (currentPage, pageSize) => async (dispatch) => {
  try {
    let responce = await productsAPI.getMenProducts(currentPage, pageSize)
    dispatch(setMenProducts(responce.data.items));
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

}

















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

export default catalogReducer;
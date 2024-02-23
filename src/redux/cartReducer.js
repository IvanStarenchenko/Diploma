const SET_ITEM = 'SET_ITEM';
const DEL_ITEM = 'DEL_ITEM';
const SET_SIZE = 'SET_SIZE';
let initialState = {
  cartContent: [] , 
}

const cartReducer = (state = initialState, action) => {
    switch (action.type){
     
      case SET_ITEM:
       return {
            ...state,
              cartContent: [...state.cartContent , 
                {id: action.item.id ,
                image: action.item.itemImageMain,
                name: action.item.itemName, 
                color: action.item.itemColor ,
                size: action.item.itemSize , 
                priceXS: action.item.itemPriceXS, 
                priceS: action.item.itemPriceS, 
                priceM: action.item.itemPriceM, 
                priceL: action.item.itemPriceL, 
                priceXL: action.item.itemPriceXL, 
                count: 1 , 
                subtotal: action.item.itemSubtotal }],
          };
      case DEL_ITEM:
       return {
            ...state,
            cartContent: state.cartContent.filter((item) => item.id !== action.item),

          };
      case SET_SIZE:
       return {
            ...state,
            cartContent: state.cartContent.filter((item) => item.id !== action.item),
          };

      default:
            return state
    }
}

export const addItemToCart = (item) => {
    return {
      type: SET_ITEM,
      item,
    }
    
  }
  
export const deleteItemFromCart = (item) => {
    return {
      type: DEL_ITEM,
      item,
    }
    
  }
  

export const changesSize = (size) => {
  return{
    type: SET_SIZE,
    size
  }
}
  

export default cartReducer;
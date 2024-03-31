const SET_ITEM = 'SET_ITEM';
const DEL_ITEM = 'DEL_ITEM';
const UPDATE_ITEM_IN_CART = 'UPDATE_ITEM_IN_CART';
let initialState = {
  cartContent: [] , 
  nextItemId: 1,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type){
     
      case SET_ITEM:
        return {
          ...state,
          cartContent: [
            ...state.cartContent,
            { 
              id: state.nextItemId,
              image: action.item.itemImageMain,
              name: action.item.itemName, 
              color: action.item.itemColor ,
              size: action.item.itemSize , 
              price: action.item.itemPrice, 
              count: 1, // Устанавливаем начальное значение количества товара в 1
              subtotal: action.item.itemPrice // Инициализируем subtotal ценой товара
            }
          ],
          nextItemId: state.nextItemId + 1,
        };
      
       return {
            ...state,
              cartContent: [...state.cartContent , 
                { 
                id: state.nextItemId,
                image: action.item.itemImageMain,
                name: action.item.itemName, 
                color: action.item.itemColor ,
                size: action.item.itemSize , 
                price: action.item.itemPrice, 
                subtotal: action.item.itemSubtotal,
                count: 1, // Добавляем поле count для хранения количества товара
              }],
                nextItemId: state.nextItemId + 1,
          };
      case DEL_ITEM:
      case UPDATE_ITEM_IN_CART:
        const updatedCartContent = state.cartContent.map(item => {
            if (item.id === action.updatedItem.id) {
                return action.updatedItem;
            }
            return item;
        });
       return {
            ...state,
            cartContent: state.cartContent.filter((item) => item.id !== action.item),
            nextItemId: state.nextItemId - 1, 
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

  export const updateItemInCart = (updatedItem) => {
    return {
        type: UPDATE_ITEM_IN_CART,
        updatedItem,
    }
}
  


  

export default cartReducer;
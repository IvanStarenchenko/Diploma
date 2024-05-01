const SET_ITEM_FAV = 'SET_ITEM_FAV';
const DEL_ITEM_FAV = 'DEL_ITEM_FAV';
let initialState = {
  favoriteContent: [] , 
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type){
     
      case SET_ITEM_FAV:
       return {
            ...state,
            favoriteContent: [...state.favoriteContent , 
                {id: action.item.productId ,
                image: action.item.photo,
                name: action.item.productName, 
                color: action.item.itemColor ,
                size: action.item.itemSize , 
                price: action.item.price, 
                count: 1 , 
                subtotal: action.item.price }],
          };
      case DEL_ITEM_FAV:
       return {
            ...state,
            favoriteContent: state.favoriteContent.filter(
              (item) => item.id !== action.itemId
          ),
          };
     

      default:
            return state
    }
}

export const addItemToFav = (item) => {
    return {
      type: SET_ITEM_FAV,
      item,
    }
    
  }
  
export const deleteItemFromFav = (itemId) => {
    return {
      type: DEL_ITEM_FAV,
      itemId,
    }
    
  }
  


  

export default favoriteReducer;
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
                {id: action.item.id ,
                image: action.item.itemImageMain,
                name: action.item.itemName, 
                color: action.item.itemColor ,
                size: action.item.itemSize , 
                price: action.item.itemPrice, 
                count: 1 , 
                subtotal: action.item.itemSubtotal }],
          };
      case DEL_ITEM_FAV:
       return {
            ...state,
            favoriteContent: state.favoriteContent.filter((item) => item.id !== action.item),

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
  
export const deleteItemFromFav = (item) => {
    return {
      type: DEL_ITEM_FAV,
      item,
    }
    
  }
  


  

export default favoriteReducer;
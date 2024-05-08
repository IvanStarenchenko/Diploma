const SET_INFO = 'SET_INFO';
let initialState = {

  personalData: JSON.parse(localStorage.getItem('personalData')) ||
   {name: '' ,  country: '' ,
    email: '' , streetAdress: '' , city:'',
    phone: '' , postalCode: '' , inctruction: '' }
   
}

const personalInfoReducer = (state = initialState, action) => {
    switch (action.type){
     
      case SET_INFO:
        const newState = {
            ...state,
            personalData: { ...action.data }
          };
        localStorage.setItem('personalData', JSON.stringify(newState.personalData));
        return newState;
      default:
            return state
    }
}

export const changePersonalInfo = (data) => {
    return {
      type: SET_INFO,
      data
    }
  }
  



export default personalInfoReducer;
import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"; 
import catalogReducer from './catalogReducer'
import authReducer from "./auth-reducer";
import profileReducer from "./profileReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import personalInfoReducer from "./infoReducer";

let reducers = combineReducers({
  catalog: catalogReducer,
  personalInfo: personalInfoReducer,
  products: productsReducer,
  form: formReducer,
  auth: authReducer,
  profile: profileReducer,
  cart: cartReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

export default store; 
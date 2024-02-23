import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React , {Suspense} from 'react';
import Hero from './components/Hero/Hero';
import { Navigate } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WomansProducts from './components/Products/Woman/WomanProducts'
import MansProducts from './components/Products/Man/MansProducts'
import DetailsContainer from './components/Details/ProductDetailsContainer';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import SignIn from './components/login/SignInForm/SignIn';
import SignUp from './components/login/SignUpForm/SignUp';
import Reset from './components/login/ResetForm/Reset';
import Check from './components/login/CheckForm/Check';
import Wishlist from './components/MyAccount/Wishlist'
import MyInfo from './components/MyAccount/MyInfo/MyInfo'
import Details from './components/MyAccount/Details';
import Cancelled from './components/MyAccount/Orders/Cancelled/Cancelled'
import Completed from './components/MyAccount/Orders/Completed/Completed';
import Active from './components/MyAccount/Orders/Active/Active';
class App extends React.Component{
  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  //   alert('O-oh , some troubles on the way')
  //   //console.error(promiseRejectionEvent)
  // }
  // componentWillUnmount(){
  //   window.removeEventListener("unhandledrejection" ,this.catchAllUnhandledErrors)                                        

  // }
  render(){
    return (
        <div className='app-wrapper'>
          <Header />
          <main className='main'>
          <Suspense fallback={<div>sosi</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/Main" />} />
              <Route path="/Main" element={<Hero />} />
              <Route path="/Woman" element={<WomansProducts/>} /> 
              <Route path="/Man" element={<MansProducts/>} /> 
              {/* //////////////////////////////////////////////// */}
              <Route path="/Description/:id" element={<DetailsContainer/>} />
              <Route path='/Cart' element={<Cart/>} />
              <Route path='/Details' element={<Details/>} />
              {/* //////////////////////////////////////////////// */}
              <Route path='/CheckOut' element={<CheckOut/>} />
              <Route path='/SignIn' element={<SignIn/>} />
              <Route path='/SignUp' element={<SignUp/>} />
              <Route path='/Check' element={<Check/>} />
              <Route path='/Reset' element={<Reset/>} />
              {/* //////////////////////////////////////////////// */}
              <Route path='/Profile/Active' element={<Active/>} />
              <Route path='/Profile/Cancelled' element={<Cancelled/>} />
              <Route path='/Profile/Completed' element={<Completed/>} />
              <Route path='/Profile/MyInfo' element={<MyInfo/>} />
              <Route path='/Profile/Wishlist' element={<Wishlist/>} />
              <Route path="*" element={<div>404 NOT FOUND</div>} />
              {/* Добавь другие маршруты здесь */}
            </Routes>
          </Suspense> 
          <Footer />
          </main>
        </div>
    );
  }
} 




export default App;

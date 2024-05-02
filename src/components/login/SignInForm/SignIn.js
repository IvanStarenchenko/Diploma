import signIn from '../../../img/sign/in/in.png'
import SignInReduxForm from './SignInForm'
import '../sign/sign-in.scss'
import { connect } from 'react-redux'
import { getMyselfAuthData } from '../../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const SignIn = (props) => {
    
    const onSubmit = (value) => {  
        console.log(value)
        props.getMyselfAuthData(value.email , value.password)    
   }
   if(props.isLogin){
    return <Navigate to = "/Profile" />
    }
    return(
        <div className="sign__inner inner-sign">
            <img src={signIn}className="inner-sign__image" alt=""/>
            <div className="inner-sign__body sign-in">
                <div className="container">
                    <div className="sign-in__text sign-text">
                        <h2 className="sign-text__title">Sign In Page</h2>
                    </div>
                    <div className="sign-in__continue-with continue-with">
                        <button className="inner-sign__google"><span>Continue With Google</span></button>
                        <button className="inner-sign__twitter"><span>Continue With Twitter</span></button>
                    </div>
                    <div className="sign-in__form">
                        <SignInReduxForm onSubmit={onSubmit}/>
                    </div>
                    <NavLink to = {'/SignUp'} className="inner-sign__login">Don’t have an account? Sign up  </NavLink>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        isLogin: state.auth.isLogin
    }
}
export default connect( mapStateToProps, {getMyselfAuthData})(SignIn);

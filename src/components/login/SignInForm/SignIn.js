import signIn from '../../../img/sign/in/in.png'
import SignInReduxForm from './SignInForm'
import '../sign/sign-in.scss'
import { NavLink } from 'react-router-dom'
const SignIn = () => {
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
                        <SignInReduxForm />
                    </div>
                    <NavLink to = {'/SignUp'} className="inner-sign__login">Don’t have an account? Sign up  </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignIn
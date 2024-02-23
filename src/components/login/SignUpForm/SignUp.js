import '../sign/sign-up.scss'
import SignUpReduxForm from './SignUpForm'
import signUp from '../../../img/sign/up/up.png'
const SignUp = () => {
    return(
        <div className="sign__inner inner-sign">
            <img src={signUp} className="inner-sign__image" alt=""/>
            <div className="inner-sign__body sign-up">
                <div className="container">
                    <div className="sign-up__text sign-text">
                        <h2 className="sign-text__title">Sign Up</h2>
                        <p className="sign-text__subtitle">Sign up for free to access to in any of our products </p>
                    </div>
                    <div className="sign-up__continue-with continue-with">
                        <button className="inner-sign__google"><span>Continue With Google</span></button>
                        <button className="inner-sign__twitter"><span>Continue With Twitter</span></button>
                    </div>
                    <div className="sign-up__form">
                       <SignUpReduxForm />
                    </div>
                    <a href="sign-in.html" className="inner-sign__login">Already have an  account? Log in</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp
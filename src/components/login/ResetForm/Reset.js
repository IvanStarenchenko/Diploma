import reser from '../../../img/sign/reset/reset.png'
import { ResetReduxForm } from './ResetForm'
import '../sign/reset.scss'
import { NavLink } from 'react-router-dom'
const Reset = () => {
    return(
        <div className="sign__inner inner-sign">
            <img src={reser} className="inner-sign__image" alt=""/>
            <div className="inner-sign__body reset">
                <div className="container">
                    <div className="reset__text sign-text">
                        <h2 className="sign-text__title">Reset Your Password</h2>
                        <p className="sign-text__subtitle">Enter your email and we'll send you a link to reset your password.<br/> <span>Please  check it.</span> </p>                      
                    </div>
                    <div className="reset__form">
                       <ResetReduxForm/>
                    </div>
                    <NavLink to = {'/SignIn'} className="inner-sign__send">Back to  <span>Login</span></NavLink>
            </div>
            </div>
        </div>
    )
}
export default Reset
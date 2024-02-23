import { NavLink } from 'react-router-dom'
import '../sign/check.scss'
const Check = () => {
    return(
        <div className="sign__inner inner-sign">
            <img src="img/sign/check/check.png" className="inner-sign__image" alt=""/>
            <div className="inner-sign__body check">
                <div className="container">
                    <div className="check__text sign-text">
                        <h2 className="sign-text__title">Check Email</h2>
                        <p className="sign-text__subtitle">Please check your email inbox and click on the provided link to reset your
                            password . If you don’t receive email, <span>Click here to resend</span>
                        </p>
                    </div>
                    <NavLink to = {'/SignIn'} className="check__login">Back to  Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Check
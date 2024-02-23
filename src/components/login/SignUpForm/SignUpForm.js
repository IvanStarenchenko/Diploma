import { NavLink } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { required , maxLenghtCreator} from "../../../utils/validators"
import {Input} from '../../Common/FormsControls/FormsControls'
const SignUnForm = () => {
    return (
        <form>
            <div className="inner-sign__email sign-up__email">
                <label for="email">Email</label> 
                <Field className="inner-sign__input" id="email" type="email" name={"email"} component={Input} validate = {required}/>
            </div>
            <div className="inner-sign__password sign-up__password">
                <label for="password">
                    <span>Password</span>
                    <div className="hide-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                        <path d="M16.9682 0.869862L16.2322 0.133919C16.0242 -0.0740721 15.6402 -0.042063 15.4002 0.245882L12.84 2.78985C11.688 2.29391 10.4241 2.05391 9.09604 2.05391C5.14392 2.06984 1.72014 4.37381 0.0720207 7.68602C-0.0240069 7.89401 -0.0240069 8.14994 0.0720207 8.32593C0.839954 9.89395 1.99202 11.19 3.43203 12.1659L1.33603 14.2939C1.09603 14.5339 1.06402 14.9179 1.22407 15.1259L1.96002 15.8618C2.16801 16.0698 2.55199 16.0378 2.79199 15.7499L16.8399 1.70198C17.1439 1.46211 17.1759 1.07815 16.9679 0.870136L16.9682 0.869862ZM9.94403 5.70175C9.67202 5.63773 9.38407 5.55778 9.11205 5.55778C7.752 5.55778 6.66411 6.6458 6.66411 8.00571C6.66411 8.27772 6.72813 8.56566 6.80809 8.83768L5.73597 9.89372C5.41601 9.33376 5.24003 8.70966 5.24003 8.00574C5.24003 5.87776 6.95205 4.16574 9.08003 4.16574C9.78409 4.16574 10.4081 4.34172 10.968 4.66168L9.94403 5.70175Z" fill="#807D7E"/>
                        <path d="M18.1206 7.68596C17.5606 6.56591 16.8246 5.55798 15.9127 4.74194L12.9366 7.68596V8.00591C12.9366 10.1339 11.2246 11.8459 9.09661 11.8459H8.77665L6.88867 13.7339C7.59273 13.8779 8.32868 13.9739 9.04868 13.9739C13.0008 13.9739 16.4246 11.6699 18.0727 8.34177C18.2167 8.11771 18.2167 7.8938 18.1206 7.68578L18.1206 7.68596Z" fill="#807D7E"/>
                        </svg>
                        <div id="toggle-password-button">Show</div>
                    </div>
                </label> 
                <Field className="inner-sign__input" id="passwordInput" type="password" name={"password"} component={Input} validate = {required}/>
                <p className="prompt">Use 8 or more characters with a mix of letters, numbers & symbols</p>
            </div>
            <div className="inner-sign__checkbox">
                <div className="inner-sign__block">
                    <Field type="checkbox" id="agree" name={"sign-check-agree"} component={'input'} />
                    <label for="agree">Agree to our Terms of use and Privacy Policy </label>
                </div>
                <div className="inner-sign__block">
                    <Field type="checkbox" id="subscribe" name={"sign-check-subscribe"} component={'input'}/>
                    <label for="subscribe">Subscribe to our monthly newsletter</label>
                </div>          
            </div>
            <button type="submit" className="inner-sign__button">Sign Up</button>
        </form>
    )
}

export const SignUpReduxForm = reduxForm({
    form: 'SignUp'
})(SignUnForm)

export default SignUpReduxForm



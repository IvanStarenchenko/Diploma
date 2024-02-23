import { NavLink } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { required , maxLenghtCreator} from "../../../utils/validators"
import {Input} from '../../Common/FormsControls/FormsControls'
const ResetForm = () => {
    return (
        <form>
            <div className="inner-sign__email reset__email">
                <label for="email">User name or email address</label> 
                <Field className="inner-sign__input" id="email" type="email"  name={"email"} component={Input} validate = {required}/>
            </div>
            <NavLink to = {'/Check'} className="inner-sign__button">Send</NavLink>
        </form>
    )
}

export const ResetReduxForm = reduxForm({
    form: 'Reset'
})(ResetForm)

export default ResetReduxForm
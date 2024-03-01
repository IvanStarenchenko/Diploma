
import { NavLink } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { required, maxLenghtCreator } from "../../../utils/validators"
import { Input } from '../../Common/FormsControls/FormsControls'
const ResetForm = () => {
    return (
        <form>
            <div className="inner-sign__code verification__code">
                <label for="email">Verification Code </label>
                <Field className="inner-sign__input" id="code" type="number" name={"code"} component={Input} validate={required} />
            </div>
            <button type="submit" className="inner-sign__button">Verify Code</button>
        </form>
    )
}

export const ResetReduxForm = reduxForm({
    form: 'Reset'
})(ResetForm)

export default ResetReduxForm
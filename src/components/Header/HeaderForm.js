import { Field, reduxForm } from "redux-form"
import { required , maxLenghtCreator} from "../../utils/validators"
import {Input} from '../Common/FormsControls/FormsControls'
const HeaderForm = ({handleSubmit , error}) => {

    return(
         <form className="form" >
            <div className="input-block">
                <Field className="search__input" placeholder="Search" name={"search"} component={Input}></Field>
            </div>
     </form>
        )
}
 
export const HeaderReduxForm = reduxForm({
    form: 'headerSearch'
})(HeaderForm)


export default HeaderReduxForm
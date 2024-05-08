import { Field, reduxForm } from "redux-form"
import { required , maxLenghtCreator} from "../../../utils/validators"
import {Input} from '../../Common/FormsControls/FormsControls'
const CommentsForm = ({handleSubmit , error}) => {

    return(
         <form className="form" onSubmit={handleSubmit}>
            <div className="comments-inner__input">
                <Field className="comment__input" placeholder="Enter Comment" name={"comment"} component={Input}></Field>
                <button type="submit">Опубликовать</button>
            </div>
        </form>
        )
}
 
export const CommentsReduxForm = reduxForm({
    form: 'commentsForm'
})(CommentsForm)


export default CommentsReduxForm
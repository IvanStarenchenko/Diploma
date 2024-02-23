import { Field, reduxForm } from "redux-form"
import { required , maxLenghtCreator} from "../../../utils/validators.js"
import {Input} from '../../Common/FormsControls/FormsControls'
import '../../MyAccount/account/info/change-info.scss'
const MyInfoForm = ({handleSubmit}) => {
    return(
        <>
            <form className="change-inner__contacts change-contacts-inner" onSubmit={handleSubmit}>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Full name*</p>
                        <Field className="change-input" type="text" placeholder="Full name" name={"name"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Password*</p>
                        <Field className="change-input" type="text" placeholder="Password" name={"password"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Country / Region*</p>
                        <Field className="change-input" type="text" placeholder="Country / Region" name={"country"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Your email*</p>
                        <Field className="change-input" type="text" placeholder="Your email" name={"email"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Street Address*</p>
                        <Field className="change-input" type="text" placeholder="House number and street name" name={"streetAdress"} component={Input} validate = {required}/>
                    </label>
                </div>
                
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">City*</p>
                        <Field className="change-input" type="text" placeholder="Town / City" name={"city"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Phone*</p>
                        <Field className="change-input" type="number" placeholder="Phone" name={"phone"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Postal Code*</p>
                        <Field className="change-input" type="text" placeholder="Postal Code" name={"postalCode"} component={Input} validate = {required}/>
                    </label>
                </div>
                
                <div className="change-inner__instruction">
                    <label>
                        <p className="change-label">Delivery Instruction</p>
                        <Field className="inctruction-area" name={"inctruction"} component={'textarea'}></Field>
                    </label>
                </div>
                <div className="change-inner__checkbox">
                    <div className="change-inner__block">
                        <Field type="checkbox"  name={"setShippingAddress"} component={Input} />
                        <label for="agree">Agree to our Terms of use and Privacy Policy </label>
                    </div>
                    <div className="change-inner__block">
                        <Field type="checkbox" name={"setBillingAddress"} component={Input}/>
                        <label for="subscribe">Subscribe to our monthly newsletter</label>
                    </div>          
                </div>
                <div className="change-inner__buttons">
                    <button className="change-inner__save edit-button">Save</button>
                    <button className="change-inner__cancel edit-button">Cancel</button>
                </div>
            </form>   
        </>       
    )
}
const MyInfoFormReduxForm = reduxForm({
    form:"editProfile",
    enableReinitialize: true,
    destroyOnUnmount: false
}
)(MyInfoForm)

export default MyInfoFormReduxForm
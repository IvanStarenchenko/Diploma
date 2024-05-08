import { Field, reduxForm } from "redux-form"
import { required , maxLenghtCreator} from "../../../utils/validators.js"
import {Input} from '../../Common/FormsControls/FormsControls'
import '../../MyAccount/account/info/change-info.scss'
const MyInfoForm = ({handleSubmit , personalInfo}) => {
    return(
        <>
            <form className="change-inner__contacts change-contacts-inner" onSubmit={handleSubmit}>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">First name*</p>
                        <Field className="change-input" value={personalInfo.firstName} type="text" placeholder="First name" name={"firstName"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Last name*</p>
                        <Field className="change-input" value={personalInfo.lastName} type="text" placeholder="Last name" name={"lastName"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Country / Region*</p>
                        <Field className="change-input" value={personalInfo.country} type="text" placeholder="Country / Region" name={"country"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Your email*</p>
                        <Field className="change-input" value={personalInfo.email} type="text" placeholder="Your email" name={"email"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Phone*</p>
                        <Field className="change-input" value={personalInfo.phone} type="text" placeholder="Your phone" name={"phone"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Street Address*</p>
                        <Field className="change-input" value={personalInfo.streetAddress} type="text" placeholder="House number and street name" name={"streetAddress"} component={Input} validate = {required}/>
                    </label>
                </div>
                
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">City*</p>
                        <Field className="change-input" value={personalInfo.city} type="text" placeholder="Town / City" name={"city"} component={Input} validate = {required}/>
                    </label>
                </div>
                <div className="change-contacts-inner__block">
                    <label>
                        <p className="change-label">Postal Code*</p>
                        <Field className="change-input" value={personalInfo.postalCode} type="text" placeholder="Postal Code" name={"postalCode"} component={Input} validate = {required}/>
                    </label>
                </div>
                {/* <div className="change-inner__checkbox">
                    <div className="change-inner__block">
                        <Field type="checkbox"  name={"setShippingAddress"} component={Input} />
                        <label for="agree">Agree to our Terms of use and Privacy Policy </label>
                    </div>
                    <div className="change-inner__block">
                        <Field type="checkbox" name={"setBillingAddress"} component={Input}/>
                        <label for="subscribe">Subscribe to our monthly newsletter</label>
                    </div>          
                </div> */}
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
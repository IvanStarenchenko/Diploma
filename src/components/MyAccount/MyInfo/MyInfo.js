import { useState } from 'react'
import { connect } from 'react-redux'
import '../account/info/info.scss'
import Aside from '../Aside'
import MyInfoFormReduxForm from './MyInfoForm'
import { changePersonalInfo } from '../../../redux/infoReducer'
const MyInfo = ({personalInfo , changePersonalInfo}) => {
    // const [contactsDetails , setContactsDetails] = useState([
    //     {name: '' , password: '' , country: '' ,
    //     email: '' , streetAdress: '' , city:'',
    //     phone: '' , postalCode: '' , inctruction: '' }
        
    // ])
    const [editMode , setEditMode] = useState(false)

    const onSubmit = async (formData) => {
        changePersonalInfo(formData)
        setEditMode(false) 
    } 
    
    return(
        <> 
            <div className='account'>
            <div className='container'>
                <div className='account__content'>
                    <Aside contactsDetails = {personalInfo}/>     
                    { !editMode 
                    ?   <section className="account__info info-inner" id="info">
                    <h3 className="info-inner__title content-title">My Info</h3>
                    <p className="info-inner__subtitle content-subtitle">Contact Details</p>
                    <div className="info-inner__contacts contacts-inner">
                        <div className="contacts-inner__block">
                            <label>
                                <p>Your Name</p>
                                <div>{personalInfo.firstName} {personalInfo.lastName}</div>
                            </label>
                        </div>
                        <div className="contacts-inner__block">
                            <label>
                                <p>Email Address</p>
                                <div>{personalInfo.email}</div>
                            </label>
                        </div>
                        <div className="contacts-inner__block">
                            <label>
                                <p>Phone Number</p>
                                <div>{personalInfo.phone}</div>
                            </label>
                        </div>
                        <div className="contacts-inner__block">
                            <label>
                                <p>Country</p>
                                <div>{personalInfo.country}</div>
                            </label>
                        </div>
                        <div className="contacts-inner__block">
                            <label>
                                <p>Street Adress</p>
                                <div>{personalInfo.streetAddress}</div>
                            </label>
                        </div>
                        <div className="contacts-inner__block">
                            <label>
                                <p>City</p>
                                <div>{personalInfo.city}</div>
                            </label>
                        </div>
                        <div className="contacts-inner__block">
                            <label>
                                <p>Postal Code</p>
                                <div>{personalInfo.postalCode}</div>
                            </label>
                        </div>
                        <div className="contacts-inner__block">
                            <label>
                                <p>Inctruction</p>
                                <div>{personalInfo.inctruction}</div>
                            </label>
                        </div>
                        <button className='edit-button' onClick={() => {setEditMode(true)}}>Change Details</button>
                    </div>
                    <div className="info-inner__adress adress-inner">
                        <h3 className="adress-inner__title content-title">Address</h3>
                        <div className="adress-inner__group">
                            <div className="adress-inner__block">
                                <div className="adress-inner__name">Jhanvi shah</div>
                                <div className="adress-inner__number">8980252445</div>
                                <div className="adress-inner__adress">1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                    derasar, Vijaynagar road 
                                </div>
                                <div className="adress-inner__settings">
                                    <div className="adress-inner__setting">Home</div>
                                    <div className="adress-inner__setting">Default billing address</div>
                                </div>
                                <div className="adress-inner__buttons">
                                    <div className="adress-inner__button">Remove</div>
                                    <div className="adress-inner__button">Edit</div>
                                </div>
                            </div>
                            <div className="adress-inner__block adress-inner">
                                <div className="adress-inner__name">Jhanvi shah</div>
                                <div className="adress-inner__number">8980252445</div>
                                <div className="adress-inner__adress">1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                    derasar, Vijaynagar road 
                                </div>
                                <div className="adress-inner__settings">
                                    <div className="adress-inner__setting">Home</div>
                                    <div className="adress-inner__setting">Default billing address</div>
                                </div>
                                <div className="adress-inner__buttons">
                                    <div className="adress-inner__button">Remove</div>
                                    <div className="adress-inner__button">Edit</div>
                                </div>
                            </div>
                            <div className="adress-inner__block adress-inner">
                                <div className="adress-inner__name">Jhanvi shah</div>
                                <div className="adress-inner__number">8980252445</div>
                                <div className="adress-inner__adress">1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                    derasar, Vijaynagar road 
                                </div>
                                <div className="adress-inner__settings">
                                    <div className="adress-inner__setting">Office</div>
                                </div>
                                <div className="adress-inner__buttons">
                                    <div className="adress-inner__button">Remove</div>
                                    <div className="adress-inner__button">Edit</div>
                                    <div className="adress-inner__button">Set as default</div>
                                </div>
                            </div>
                            <div className="adress-inner__block adress-inner">
                                <div className="adress-inner__name">Jhanvi shah</div>
                                <div className="adress-inner__number">8980252445</div>
                                <div className="adress-inner__adress">1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                    derasar, Vijaynagar road 
                                </div>
                                <div className="adress-inner__settings">
                                    <div className="adress-inner__setting">Home2</div>
                                </div>
                                <div className="adress-inner__buttons">
                                    <div className="adress-inner__button">Remove</div>
                                    <div className="adress-inner__button">Edit</div>
                                    <div className="adress-inner__button">Set as default</div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </section>
                    :  <div className='change'><h3 className="info-inner__title content-title">My Info</h3>
                    <p className="info-inner__subtitle content-subtitle">Contact Details</p>
                    <MyInfoFormReduxForm onSubmit = {onSubmit}/></div>
                    }
                   
                    
                </div>
            </div>
        </div>
           
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        personalInfo: state.auth.userProfile
    }
}
export default connect(mapStateToProps , {changePersonalInfo})(MyInfo)
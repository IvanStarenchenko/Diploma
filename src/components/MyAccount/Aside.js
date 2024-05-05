import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { logout } from "../../redux/auth-reducer"
const Aside = (props) => {
    return(
        <div className="account__aside aside-inner">
                    <div className="info__navigation">
                        <a href="#">Home</a>
                        <a href="#">Add To Cart</a>
                        <div>Personal Info</div>
                    </div>
                        <div className="aside-inner__welcome">
                        <h3 className="aside-inner__name">Hello {props.personalInfo.firstName || 'User'}</h3>
                            <p className="aside-inner__text">Welcome to your Account</p>
                        </div>
                        <nav className="aside-inner__nav">
                            <ul className="aside-inner__list">
                                <li className="aside-inner__item" id="ordersBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M15.5833 8.39473L15.5138 7.45768C15.4501 6.59928 14.7083 5.93421 13.8146 5.93421H11.9937M5.5 17.4167H4.45365C3.465 17.4167 2.68398 16.609 2.75442 15.6594L3.36283 7.45769C3.42651 6.59928 4.16831 5.93421 5.06207 5.93421H6.88298M6.88298 5.93421V4.29385C6.88298 2.93494 8.02705 1.83333 9.43833 1.83333C10.8496 1.83333 11.9937 2.93494 11.9937 4.29385V5.93421M6.88298 5.93421H11.9937M15.5833 13.75C15.5833 14.7625 14.7625 15.5833 13.75 15.5833C12.7375 15.5833 11.9167 14.7625 11.9167 13.75M10.0833 19.25H17.4167C18.4292 19.25 19.25 18.4292 19.25 17.4167V12.8333C19.25 11.8208 18.4292 11 17.4167 11H10.0833C9.07081 11 8.25 11.8208 8.25 12.8333V17.4167C8.25 18.4292 9.07081 19.25 10.0833 19.25Z" stroke="#807D7E" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    <NavLink to = {'/Profile/Active'}>My orders</NavLink>  
                                </li>
                                <li className="aside-inner__item" id="wishlistBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99486 4.93012C8.49535 3.18261 5.99481 2.71253 4.11602 4.31273C2.23723 5.91293 1.97273 8.58839 3.44815 10.4809C4.67486 12.0545 8.38733 15.3732 9.60407 16.4473C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4473C11.6024 15.3732 15.3149 12.0545 16.5416 10.4809C18.017 8.58839 17.7848 5.8961 15.8737 4.31273C13.9626 2.72936 11.4944 3.18261 9.99486 4.93012Z" stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <NavLink to = {'/Profile/Wishlist'}>Wishlist</NavLink>                               
                                </li>
                                <li className="aside-inner__item" id="infoBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M10.0002 11.6667C12.3013 11.6667 14.1668 9.80119 14.1668 7.5C14.1668 5.19882 12.3013 3.33334 10.0002 3.33334C7.69898 3.33334 5.8335 5.19882 5.8335 7.5C5.8335 9.80119 7.69898 11.6667 10.0002 11.6667ZM10.0002 11.6667C6.31826 11.6667 3.3335 13.9052 3.3335 16.6667M10.0002 11.6667C13.6821 11.6667 16.6668 13.9052 16.6668 16.6667" stroke="#807D7E" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    <NavLink to = {'/Profile/MyInfo'}>My info</NavLink> 
                                </li>
                                <li className="aside-inner__item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M14.6667 15.5833L19.25 11M19.25 11L14.6667 6.41667M19.25 11H8.25M8.25 2.75H7.15C5.60986 2.75 4.83978 2.75 4.25153 3.04973C3.73408 3.31338 3.31338 3.73408 3.04973 4.25153C2.75 4.83978 2.75 5.60986 2.75 7.15V14.85C2.75 16.3901 2.75 17.1602 3.04973 17.7485C3.31338 18.2659 3.73408 18.6866 4.25153 18.9503C4.83978 19.25 5.60986 19.25 7.15 19.25H8.25" stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <NavLink to = {'/Main'}><button onClick={() => props.logout(null, null, false)}>Sign Out</button></NavLink> 
                                </li>
                            </ul>
                        </nav>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        personalInfo: state.auth.userProfile
    }
}
export default connect(mapStateToProps , {logout})(Aside)
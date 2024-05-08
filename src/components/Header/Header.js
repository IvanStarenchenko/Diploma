import './Header.scss'
import fav from '../../img/header/svg/heart.svg'
import { connect } from 'react-redux'
import cart from '../../img/header/svg/cart.svg'
import user from '../../img/header/svg/user.svg'
import search from '../../img/header/svg/search.svg'
import logo from '../../img/header/Logo.png'
import { NavLink } from 'react-router-dom'
import HeaderReduxForm from './HeaderForm'
import { useEffect, useState } from 'react'
import { getProductByName } from '../../redux/catalogReducer'
const Header = (props) => {
    const headerLinkItems = [
        {
            links: ['Shop', 'Men', 'Women', 'Combos', 'Joggers'],
            path: ['/Main', '/Man', '/Women', '/Women', '/Man']
        }
    ]
    const [cartCount , setCartCount] = useState(0)
    const [favCount , setFavCount] = useState(0)
    const [activeLink, setActiveLink] = useState(false)

    useEffect(() => {
        if(Array.isArray(props.cartContent) && props.cartContent.length != 0) {
            setCartCount(props.cartContent.length);
        } else {
            setCartCount(0);
        }
    }, [props.cartContent]);
    

    useEffect(() => {
        if(Array.isArray(props.favoriteContent) && props.favoriteContent.length != 0) {
            setFavCount(props.favoriteContent.length);
        } else {
            setFavCount(0);
        }
    }, [props.favoriteContent]);
    const { isLogin } = props;
    const onSubmit = (formData) => {
        console.log(formData)
        props.getProductByName(formData)
    }
    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <NavLink className="logo" to="/Main"><img src={logo} alt="" /></NavLink>

                        <nav>
                            <ul className="menu">
                                {headerLinkItems.map((item, index) => (
                                    <li key={index} onClick={() => { setActiveLink(true) }} className='menu__item'>
                                        {item.links.map((link, linkIndex) => (
                                            <NavLink key={linkIndex} className={activeLink && 'menu__item-link active' || 'menu__item-link'} to={item.path[linkIndex]}>
                                                {link}
                                            </NavLink>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="search">
                            <img src={search} alt="" />
                            <HeaderReduxForm onSubmit = {onSubmit}/>
                        </div>

                        <div className="navbar__actions actions-navbar">
                            { !isLogin
                                ?<div className='authorithation'>
                                    <NavLink to="/SignIn"><button className='login'>LogIn</button></NavLink>
                                    <NavLink to="/SignUp"><button className='signup'>Sign Up</button></NavLink>
                                 </div>
                                :<div className='actions-navbar__in'>
                                <NavLink className="actions-navbar__favorite actions-item" to = '/Profile/Wishlist'><img src={fav} alt="" /><span>{favCount === 0 ? <></> : favCount}</span></NavLink>
                                <NavLink className="actions-navbar__user actions-item" to="/Profile/Active"><img src={user} alt="" /></NavLink>
                                <NavLink className="actions-navbar__cart actions-item" to="/Cart"><img src={cart} alt="" /><span>{cartCount === 0 ? <></> : cartCount}</span></NavLink>
                                </div>
                            }
                           
                        </div>

                        <button className="burger">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        cartContent: state.cart.cartContent,
        favoriteContent: state.favorite.favoriteContent,
        isLogin: state.auth.isLogin,
    }
}

export default connect(mapStateToProps, {getProductByName})(Header)

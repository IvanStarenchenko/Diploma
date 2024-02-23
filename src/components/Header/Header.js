import './Header.scss'
import fav from '../../img/header/svg/heart.svg'
import cart from '../../img/header/svg/cart.svg'
import user from '../../img/header/svg/user.svg'
import search from '../../img/header/svg/search.svg'
import logo from '../../img/header/Logo.png'
import { NavLink } from 'react-router-dom'
import HeaderReduxForm from './HeaderForm'
import { useEffect, useState } from 'react'
const Header = () => {
    const headerLinkItems = [
        {links: ['Shop','Men','Women' ,'Combos' , 'Joggers' ],
         path: ['/Main' , '/Man' , '/Woman' , '/Woman' , '/Man']}
    ]
    const [activeLink , setActiveLink] = useState(false)

    return (
        
        <header>
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <NavLink className="logo" to="/Main"><img src = {logo} alt=""/></NavLink>
                    <nav>
                    <ul className="menu">
                        {headerLinkItems.map((item, index) => (
                            <li key={index} onClick = {() => {setActiveLink(true)}} className='menu__item'>
                                {item.links.map((link, linkIndex) => (
                                    <NavLink key={linkIndex} className= {activeLink && 'menu__item-link active' || 'menu__item-link'}  to={item.path[linkIndex]}>
                                        {link}
                                    </NavLink>
                                ))}
                            </li>
                        ))}
                    </ul>
                    </nav>
                    <div className="search">
                        <img src={search} alt=""/>
                        <HeaderReduxForm />
                    </div>
                    <div className="navbar__actions actions-navbar">
                        <NavLink className="actions-navbar__favorite"><img src= {fav} alt=""/></NavLink>
                        <NavLink className="actions-navbar__user" to="/Profile/Active"><img src={user} alt=""/></NavLink>
                        <NavLink className="actions-navbar__cart" to="/Cart"><img src={cart} alt=""/></NavLink>
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
export default Header
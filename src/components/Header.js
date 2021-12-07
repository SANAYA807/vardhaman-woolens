import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HeaderLogo from './images/headerLogo.png'
import './header.css'
import Banner from './images/banner.jpg'
const Header = () => {
    return (
        <div>
            <div className="header">

                <div className="logo">
                    <img src={HeaderLogo} alt="logo" />

                </div>
                <div className="header-right">

                    <input type="text" /><SearchIcon className="searchIcon" />

                    <PermIdentityIcon /><p>Login</p>
                    <LocalMallIcon />
                </div>


            </div>
            {/* ---------------navbar--------------- */}
            <nav>
                <div className="navbar">
                    <ul>
                        <li>HOME</li>
                        <li>HAND KNITTING YARN PRODUCTS</li>
                        <li>OFFERS</li>
                        <li>KNITTING BOOKLETS</li>
                        <li>BLOG</li>
                        <li>TRACK YOUR ORDER</li>
                    </ul>

                </div>
            </nav>
            <div className="banner">

            </div>
            {/* <img src={Banner} alt="banner" className="banner" /> */}
        </div>
    )
}

export default Header

import React from 'react';
import './header.css';

function Header() {
    return (
        <header>
            <img className="header__img--1" src={process.env.PUBLIC_URL + '/assets/img/cash-register.png'} alt="cash-register"/>
            <img className="header__img--1" src={process.env.PUBLIC_URL + '/assets/img/grocery.png'} alt="grocery"/>
        </header>
    )
}

export default Header

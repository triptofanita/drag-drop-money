import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <em>Desarrollado por Talía González</em>
            <img className="header__img--1" src={process.env.PUBLIC_URL + '/assets/img/like.svg'} alt="heart"/>
        </footer>
    )
}

export default Footer

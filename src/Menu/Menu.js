import React from 'react';
import './menu.css';
import Instructions from './Instructions';
import { useHistory } from 'react-router-dom';

function Menu() {

const history = useHistory();

const handleFirstLevel = () => {
    history.push('/firstLevel')
}

    return (
        <section class="menu__main--container"> 
            <h1 className="menu__title">Pagando en la tiendita</h1>
            <div className="menu__container">
            <Instructions/>
                <div className="menu__container--options">
                    <button onClick={handleFirstLevel} className="option first__level">Nivel 1</button>
                    <button className="option second__level">Nivel 2</button>
                    <button className="option third__level">Nivel 3</button>
                    <button className="option fourth__level">Nivel 4</button>
                </div>   
            </div>
        </section>
    )
}

export default Menu

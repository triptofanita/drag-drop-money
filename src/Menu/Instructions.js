import React from 'react';
import './menu.css';

function Instructions() {
    return (
        <section className="instructions__main--container">
            <aside className="instructions__container">
                <h3 className="instructions__container--title">Instrucciones</h3>
                <h4 className="instructions__container--subtitle">Para practicar la descomposición aditiva de un número realiza los siguientes ejercicios.</h4>
                <ul>
                    <li>Elige una opción del menú.</li>
                    <li>En cada nivel se solicita que completes la cifra indicada en la caja registradora de la tiendita. Selecciona con un click las monedas o billetes necesarios para cumplir con la cantidad.</li>
                </ul>
            </aside>
        </section>
    )
}

export default Instructions

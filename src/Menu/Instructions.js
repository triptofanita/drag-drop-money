import React from 'react';
import './menu.css';

function Instructions() {
    return (
        <section className="instructions__main--container">
            <aside className="instructions__container">
                <h3 className="instructions__container--title">Instrucciones</h3>
                <h4 className="instructions__container--subtitle">Para practicar la descomposición aditiva de un número realiza los siguientes ejercicios:</h4>
                <ul>
                    <li>Elige una opción del menú.</li>
                    <li>En cada nivel se solicita que completes la cifra indicada en la caja registradora de la tiendita. Selecciona con un click cada cantidad, arrástrala y deposítala en la caja hasta cumplir con el total solicitado.</li>
                    <li>Al concluir el depósito indicado da click en el botón "Listo" y elige un nuevo nivel</li>
                </ul>
            </aside>
        </section>
    )
}

export default Instructions

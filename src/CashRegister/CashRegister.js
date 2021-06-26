import React from 'react';
import './cashRegister.css';

function CashRegister() {
    return (
        <>
        <section>
            <div className="display__container">
                <div className="display__container--qty">$</div>
            </div>
            <div className="cashregister__container">
                <div className="ticket__container">
                    <div className="ticket__container--inside">
                        <div className="ticket__item"></div>
                        <div className="ticket__item"></div>
                        <div className="ticket__item"></div>
                        <div className="ticket__item--total">Total</div>
                    </div>
                </div>
                <div className="key__slot"></div>
                <button className="btn__submit">Listo</button>
            </div>
            <div className="cash__register--cash">
                <div className="cash__register--slot">
                    <div className="cash__register--slot--margin">
                        <div className="cash__register--small--slot"></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CashRegister

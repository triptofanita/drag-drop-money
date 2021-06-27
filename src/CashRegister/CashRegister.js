import React from 'react';
import './cashRegister.css';
import Buttons from './Buttons/Buttons';

function CashRegister() {
    return (
        <>
        <section className="cashregister__main__container">
            <div className="display__container">
                <div className="display__container--qty">$ 327.00</div>
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
                <button className="btn__submit"><b>Listo</b></button>
                <Buttons/>
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

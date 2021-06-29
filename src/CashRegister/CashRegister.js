import React from 'react';
import { useHistory } from 'react-router';
import './cashRegister.css';
import './DragAndDrop/dragAndDrop.css';
import Buttons from './Buttons/Buttons';
import DragAndDrop from './DragAndDrop/DragAndDrop';

function CashRegister() {

    const history = useHistory();
  
    const handleReturnMenu = () => {
        history.push('/')
    }

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
                <button className="btn__submit" onClick={handleReturnMenu}><b>Listo</b></button>
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
        <DragAndDrop/>
        </>
    )
}

export default CashRegister

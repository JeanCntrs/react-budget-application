import React, { Fragment, useState } from 'react';
import Error from './Error';

const Budget = (props) => {

    const { setBudget, setEnterBudget, setRemainingBudget } = props;
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const addBudget = event => {
        event.preventDefault();
        if (amount === 0 || isNaN(amount)) {
            setError(true);
        } else {
            setError(false);
            setBudget(amount);
            setRemainingBudget(amount);
            setEnterBudget(false);
        }
    }

    return (
        <Fragment>
            <h2>Ingresar tu Presupuesto</h2>
            {(error) ? <Error message='Presupuesto inválido' /> : null}
            <form onSubmit={addBudget}>
                <input className="u-full-width" type="number" placeholder="Ingresa tu presupuesto" onChange={event => setAmount(parseInt(event.target.value))}></input>
                <input className="button-primary u-full-width" type="submit" value="Definir Presupuesto"></input>
            </form>
        </Fragment>
    );
}

export default Budget;
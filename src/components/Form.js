import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = (props) => {

    const { setUnitExpense, setCreateExpense } = props;

    const [expenseName, setExpenseName] = useState('');
    const [amountExpense, setAmountExpense] = useState(0);
    const [error, setError] = useState({ state: false, message: '' });

    const addExpense = event => {
        event.preventDefault();
        if (expenseName.trim().length === 0) {
            setError({ state: true, message: 'El nombre del gasto es obligatorio' });
            return;
        } else if (amountExpense < 1 || isNaN(amountExpense)) {
            setError({ state: true, message: 'La cantidad necesaria es obligatoria' });
            return;
        } else {
            setError({ state: false, message: '' });
        }
        const expense = { expenseId: shortid.generate(), expenseName, amountExpense }
        setUnitExpense(expense);
        setCreateExpense(true);
        setExpenseName('');
        setAmountExpense('');
    }

    return (
        <form onSubmit={addExpense}>
            <h2>Añade tus gastos</h2>
            {(error.state) ? <Error message={error.message} /> : null}
            <div className="campo">
                <label>Nombre del gasto:</label>
                <input className="u-full-width" type="text" placeholder="Añade tus gastos" onChange={event => setExpenseName(event.target.value)} value={expenseName} />
            </div>
            <div className="campo">
                <label>Cantidad necesaria:</label>
                <input className="u-full-width" type="number" placeholder="Cantidad necesaria" onChange={event => setAmountExpense(parseInt(event.target.value))} value={String(amountExpense)} />
            </div>
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
        </form>
    );
}

export default Form;
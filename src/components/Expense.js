import React from 'react';

const Expense = ({ element, setIdDelete }) => {
    return (
        <li className="gastos text-center">
            <p>{element.expenseName}<span className="gasto">$ {element.amountExpense}</span></p>
            <button type="button" onClick={() => setIdDelete(element.expenseId)}>Eliminar {element.expenseName}</button>
        </li>
    );
}

export default Expense;
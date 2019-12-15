import React from 'react';
import Expense from './Expense';

const ExpensesList = ({ totalExpense, setIdDelete }) => {
    return (
        <div className="gastos-realizados">
            <h2>Lista de Gastos</h2>
            {totalExpense.map(element => <Expense key={element.expenseId} element={element} setIdDelete={setIdDelete} />)}
        </div>
    );
}

export default ExpensesList;
import React, { useState, useEffect } from 'react';
import Budget from './components/Budget';
import Form from './components/Form';
import ExpensesList from './components/ExpensesList';
import RemainingBudget from './components/RemainingBudget';

function App() {

  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [createExpense, setCreateExpense] = useState(false);
  const [enterBudget, setEnterBudget] = useState(true);
  const [unitExpense, setUnitExpense] = useState({});
  const [totalExpense, setTotalExpense] = useState([]);
  const [idDelete, setIdDelete] = useState(0);

  useEffect(() => {
    if (createExpense) {
      const addExpense = [...totalExpense, unitExpense];
      setTotalExpense(addExpense);
      const totalRemaining = remainingBudget - unitExpense.amountExpense;
      setRemainingBudget(totalRemaining);
      setCreateExpense(false);
    }
  }, [createExpense, remainingBudget, totalExpense, unitExpense]);

  useEffect(() => {
    if (idDelete !== 0) {
      const element = totalExpense.filter(element => element.expenseId === idDelete).map(element => element.amountExpense);
      const newRemainingBudget = remainingBudget + element[0];
      setRemainingBudget(newRemainingBudget);
      const newTotalExpense = totalExpense.filter(element => element.expenseId !== idDelete);
      setTotalExpense(newTotalExpense);
    }
  }, [idDelete]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {(enterBudget)
            ?
            <Budget setBudget={setBudget} setEnterBudget={setEnterBudget} setRemainingBudget={setRemainingBudget} />
            :
            <div className="row">
              <div className="one-half column">
                <Form setUnitExpense={setUnitExpense} setCreateExpense={setCreateExpense} />
              </div>
              <div className="one-half column">
                <ExpensesList totalExpense={totalExpense} setIdDelete={setIdDelete} />
                <RemainingBudget budget={budget} remainingBudget={remainingBudget} />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;

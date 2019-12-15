import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';

const RemainingBudget = ({ budget, remainingBudget }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={checkBudget(budget, remainingBudget)}>
                Restante: {remainingBudget}
            </div>
        </Fragment>
    );
}

export default RemainingBudget;
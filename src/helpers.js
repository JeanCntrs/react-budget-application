export const checkBudget = (budget, remaining) => {
    let budgetClass;
    if ((budget / 4) > remaining) {
        budgetClass = 'alert alert-danger';
    } else if ((budget / 2) > remaining) {
        budgetClass = 'alert alert-warning';
    } else {
        budgetClass = 'alert alert-success';
    }
    return budgetClass;
}
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if (newBudgetValue < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending!")
            return;
        } else if (newBudgetValue > 20000){
            alert("The value cannot exceed 20000!")
            return;
        }else{
            setNewBudget(newBudgetValue);
            dispatch({
            type:'SET_BUDGET',
            payload:parseFloat(newBudgetValue),
            })
        }
        
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

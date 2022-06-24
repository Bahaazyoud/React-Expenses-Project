import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {
    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData, 
            id:Math.random().toString()
        };
        props.onAddExpenseHandler(expenseData);
        SetIsEditing(false);
    };
    const [IsEditing,SetIsEditing] = useState();
    const StartEditingHandler = () => {
        SetIsEditing(true);
    }
    const CancelFormHandler = () => {
        SetIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!IsEditing &&  <button onClick={StartEditingHandler }>Add New Expense</button>}
            {IsEditing && <ExpenseForm saveData={SaveExpenseDataHandler} onCancel={CancelFormHandler}/>}
        </div>
    );
}
export default NewExpense;
import './App.css';
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from './component/expenses';
import { useState } from 'react';
const Dummy_Expenses =[
    {id:'e1',title:'bus',amount:450,date:new Date(2021,2,28)},
    {id:'e2',title:'car',amount:550,date:new Date(2020,5,21)},
    {id:'e3',title:'bike',amount:650,date:new Date(2022,1,17)},
];
const App = () =>{
    const [expenses,SetExpenses] = useState(Dummy_Expenses);
    const AddExpenseHandler = expense => {
        SetExpenses(prevExpenses =>{
            return [expense,...expenses];
        });
    }
    return ( 
        <div>
        <NewExpense onAddExpenseHandler={AddExpenseHandler}/>
        <Expenses items={expenses}/>
        </div>
        );
}

export default App;
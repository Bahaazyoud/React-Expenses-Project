import ExpenseItem from "./expense";
import ExpenseList from "./ExpenseList";
import Card from "./Card";
import React,{useState} from 'react';
import './expenses.css';
import ExpensesFilter from "./NewExpense/ExpenseFilter";
import ExpensesChart from "./expensesChart";
const Expenses = (props) => {
    const [PreviousValue,SetNewValue] = useState('2020');
    const FilterChangeHandler = selectedYear => {
        SetNewValue(selectedYear);
    }
    const FilterYear = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === PreviousValue;
    })
    return (
        <Card className="expenses">
             <ExpensesFilter selected={PreviousValue} OnChangeFilter={FilterChangeHandler}/>
             <ExpensesChart expenses={FilterYear}/>
          <ExpenseList items={FilterYear}/>
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>     
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/> */}
        </Card>
    );
}
export default Expenses;
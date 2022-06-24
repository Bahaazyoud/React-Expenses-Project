import './ExpenseList.css'
import ExpenseItem from './expense';
const ExpenseList = (props) => {
    let ExpenseContent = <p className='expenses-list__fallback'>No Expense Found</p>;
    if( props.items.length > 0){
        ExpenseContent = props.items.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>);
    }
    return (
      <ul className='expenses-list'>
        {ExpenseContent}
      </ul>  
    );
}
export default ExpenseList;
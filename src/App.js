import './App.css';
import Expenses from './component/expenses';
const App = () =>{
    const expenses =[
        {title:'bus',amount:450,date:new Date(2021,2,28)},
        {title:'car',amount:550,date:new Date(2020,5,21)},
        {title:'bike',amount:650,date:new Date(2022,1,17)},
    ]
    return ( 
        <div>
        <p>Let's get started</p>
        <Expenses items={expenses} />
        </div>
        );
}

export default App;
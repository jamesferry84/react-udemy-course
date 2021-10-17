import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_EXPENSES = [
    {id: '1', title: 'Car Insurance', amount: 294.67, date: new Date(2021,3,10)},
    {id: '2', title: 'Home Insurance', amount: 2940.67, date: new Date(2021,2,10)},
    {id: '3', title: 'Food', amount: 400.67, date: new Date(2021,3,10)}
]

const App = () =>  {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const onAddExpenseHandler = (expenseData) => {
      setExpenses(prevExpenses => {
          return [expenseData, ...prevExpenses];
      });
    }

  return (
    <div>
        <NewExpense onAddExpense={onAddExpenseHandler}/>
        <Expenses items={expenses} />
    </div>
  );
}

export default App;

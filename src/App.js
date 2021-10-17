import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () =>  {
  const expenses = [
      {title: 'Car Insurance', amount: 294.67, date: new Date(2021,3,10)},
      {title: 'Home Insurance', amount: 2940.67, date: new Date(2021,2,10)},
      {title: 'Food', amount: 400.67, date: new Date(2021,3,10)}
  ]

    const onAddExpenseHandler = (expenseData) => {
      console.log(expenseData);
    }

  return (
    <div>
        <NewExpense onAddExpense={onAddExpenseHandler}/>
        <Expenses items={expenses} />
    </div>
  );
}

export default App;

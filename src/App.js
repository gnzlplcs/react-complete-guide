import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandle = (expense) => {
    console.log("from App component");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandle} />
      <Expenses />
    </div>
  );
}

export default App;

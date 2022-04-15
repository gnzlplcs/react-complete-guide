import ExpenseItem from "./components/ExpenseItem";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const expenses = [
    {
      title: "Toiler Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      title: "New Desk (wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={uuidv4()}
        />
      ))}
    </div>
  );
}

export default App;

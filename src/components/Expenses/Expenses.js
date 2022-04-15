import ExpenseItem from "./ExpenseItem";
import { v4 as uuidv4 } from "uuid";
import expenses from "../../data/expenses.js";
import './Expenses.css';

const Expenses = () => {
  return (
    <div className="expenses">
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
};

export default Expenses;

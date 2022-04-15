import React from "react";
import ExpenseItem from "./ExpenseItem";
import { v4 as uuidv4 } from "uuid";
import expenses from "../data/expenses";
import './Expenses.css';

const Expenses = () => {
  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={uuidv4()}
        />
      ))}
    </>
  );
};

export default Expenses;

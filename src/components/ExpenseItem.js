import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const expenseTitle = "Car Inssurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{`${days[expenseDate.getDay()]}, ${expenseDate.getDate()}th ${months[expenseDate.getMonth()]} ${expenseDate.getFullYear()}`}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

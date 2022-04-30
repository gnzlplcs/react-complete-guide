import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredByYear = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found</p>;

  if (filteredByYear.length > 0) {
    expenseContent = filteredByYear.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={uuidv4()}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterYear={selectedYearHandler}
        selected={filteredYear}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;

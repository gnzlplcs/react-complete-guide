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
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterYear={selectedYearHandler}
        selected={filteredYear}
      />
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={uuidv4()}
        />
      ))}
    </Card>
  );
};

export default Expenses;

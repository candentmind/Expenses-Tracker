import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelect={props.onYearSelect}
        selected={props.selected}
      />
      {props.items.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
};

export default Expenses;

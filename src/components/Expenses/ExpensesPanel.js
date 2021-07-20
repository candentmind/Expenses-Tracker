import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./ExpensesPanel.css";

const ExpensesPanel = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const filterByYear = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
  };
  const filteredList = props.items.filter(
    (item) => item.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="expenses-panel">
      <ExpensesFilter onYearSelect={filterByYear} selected={selectedYear} />
      <ExpensesChart expenses={filteredList} />
      <ExpensesList filteredList={filteredList} />
    </Card>
  );
};

export default ExpensesPanel;

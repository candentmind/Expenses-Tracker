import React, { useState, useEffect } from "react";
import ExpensesPanel from "./components/Expenses/ExpensesPanel";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const useSemiPersistentState = (
    key,
    initialState = "",
    reviver = (f) => f
  ) => {
    const [value, setValue] = useState(
      typeof initialState === "object"
        ? JSON.parse(localStorage.getItem(key), reviver)
        : localStorage.getItem(key) || initialState
    );

    useEffect(() => {
      if (typeof initialState === "object")
        localStorage.setItem(key, JSON.stringify(value));
      else localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
  };

  const [expenses, setExpenses] = useSemiPersistentState(
    "expensesData",
    DUMMY_EXPENSES,
    (key, value) => (key === "date" ? new Date(value) : value)
  );
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <ExpensesPanel items={expenses} />
    </div>
  );
};

export default App;

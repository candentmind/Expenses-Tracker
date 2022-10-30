import React, { useState, useEffect } from "react";
import ExpensesPanel from "./components/Expenses/ExpensesPanel";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toiletries",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Microbit",
    amount: 5000,
    date: new Date(2022, 9, 15),
  },
];

console.log(DUMMY_EXPENSES);

const App = () => {
  const useSemiPersistentState = (
    key,
    initialState = "",
    reviver = (f) => f
  ) => {
    const init = (initialState) => {
      let val;
      if (typeof initialState === "object")
        val = JSON.parse(localStorage.getItem(key), reviver);
      else if (typeof initialState === "string")
        val = localStorage.getItem(key);

      if (val) return val;
      else return initialState;
    };

    const [value, setValue] = useState(init(initialState));

    useEffect(() => {
      if (typeof value === "object")
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
  const getSelectedExpense = (expenseId) => {
    const expenseItem = expenses.find((item) => item.id === expenseId);
    console.log(expenseItem);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <ExpensesPanel items={expenses} onEditExpense={getSelectedExpense} />
    </div>
  );
};

export default App;

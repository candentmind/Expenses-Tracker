import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formIsOpen, toggleFormDisplay] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!formIsOpen && <button onClick={() => toggleFormDisplay(!formIsOpen)}>Add New Expense</button>}
      {formIsOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          formIsOpen={formIsOpen}
          onToggleFormDisplay={() => toggleFormDisplay(!formIsOpen)}
        />
      )}
    </div>
  );
};

export default NewExpense;

import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredList }) => {
  return (
    <ul className="expenses-list">
      {filteredList.length > 0 &&
        filteredList.map((item) => <ExpenseItem key={item.id} item={item} />)}
      {filteredList.length <= 0 && (
        <p style={{ color: "whitesmoke", textAlign: "center", marginTop: "0.6em" }}>
          There are no expenses in this category.
        </p>
      )}
    </ul>
  );
};

export default ExpensesList;

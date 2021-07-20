import React from 'react';
import "./ExpenseDate.css";

const getHtmlDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-us", { month: "2-digit" });
  const day = date.toLocaleString("en-us", { day: "2-digit" });

  return `${year}-${month}-${day}`;
}

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export {getHtmlDate};
export default ExpenseDate;
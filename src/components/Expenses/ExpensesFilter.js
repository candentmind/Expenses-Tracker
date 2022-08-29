import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  console.log("ExpensesFilter component is called");

  const handleYearSelection = (e) => {
    props.onYearSelect(e.target.value);
    //const selectedIndex = e.target.selectedIndex;
    //e.currentTarget.children[selectedIndex].
  };

  return (
    <div style={{ color: "white" }} className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year-filter">Filter by year</label>
        <select
          id="year-filter"
          onChange={handleYearSelection}
          value={props.selected}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ item, onEditExpense }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={item.date} />
        <div className="expense-item__description">
          <h2>{item.title}</h2>
          <div className="expense-item__price">
            <span>&#8358;</span>
            <span>{item.amount}</span>
          </div>
          <button onClick={() => onEditExpense(item.id)}>Edit expense</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

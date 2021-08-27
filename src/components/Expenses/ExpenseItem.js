import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ item }) {
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
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

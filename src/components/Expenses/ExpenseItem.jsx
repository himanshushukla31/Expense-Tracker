import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'
//Custom components do not support built in attributes like className, to show the results we have
//to add them using props in the html elements

function ExpenseItem(props) {


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.Date} />
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
      </div>
      <div className="expense-item__price">₹{props.Amount}</div>
      {/*We don't execute the function when this line is executed in the code instead we just point the
       function and only execute it once the click is dectected. Hence we don't add paranthesis*/}
    </Card>
  )
}

export default ExpenseItem;

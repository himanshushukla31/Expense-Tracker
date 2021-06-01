import { useState } from 'react'
import './ExpenseList.css'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Expense from './Expense'
import ExpenseChart from '../Expenses/ExpenseChart'

function ExpenseList(props) {
  const [pickedYear, setPickedYear] = useState('2020')
  const yearPickedHandler = (selectedYear) => {
    setPickedYear(selectedYear)
  }

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear
  })

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter select={pickedYear} yearPicked={yearPickedHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <Expense items={filteredExpenses} />
        {/* <ExpenseItem
          Title={props.expenses[0].title}
          Amount={props.expenses[0].amount}
          Date={props.expenses[0].date}
        />

        <ExpenseItem
          Title={props.expenses[1].title}
          Amount={props.expenses[1].amount}
          Date={props.expenses[1].date}
        />

        <ExpenseItem
          Title={props.expenses[2].title}
          Amount={props.expenses[2].amount}
          Date={props.expenses[2].date}
        />

        <ExpenseItem
          Title={props.expenses[3].title}
          Amount={props.expenses[3].amount}
          Date={props.expenses[3].date}
        /> */}
        {/* map(function (expense) {
        return 
      }) */}
      </Card>
    </li>
  )
}

export default ExpenseList

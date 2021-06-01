import { useState } from 'react'
import ExpenseList from './components/Expenses/ExpenseList'
import NewExpense from './components/NewExpense/NewExpense'

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Laptop',
    amount: 65000,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 47000, date: new Date(2021, 4, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 2999.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Web Hosting',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {

  const [NewExpenseList, setNewExpenseList] = useState(dummy_expenses)

  const onAddExpenseDataHandler = (expenseData) => { // getting the hold of expenseData from the newExpense component using child parent relation
    setNewExpenseList(preValue=> {
      return [ ...preValue,expenseData]
    })
  }


  return (
    <div>
      <NewExpense onAddExpenseData= {onAddExpenseDataHandler}/>
      <ExpenseList item= {NewExpenseList}/>
    </div>
  )
}

export default App
  
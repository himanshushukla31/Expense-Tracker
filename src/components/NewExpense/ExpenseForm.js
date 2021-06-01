import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState(' ')
  const [EnteredAmount, setEnteredAmount] = useState(' ')
  const [EnteredDate, setEnteredDate] = useState(' ')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault() //This functions helps us to prevent the reloading of the form when it is submitted.
    //This is pure javascript function nothing react specific.

    const enteredExpenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    }
    props.onSaveExpenseData(enteredExpenseData)

    setEnteredAmount(' ') //To clear up the value in the input once the form is submitted.
    setEnteredTitle(' ')
    setEnteredDate(' ')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
          <label>Title</label>
        </div>
        <div className="new-expense__control">
          <input
            type="number"
            value={EnteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
          <label>Amount</label>
        </div>
        <div className="new-expense__control">
          <input
            type="date"
            value={EnteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
          <label>Date</label>
        </div>
        <div className="new-expense__actions">
          <button type="Button" onClick={props.onCancelClick}>Cancel</button> {/*In order to execute the function in parent component we have to pass the pointer to the function using props in the child component*/}
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm

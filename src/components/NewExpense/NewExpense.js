import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense= (props)=> {

      const [addNewExpenseButton,setAddNewExpenseButton] = useState(true); //Defined the state to keep track of the changes when buttons are clicked

        const onSaveExpenseDataHandler = (enteredExpenseData) => {
          const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
          };
          props.onAddExpenseData(expenseData);
          setAddNewExpenseButton(true); //It is added to make sure that when we submit the form, the form get replaced by button again
        };

        const addNewExpenseClickHandler = () => {
          setAddNewExpenseButton(preValue=> {
            return !preValue
          })
        }
    
        if (addNewExpenseButton) { //We can use return statement in the if state if we want to execute a totally different jsx code when a particular condition is met.
          //For partial rendering or rendering a particular part of jsx code when a particular condition is true we can use && syntax i.e conditional rendering.
          return <div className="new-expense">
           <button onClick={addNewExpenseClickHandler}>Add New Expense</button> 
           </div>
        }


    return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancelClick={addNewExpenseClickHandler}/>
    {/* Herer we have passed the pointer in the child component and now we can access the funtion in the child component*/}
    </div>
}

export default NewExpense;
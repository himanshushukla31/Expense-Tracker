import "./ExpenseDate.css"

function ExpenseDate(props) {

      //toLocaleDateString takes in two parameters, locale(language) and options(specification of the format)
    const month = props.date.toLocaleString('en-US',{month: 'long'}) //Only use curly braces for the props when using it to display a value in html
    const day = props.date.toLocaleString('en-US',{month: '2-digit'})
    const year = props.date.getFullYear();

    return (
     <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    )
}

export default ExpenseDate;
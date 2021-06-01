import './Card.css'

function Card(props) {
  const classes =  "card " + props.className   //Add class to the div using props property
  return <div className={classes}>{props.children}</div>  //props.children is inbuilt props feature used to create reuseable wrapping components
}
export default Card

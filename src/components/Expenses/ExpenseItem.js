import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props) {
  function clickHandler() {
    console.log('Clicked!!');
  }

  function deleteBtn() {
    console.log('Expense Deleted!!!');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h2>{props.store}</h2>
            <div className='expense-item__price'>Rs {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteBtn}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;

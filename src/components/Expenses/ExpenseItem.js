// import React, {useState} from 'react';
// import './ExpenseItem.css';
// import ExpenseDate from './ExpenseDate';
// import ExpenseDetails from './ExpenseDetails';
// import Card from '../UI/Card';

// function ExpenseItem(props) {
//   const [title, setTitle] = useState(props.title);
//   const [amount, setAmount] = useState(props.amount);

//   function clickHandler() {
//     setTitle('Updated');
//     console.log('Clicked!!');
//   }

//   function updateAmount() {
//     setAmount('100');
//   }

//   function deleteBtn() {
//     console.log('Expense Deleted!!!');
//   }
//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date}/>
//       <div className='expense-item__description'>
//             <h2>{title}</h2>
//             <h2>{props.store}</h2>
//             <div className='expense-item__price'>Rs {amount}</div>
//       </div>
//       <button onClick={updateAmount}>Update Amount</button>
//       <button onClick={clickHandler}>Change Title</button>
//       <button onClick={deleteBtn}>Delete Expense</button>
//     </Card>
//   );
// }

// export default ExpenseItem;


import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
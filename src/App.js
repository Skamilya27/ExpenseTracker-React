import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <tr>
        <td>Food</td>
        <td>Rs</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Petrol</td>
        <td>Rs</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Movies</td>
        <td>Rs</td>
        <td>200</td>
      </tr>
    </div>
  );
}

export default App;

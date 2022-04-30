import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState(' ');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  return (
    <div>
      <form action='submit'>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor=''>Title</label>
            <input type='text' onChange={titleChangeHandler} />
          </div>
          <div className='new-expense__control'>
            <label htmlFor=''>Amount</label>
            <input type='number' onChange={amountChangeHandler} min='0.01' step='0.01' />
          </div>
          <div className='new-expense__control'>
            <label htmlFor=''>Date</label>
            <input type='date' onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

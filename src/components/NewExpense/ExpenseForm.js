import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(' ');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    console.log(expenseData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action='submit'>
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

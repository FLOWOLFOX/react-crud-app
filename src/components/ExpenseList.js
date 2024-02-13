import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({initialExpenses, handleDelete}) => {
  return (
    <>
      <ul className='list'>
        {initialExpenses.map(expense => {
          return (
            <ExpenseItem key={expense.id} expense={expense} 
              handleDelete={handleDelete}
            />
          )
        })}
        </ul>
        <button className='btn'>
          목록 지우기
        </button>
    </>
  )
}

export default ExpenseList
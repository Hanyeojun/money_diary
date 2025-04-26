import React, { useEffect, useState } from 'react'
import './IncomeExpense.css'

const IncomeExpense = () => {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('transaction')) || []
    const incomeTotal = stored
      .filter(item => item.type === 'income')
      .reduce((acc, curr) => acc + curr.money, 0)
    const expenseTotal = stored
      .filter(item => item.type === 'expense')
      .reduce((acc, curr) => acc + curr.money, 0)

    setIncome(incomeTotal)
    setExpense(expenseTotal)
  }, [])

  return (
    <div className="incomeExpense-con">
      <div className="income-con">
        <h2>수입</h2>
        <div>￦{income}</div>
      </div>
      <div className="expense-con">
        <h2>지출</h2>
        <div>￦{expense}</div>
      </div>
    </div>
  )
}

export default IncomeExpense

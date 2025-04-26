import React, { useEffect, useState } from 'react'
import './Balance.css'

const Balance = () => {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem('transaction')) || []

    let income = 0
    let expense = 0

    transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        income += transaction.money
      } else {
        expense += Math.abs(transaction.money)
      }
    })

    setBalance(income - expense)
  }, [])
  return (
    <div className="balance-con">
      <div id="balTitle">잔액</div>
      <div id="bal">￦{balance}</div>
    </div>
  )
}

export default Balance

import React from 'react'
import Balance from '../components/Balance'
import IncomeExpense from '../components/IncomeExpense'
import AddTransaction from '../components/AddTransaction'
import Breakdown from '../components/Breakdown'
import './MainPage.css'

const MainPage = () => {
  return (
    <main>
      <h1>용돈기입장</h1>
      <div className="grid-con">
        <Balance />
        <IncomeExpense />
        <AddTransaction />
        <Breakdown />
      </div>
    </main>
  )
}

export default MainPage

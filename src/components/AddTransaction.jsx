import React, { useState } from 'react'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [money, setMoney] = useState('')
  const [type, setType] = useState('income')

  const handleSubmit = e => {
    e.preventDefault()

    const transaction = {
      text,
      money: type === 'expense' ? -Math.abs(parseInt(money)) : Math.abs(parseInt(money)),
      type,
    }

    const saved = JSON.parse(localStorage.getItem('transaction')) || []
    const updated = [...saved, transaction]
    localStorage.setItem('transaction', JSON.stringify(updated))

    setText('')
    setMoney('')
    setType('income')
  }

  return (
    <div>
      <h2>새로운 거래 추가</h2>
      <form onSubmit={handleSubmit}>
        <div>텍스트</div>
        <input
          type="text"
          value={text}
          placeholder="내용 입력..."
          onChange={e => setText(e.target.value)}
        />
        <div>
          <input
            type="radio"
            name="transaction"
            value="income"
            checked={type === 'income'}
            onChange={() => setType('income')}
          />
          수입
          <input
            type="radio"
            name="transaction"
            value="expense"
            checked={type === 'expense'}
            onChange={() => setType('expense')}
          />
          지출
        </div>
        <input
          type="text"
          value={money}
          placeholder="금액 입력..."
          onChange={e => setMoney(e.target.value)}
        />
        <button type="submit">거래 추가</button>
      </form>
    </div>
  )
}

export default AddTransaction

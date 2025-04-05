import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'

function Dashboard() {
  const [purchases, setPurchases] = useState([]);
  const [purchaseName, setPurchaseName] = useState('');
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [purchaseCategory, setPurchaseCategory] = useState('');

  const addPurchase = () => {
    setPurchases(prevPurchases => [...prevPurchases, {
      name: purchaseName,
      amount: purchaseAmount,
      category: purchaseCategory
    }])
    console.log(purchases)
  }


  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h1 className='app-title'>TrackExpense</h1>
      </div>
      <div className='dashboard-body'>
        <div className="container">
          <div className='input-box'>
            <input className='name-input' value={purchaseName} onChange={(e) => setPurchaseName(e.target.value)}></input>
            <input className='amount-input' value={purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)}></input>
            <input className='category-input' value={purchaseCategory} onChange={(e) => setPurchaseCategory(e.target.value)}></input>
          </div>
        </div>
        <button className='add-purchase-button' onClick={addPurchase}>Add a Purchase</button>
      </div>
    </div>
  )
}

export default Dashboard
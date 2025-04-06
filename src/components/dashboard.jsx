import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'

function Dashboard() {
  const [purchases, setPurchases] = useState([]);
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [purchaseCategory, setPurchaseCategory] = useState('Groceries');
  let [total, setTotal] = useState(0);
  
  const groceryPurchases = purchases.filter(p => p.category === 'Groceries');
  const rentPurchases = purchases.filter(p => p.category === 'Rent'); 
  const transportationPurchases = purchases.filter(p => p.category === 'Transportation');
  const entertainmentPurchases = purchases.filter(p => p.category === 'Entertainment');
  const shoppingPurchases = purchases.filter(p => p.category === 'Shopping');
  const miscellaneousPurchases = purchases.filter(p => p.category === 'Miscellaneous');

  useEffect(() => {
    const storedPurchases = localStorage.getItem('purchases');
    if (storedPurchases) {
      try {
        setPurchases(JSON.parse(storedPurchases)); 
      } catch (e) {
        console.error("Error parsing purchases from localStorage:", e);
      }
    }
  }, []);


  const addPurchase = () => {
    if (purchaseAmount === '') {
      alert('Amount is required')
    } else {
      const newPurchases = {
        amount: purchaseAmount,
        category: purchaseCategory
      };
      setPurchases(prevPurchases => {
        const updatedPurchases = [...prevPurchases, newPurchases];
        localStorage.setItem('purchases', JSON.stringify(updatedPurchases)); 
        return updatedPurchases; 
      });
    }
    setPurchaseAmount('');
  }

  
  useEffect(() => {
    const newTotal = purchases.reduce((sum, purchase) => Number(sum) + Number(purchase.amount), 0);
    setTotal(newTotal);  
  }, [purchases]);

  const resetPurchases = () => {
    setPurchases([]);
    localStorage.removeItem('purchases')
  }

  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h1 className='app-title'>TrackExpense</h1>
        <button className='clear-button' onClick={resetPurchases}>Clear History</button>
      </div>
      <div className='dashboard-body'>
        <div className="container">
          <div className='input-box'>
            <h3>Amount</h3>
            <input className='amount-input'  value={purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)}></input>
            <h3>Category</h3>
            <select className='select-dropdown' value={purchaseCategory} onChange={(e) => setPurchaseCategory(e.target.value)}>
              <option className='option-dropdown'>Groceries</option>
              <option className='option-dropdown'>Rent</option>
              <option className='option-dropdown'>Transportation</option>
              <option className='option-dropdown'>Entertainment</option>
              <option className='option-dropdown'>Shopping</option>
              <option className='option-dropdown'>Miscellaneous</option>
            </select>
          </div>
        </div>
        <button className='add-purchase-button' onClick={() => {addPurchase()}}>Add a Purchase</button>
        <h3>Total Spending: ${total}</h3>
        <div className='category-cards'>
          <div className='groceries-card'>
            <ul>
              <h3>Grocery</h3>
              {groceryPurchases.map((purchase, index) => {
                return (
                <li key={index}>
                  ${purchase.amount}
                </li>
                );
              })}
            </ul>  
          </div>
          <div className='rent-card'>
            <ul>
              <h3>Rent</h3>
              {rentPurchases.map((purchase, index) => {
                return (
                <li key={index}>
                  ${purchase.amount}
                </li>
                );
              })}
            </ul>  
          </div>
          <div className='transportation-card'>
            <ul>
              <h3>Transportation</h3>
              {transportationPurchases.map((purchase, index) => {
                return (
                <li key={index}>
                  ${purchase.amount}
                </li>
                );
              })}
            </ul>  
          </div>
          <div className='entertainment-card'>
            <ul>
              <h3>Entertainment</h3>
              {entertainmentPurchases.map((purchase, index) => {
                return (
                <li key={index}>
                  ${purchase.amount}
                </li>
                );
              })}
            </ul>  
          </div>
          <div className='shopping-card'>
            <ul>
              <h3>Shopping</h3>
              {shoppingPurchases.map((purchase, index) => {
                return (
                <li key={index}>
                  ${purchase.amount}
                </li>
                );
              })}
            </ul>  
          </div>
          <div className='miscellaneous-card'>
            <ul>
              <h3>Miscellaneous</h3>
              {miscellaneousPurchases.map((purchase, index) => {
                return (
                <li key={index}>
                  ${purchase.amount}
                </li>
                )
              })}
            </ul>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
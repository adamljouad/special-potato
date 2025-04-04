import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [correctUsername, setCorrectUsername] = useState('adamljouad');
  const [correctPassword, setCorrectPassword] = useState('1234');


  return (
    <>
      <h1>Expense Tracker</h1>   
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'


function Login() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [correctUsername] = useState('adamljouad');
  const [correctPassword] = useState('1234');
  const [loginWrong, setLoginWrong] = useState('')

  const navigate = useNavigate()

  const tryLogin = () => {
    if (inputUsername === correctUsername && inputPassword === correctPassword) {
      console.log('Hello World')
      navigate('/dashboard')
    } else {
      setLoginWrong('❌ Password o Username errati')
    }
  }

  return (
    <div className='login-body'>
      <h1>Expense Tracker</h1>
      <h2>Login</h2>
      <input value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}></input>
      <div>
      <input type='password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}></input>   
      </div>
      <button onClick={tryLogin} className='login-button'>Login</button>
      <p>{loginWrong}</p>
    </div>
  )
}

export default Login

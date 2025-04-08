import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'


function Login() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [correctUsername1] = useState('adamljouad');
  const [correctPassword1] = useState('1234');
  const [correctUsername2] = useState('valerio');
  const [correctPassword2] = useState('1234');
  const [loginWrong, setLoginWrong] = useState('')

  const navigate = useNavigate()

  const tryLogin = () => {
    if (inputUsername === correctUsername1 && inputPassword === correctPassword1) {
      localStorage.setItem('currentUser', correctUsername1);
      navigate('/dashboard')
    } else if (inputUsername === correctUsername2 && inputPassword === correctPassword2) {
      localStorage.setItem('currentUser', correctUsername2)
      navigate('/dashboard')
    }
  }

  return (
    <div className='login-body'>
      <h1 className='title'>Expense Tracker</h1>
      <h2>Login</h2>
      <input value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}></input>
      <div>
      <input type='password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}></input>   
      </div>
      <button onClick={tryLogin} className='login-button'>Login</button>
      <h3>{loginWrong}</h3>
    </div>
  )
}

export default Login

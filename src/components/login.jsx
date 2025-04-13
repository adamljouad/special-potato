import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'


function Login() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [loginWrong, setLoginWrong] = useState('')

  const navigate = useNavigate()

  const tryLogin = async() => {
      const res = await fetch('https://trackexpense-indol.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          username: inputUsername,
          password: inputPassword
        })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('currentUser', inputUsername)
        console.log("Login Effettuato", data.message, {inputUsername})
        setLoginWrong('Login Effettuato con Successo, reindirizzamento...')
        setTimeout(() => {
          navigate('/dashboard')
        }, 1000)
      } else {
        setLoginWrong(data.message)
        console.log('Errore Login', data.message);
      }
    };

  return (
    <div className='login-body'>
      <h1 className='title'>Expense Tracker</h1>
      <h2>Login</h2>
      <input className='username-input'value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}></input>
      <div>
      <input className='password-input' type='password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}></input>   
      </div>
      <div className='button-container'>
        <button onClick={tryLogin} className='login-button'>Login</button>
        <button className='register-button' onClick={() => navigate('/register')}>Register</button>
      </div>
      <h3>{loginWrong}</h3>
    </div>
  )
}

export default Login

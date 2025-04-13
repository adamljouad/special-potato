import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [registerError, setRegisterError] = useState('')

  const navigate = useNavigate()

  const register = async () => {
    const res = await fetch('https://trackexpense-indol.vercel.app/register', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        username: inputUsername,
        password: inputPassword
      })
    })
    const data = await res.json();
    console.log(data.userExists)
    
    if (data.userExists) {
      setRegisterError('Nome Utente già preso')
    } else {
      setRegisterError('Registrato con successo✅')
      navigate('/login');
    }
  }

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <input
        className="register-input"
        type="text"
        placeholder="Username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <input
        className="register-input"
        type="password"
        placeholder="Password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <button className="register-button" onClick={register}>Create Account</button>
      <p>Already have an account? <a href='/login'>Sign in</a></p>
      <h2>{registerError}</h2>
    </div>
  );
}

export default Register;

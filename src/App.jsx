import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';  // Modifica in base alla tua struttura
import Dashboard from './components/dashboard';  // Modifica in base alla tua struttura
import Register from './components/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
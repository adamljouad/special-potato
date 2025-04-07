import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';  // Modifica in base alla tua struttura
import Dashboard from './components/dashboard';  // Modifica in base alla tua struttura

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
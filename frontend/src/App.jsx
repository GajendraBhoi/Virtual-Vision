import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import TrySimulationPage from './pages/TrySimulationPage';
import HomePage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/try" element={<TrySimulationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

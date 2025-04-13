import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import TrySimulationPage from './pages/TrySimulationPage';
import HomePage from './pages/Homepage';
import Support from './pages/Support';
import ObjectDetector from './pages/ObjectDetector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/try" element={<TrySimulationPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/objectDetector" element={<ObjectDetector />} />
      </Routes>
    </Router>
  );
}

export default App;

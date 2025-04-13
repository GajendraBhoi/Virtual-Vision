import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import TrySimulationPage from './pages/TrySimulationPage';
import HomePage from './pages/Homepage';
import Support from './pages/Support';
import ObjectDetector from './pages/ObjectDetector';
import ToolsPage from './pages/Tools/ToolsPage';
import LocationPage from './pages/Tools/LocationPage';
import BarcodeScannerPage from './pages/Tools/BarcodeScannerPage';
import OCRPage from './pages/Tools/OCRPage';
import FaceRecognitionPage from './pages/Tools/FaceRecognitionPage';

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
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/BarcodeScannerPage" element={<BarcodeScannerPage />} />
        <Route path="/OCRPage" element={<OCRPage />} />
        <Route path="/FaceRecognitionPage" element={<FaceRecognitionPage />} />
      </Routes>
    </Router>
  );
}

export default App;

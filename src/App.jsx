import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RoomDashboard from './pages/RoomDashboard';
import Analytics from './pages/Analytics';
import FutureScope from './pages/FutureScope';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/room/:id" element={<RoomDashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/future" element={<FutureScope />} />
      </Routes>
    </Router>
  );
}

export default App;
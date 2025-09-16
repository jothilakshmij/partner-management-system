import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Overview from './pages/Overview';
import Partners from './pages/Partners';
import Approvals from './pages/Approvals';
import Devices from './pages/Devices';
import Security from './pages/Security';
import Communication from './pages/Communication';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="partners" element={<Partners />} />
            <Route path="approvals" element={<Approvals />} />
            <Route path="devices" element={<Devices />} />
            <Route path="security" element={<Security />} />
            <Route path="communication" element={<Communication />} />
          </Route>
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

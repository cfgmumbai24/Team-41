import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VolunteerPage from './volunteerpage';
import BuyPage from './components/BuyPage';
import BeneficiaryProfile from './components/BeneficiaryProfile';
import VendorApp from './vendorpage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/buypage" element={<BuyPage />} />
        <Route path="/vendor" element={<VendorApp />} />
        {/* Other routes */}
        <Route
            path="/beneficiary/:id"
            element={<BeneficiaryProfile />}
          />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";

import DisplayOwnerViewPage from "./pages/ownerViewPage";
import DisplayEmployeeViewPage from "./pages/employeeViewPage";
import DisplayDriverViewPage from "./pages/driverViewPage";
import DisplayLocationViewPage from "./pages/locationViewPage";
import DisplayProductViewPage from "./pages/productViewPage";
import DisplayServiceViewPage from "./pages/serviceViewPage";

import AddOwnerPage from './pages/AddOwnerPage';
import StartFundingPage from './pages/StartFundingPage';

import AddEmployeePage from './pages/AddEmployeePage';
import HireEmployeePage from './pages/HireEmployeePage';
import FireEmployeePage from './pages/FireEmployeePage';

import AddDriverPage from './pages/AddDriverPage';
import RemoveDriverRolePage from './pages/RemoveDriverRolePage';

import AddWorkerRolePage from './pages/AddWorkerRolePage';

import AddProductPage from './pages/AddProductPage';
import PurchaseProductPage from './pages/PurchaseProductPage';
import RemoveProductPage from './pages/RemoveProductPage';

import AddVanPage from './pages/AddVanPage';
import TakeoverVanPage from "./pages/TakeoverVanPage";
import LoadVanPage from './pages/LoadVanPage';
import RefuelVanPage from './pages/RefuelVanPage';
import DriveVanPage from './pages/DriveVanPage';
import RemoveVanPage from './pages/RemoveVanPage';

import AddBusinessPage from './pages/AddBusinessPage';

import AddServicePage from './pages/AddServicePage';
import ManageServicePage from './pages/ManageServicePage';

import AddLocationPage from './pages/AddLocationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owners-view" element={<DisplayOwnerViewPage />} />
        <Route path="/employees-view" element={<DisplayEmployeeViewPage />} />
        <Route path="/drivers-view" element={<DisplayDriverViewPage />} />
        <Route path="/locations-view" element={<DisplayLocationViewPage />} />
        <Route path="/products-view" element={<DisplayProductViewPage />} />
        <Route path="/services-view" element={<DisplayServiceViewPage />} />
        
        <Route path="/add-owner" element={<AddOwnerPage />} />
        <Route path="/start-funding" element={<StartFundingPage />} />

        <Route path="/add-employee" element={<AddEmployeePage />} />
        <Route path="/hire-employee" element={<HireEmployeePage />} />
        <Route path="/fire-employee" element={<FireEmployeePage />} />
        
        <Route path="/add-driver-role" element={<AddDriverPage />} />
        <Route path="/remove-driver-role" element={<RemoveDriverRolePage />} />

        <Route path="/add-worker-role" element={<AddWorkerRolePage />} />

        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/purchase-product" element={<PurchaseProductPage />} />
        <Route path="/remove-product" element={<RemoveProductPage />} />

        <Route path="/add-van" element={<AddVanPage />} />
        <Route path="/takeover-van" element={<TakeoverVanPage />} />
        <Route path="/load-van" element={<LoadVanPage />} />
        <Route path="/refuel-van" element={<RefuelVanPage />} />
        <Route path="/drive-van" element={<DriveVanPage />} />
        <Route path="/remove-van" element={<RemoveVanPage />} />

        <Route path="/add-business" element={<AddBusinessPage />} />

        <Route path="/add-service" element={<AddServicePage />} />
        <Route path="/manage-service" element={<ManageServicePage />} />

        <Route path="/add-location" element={<AddLocationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
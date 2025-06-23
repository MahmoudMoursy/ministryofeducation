import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Homee from './pages/Homee';
import Childhood from './pages/Childhood';
import PrimaryBoys from './pages/PrimaryBoys';
import PrimaryGirls from './pages/PrimaryGirls';
import Secondary from './pages/Secondary';
import Boys from './pages/ChillBoys';
import Girls from './pages/ChildGirls';
import DataPage from './pages/DataPage';
import Primary from './pages/Primary';
import SecBoys from './pages/SecBoys';
import SecGirls from './pages/SecGirls';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RegionSelect from './pages/RegionSelect';
import StageSelect from './pages/StageSelect';
import GenderSelect from './pages/GenderSelect';
import SchoolsList from './pages/SchoolsList';
import TestData from './pages/TestData';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <BrowserRouter>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/region" element={<RegionSelect />} />
        <Route path="/gender/:region" element={<GenderSelect />} />
        <Route path="/stage/:region/:gender" element={<StageSelect />} />
        <Route path="/schools/:region/:stage/:gender" element={<SchoolsList />} />
        <Route path="/test" element={<TestData />} />
        <Route path="/data/:id" element={<DataPage />} />
        <Route path="/childhood" element={<Childhood />} />
        <Route path="/primary" element={<Primary />} />
        <Route path="/secondary" element={<Secondary />} />
        <Route path="/childhood/boys" element={<Boys />} />
        <Route path="/childhood/girls" element={<Girls />} />
        <Route path="/primary/boys" element={<PrimaryBoys />} />
        <Route path="/primary/girls" element={<PrimaryGirls />} />
        <Route path="/secondary/boys" element={<SecBoys />} />
        <Route path="/secondary/girls" element={<SecGirls />} />
        <Route path="/girls" element={<Girls />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

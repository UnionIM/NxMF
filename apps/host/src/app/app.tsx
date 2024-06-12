import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../componentns/Login';
import Home from '../pages/Home';
import { NavBar } from './styled';

const Dashboard = React.lazy(() => import('dashboard/Module'));

const Invoice = React.lazy(() => import('invoice/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div>
        <Login />
        <NavBar>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/invoice">Invoice</Link>
        </NavBar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;

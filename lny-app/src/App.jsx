import { useState } from 'react'
import './assets/tailwind.css'
import Sidebar from "./layouts/Sidebar"
import Header from "./layouts/Header"
import Dashboard from "./pages/Dashboard";
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customer" element={<Customers />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default App

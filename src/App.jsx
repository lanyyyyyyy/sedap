import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import About from "./pages/guest/About";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayot")); 
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Guest = React.lazy(() => import("./pages/guest/Index"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
const Notes = React.lazy(() => import("./pages/Notes"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* Layout untuk admin / user utama */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/notes" element={<Notes />} />
        </Route>

        {/* Layout untuk auth pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Layout untuk guest */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;

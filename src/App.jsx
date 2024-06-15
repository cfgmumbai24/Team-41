import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VolunteerPage from "./volunteerpage";
import BuyPage from "./components/BuyPage";
import BeneficiaryProfile from "./components/BeneficiaryProfile";
import VendorApp from "./vendorpage";
import UserAdmin from "./useradmin";
import Dashboard from "./pages/admin/dashboard";
const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const Orders = lazy(() => import("./pages/orders"));
import Loader from "./components/Loader";
import Header from "./components/header";
import "./styles/app.scss";

//admin routes
import Products from "./pages/admin/products";
import Customers from "./pages/admin/customers";
import Transaction from "./pages/admin/transaction";
import Barcharts from "./pages/admin/charts/barcharts";
import Piecharts from "./pages/admin/charts/piecharts";
import Linecharts from "./pages/admin/charts/linecharts";
import Coupon from "./pages/admin/apps/coupon";
import Stopwatch from "./pages/admin/apps/stopwatch";
import Toss from "./pages/admin/apps/toss";
import NewProduct from "./pages/admin/management/newproduct";
import ProductManagement from "./pages/admin/management/productmanagement";
import TransactionManagement from "./pages/admin/management/transactionmanagement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/buypage" element={<BuyPage />} />
        <Route path="/vendor" element={<VendorApp />} />
        <Route path="/useradmin" element={<UserAdmin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* Other routes */}
        <Route path="/beneficiary/:id" element={<BeneficiaryProfile />} />
        <Route path="/buyerhome" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        {/* logged in user routes */}

        <Route path="/shipping" element={<Shipping />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Products />} />
        <Route path="/admin/customer" element={<Customers />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        {/* Charts */}
        <Route path="/admin/chart/bar" element={<Barcharts />} />
        <Route path="/admin/chart/pie" element={<Piecharts />} />
        <Route path="/admin/chart/line" element={<Linecharts />} />
        {/* Apps */}
        <Route path="/admin/app/coupon" element={<Coupon />} />
        <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
        <Route path="/admin/app/toss" element={<Toss />} />

        {/* Management */}
        <Route path="/admin/product/new" element={<NewProduct />} />

        <Route path="/admin/product/:id" element={<ProductManagement />} />

        <Route
          path="/admin/transaction/:id"
          element={<TransactionManagement />}
        />
      </Routes>
    </Router>
  );
};

export default App;

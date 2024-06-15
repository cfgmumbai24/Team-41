import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {lazy,Suspense } from 'react';
import Loader from "./components/Loader";
import Header from "./components/header";
import "./styles/app.scss";
import Dashboard from "./pages/admin/dashboard";



const UserAdmin = () => {
  return (
    <>
        <Header />
      <Dashboard />
      </>
  )
}

export default UserAdmin

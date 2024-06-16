import React, { useState } from 'react';
import { BiMaleFemale } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { DoughnutChart } from "../../components/admin/Charts";
import Table from "../../components/admin/DashboardTable";
import data from "../../assets/data.json";
import axios from 'axios';

const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mapData, setMapData] = useState(null); // Fetching email from localStorage

  const handleViewClick = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/users/forms');
      setMapData(response.data); // Assuming response.data is the map data returned from the server
      setIsPopupOpen(true);
    } catch (error) {
      console.error('Error fetching map data:', error);
    }
  };

  const handleCloseClick = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        <section className="widget-container">
          {/* WidgetItems here */}
        </section>

        <section className="graph-container">
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div className="list">
                  <button className="button p-3 border-2 border-black bg-slate-600 text-white flex justify-center align-center text-center text-xl w-40 h-16 mb-5 rounded-md m-auto" onClick={handleViewClick}>
                    View
                  </button>
                
            </div>
          </div>
        </section>


        {isPopupOpen && (
          <>
            <div className="popup">
              <button className="close-button" onClick={handleCloseClick}>
                &times;
              </button>
              <div className="content">
                {mapData ? (
                  <div>
                    <h3>Map Data</h3>
                    <pre>{JSON.stringify(mapData, null, 2)}</pre>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
                <div className="buttons">
                  <button className="accept-button" onClick={handleCloseClick}>Accept</button>
                  <button className="decline-button" onClick={handleCloseClick}>Decline</button>
                </div>
              </div>
            </div>
            <div className="overlay" onClick={handleCloseClick} />
          </>
        )}

      </main>
    </div>
  );
};

export default Dashboard;

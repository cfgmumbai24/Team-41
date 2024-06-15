import React, { useState } from 'react';
import { BiMaleFemale } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { BarChart, DoughnutChart } from "../../components/admin/Charts";
import Table from "../../components/admin/DashboardTable";
import data from "../../assets/data.json";

const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleViewClick = () => {
    setIsPopupOpen(true);
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
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            color="rgb(0 198 202)"
            heading="Users"
          />
          <WidgetItem
            percent={80}
            value={23000}
            color="rgb(255 196 0)"
            heading="Transactions"
          />
          <WidgetItem
            percent={30}
            value={1000}
            color="rgb(76 0 255)"
            heading="Products"
          />
        </section>

        <section className="graph-container">
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div className="list">
              {data.categories.map((item) => (
                <div className="list-item" key={item.heading}>
                  <span>{item.heading}</span>
                  <button className="button" onClick={handleViewClick}>
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={[
                "hsl(340, 82%, 56%)",
                "rgba(53, 162, 235, 0.8)",
              ]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <Table data={data.transaction} />
        </section>

        {isPopupOpen && (
          <>
            <div className="popup">
              <button className="close-button" onClick={handleCloseClick}>
                &times;
              </button>
              <div className="content">
                {/* Empty content */}
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

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `₹${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>

    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);

export default Dashboard;




import React, { useEffect, useState } from "react";
import Modal from "./modals";

const UserCard = ({ user, onClick }) => {
  return (
    <div
      className="card border-4 border-gray-200 rounded-lg p-6 shadow-lg cursor-pointer bg-slate-700 transition-all duration-300 transform hover:scale-105"
      onClick={() => onClick(user)}
    >
      <img
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s`}
        alt={user.name}
        className="w-full object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-xl font-bold text-white mb-3">{user.name}</h2>
      <p className="text-sm text-white mb-2">
        <strong className="text-white">ID:</strong> {user.id}
      </p>
      <p className="text-sm text-white mb-2">
        <strong className="text-white">Number of Goats:</strong> {user.goats_num}
      </p>
      {/* <p className="text-sm text-gray-600 mb-2">
        <strong className="text-gray-800">Breed:</strong> {user.breed}
      </p>
      <p className="text-sm text-gray-600">
        <strong className="text-gray-800">Vaccination Status:</strong> {user.vaccination_status}
      </p> */}
    </div>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const volunteerEmail = "Sincere@april.biz"; // Dummy email for testing

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        setUsers(data.filter((user) => user.email === volunteerEmail))
      );
  }, []);

  const handleCardClick = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  return (
    <div className="user-list grid gap-4 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={handleCardClick} />
      ))}
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        user={selectedUser}
      />
    </div>
  );
};

export default UserList;

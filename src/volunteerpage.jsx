import React from 'react';
import UserList from './components/userlist';

const VolunteerPage = () => {
  return (
    <div className="App text-center bg-slate-400 p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 border-b-4 border-slate-700">User List</h1>
      <UserList />
    </div>
  );
};

export default VolunteerPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/loginAdmin', formData);
      console.log('User logged in:', response.data);
      // Save the token or any necessary user data to local storage or state
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email',response.data.email);
      // Redirect to the UserAdmin page upon successful login
      navigate('/useradmin');
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-[100%] bg-white rounded-xl mx-auto shadow-lg overflow-hidden relative">
        <div className="w-full flex flex-col items-center justify-center p-12 relative">
          <div
            className="absolute w-[100%] inset-0 bg-no-repeat bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1562575214-da9fcf59b907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHx0ZWNob2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60')",
              opacity: 0.8,
              filter: 'blur(1px)',
              WebkitFilter: 'blur(1px)' // For Safari support
            }}
          ></div>
          <h1 className="text-white text-3xl mb-3 z-10"></h1>
          <div className="z-10">
            <p className="text-white">
              Admin Login
              <a href="#" className="text-purple-500 font-semibold">Learn more</a>
            </p>
          </div>
        </div>
        <div className="w-full py-16 px-12">
          <h2 className="text-3xl mb-4">Login</h2>
          <p className="mb-4">
            Log into your account
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <input 
                type="text" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                className="border border-gray-400 py-1 px-2 w-full" 
              />
            </div>
            <div className="mt-5">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                className="border border-gray-400 py-1 px-2 w-full" 
              />
            </div>
            <div className="mt-5">
              <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

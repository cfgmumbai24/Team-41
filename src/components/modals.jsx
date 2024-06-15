import React, { useState, useEffect } from 'react';

const Modal = ({ isVisible, onClose, user }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (!isVisible) {
      setLatitude(null);
      setLongitude(null);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const generateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleFormButtonClick = () => {
    setLatitude(null);
    setLongitude(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">User Information</h2>
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <div className="mb-4">
          <button
            onClick={generateLocation}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Get Current Location
          </button>
          {latitude !== null && longitude !== null && (
            <p className="mt-2 text-lg">
              Latitude: {latitude} <br/>
               Longitude: {longitude}
            </p>
          )}
        </div>
        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSelnK9IFelD52ErCjrGCehAxrupg1jmgrh5z3CveSq3QGg_mQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            onClick={handleFormButtonClick}
          >
            Open Google Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

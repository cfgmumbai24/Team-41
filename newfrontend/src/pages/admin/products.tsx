// Products.tsx

import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import axios from 'axios';

interface Map {
  id: string;
  latitude: string;
  longitude: string;
}

const Products: React.FC = () => {
  const [maps, setMaps] = useState<Map[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/volunteer/getmaps/1');
        setMaps([response.data.data]); // Assuming response.data.data is the map object
      } catch (error) {
        console.error('Error fetching maps:', error);
        setError('Error fetching maps');
      }
    };

    fetchMaps();
  }, []);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <div className="flex flex-col w-[70%] m-auto text-2xl text-center">
          {error && <p>Error fetching maps: {error}</p>}
          {maps.length === 0 && !error && <p>No maps found.</p>}
          {maps.length > 0 && (
            <div className="p-6 my-6 border-4 border-black">
              <h3>Map Details</h3>
              <p>Map ID: {maps[0].id}</p>
              <p>Latitude: {maps[0].latitude}</p>
              <p>Longitude: {maps[0].longitude}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;

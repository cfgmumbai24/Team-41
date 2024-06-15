import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import BeneficiariesList from './components/BeneficiariesList';
import Filter from './components/Filter';

const VendorApp = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const initialBeneficiaries = [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
        details: 'Details about John Doe',
        gender: 'Male',
        image: 'https://via.placeholder.com/150',
        specialStatus: 'PWD',
        documents: 'ID Card, Medical Certificate',
        goats: [
          {
            vaccination_status: "Completed",
            breed: "Boer",
            gender: "Female",
            id: 1,
            name: 'Bella',
            dateOfBirth: '2023-01-01',
            image: 'https://via.placeholder.com/200',
          },
          // More goat data
        ],
      },
      // Add more beneficiaries as needed
    ];
    setBeneficiaries(initialBeneficiaries);
    setFilteredBeneficiaries(initialBeneficiaries);
  }, []);

  useEffect(() => {
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = beneficiaries.filter(item =>
      item.name.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredBeneficiaries(filteredData);
  }, [filter, beneficiaries]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
                <h1 className="mb-4">Beneficiaries List</h1>
                <Filter filter={filter} setFilter={setFilter} />
                <BeneficiariesList beneficiaries={filteredBeneficiaries} />
      </div>
    </>
  );
};

export default VendorApp;

import React, { useState, useEffect } from 'react';
import BeneficiariesList from './BeneficiariesList';
import Filter from './Filter';

const Vendors = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch or initialize the beneficiaries list
    const initialBeneficiaries = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Michael Johnson', age: 40 },
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
    <div>
      <h1>Beneficiaries List</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <BeneficiariesList beneficiaries={filteredBeneficiaries} />
    </div>
  );
};

export default Vendors;

import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search beneficiaries"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;

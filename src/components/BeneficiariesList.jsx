import React from 'react';
import { Link } from 'react-router-dom';

const BeneficiariesList = ({ beneficiaries }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map(beneficiary => (
            <tr key={beneficiary.id}>
              <td>{beneficiary.name}</td>
              <td>{beneficiary.age}</td>
              <td>
                <Link to={`/beneficiary/${beneficiary.id}`} className="btn btn-primary">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeneficiariesList;

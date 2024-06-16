import React from 'react';
import { Link } from 'react-router-dom';

const BeneficiariesList = () => {
  const initialBeneficiaries = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      gender: 'Male',
      specialStatus: 'None',
      documents: 'ID, Birth Certificate',
      image: 'https://via.placeholder.com/200',
      goats: [
        {
          name: 'Billy',
          breed: 'Nubian',
          dateOfBirth: '2021-01-01',
          vaccination_status: 'Vaccinated',
          gender: 'Male',
          image: 'https://via.placeholder.com/200'
        },
        { 
          name: 'Billy',
          breed: 'Nubian',
          dateOfBirth: '2021-01-01',
          vaccination_status: 'Vaccinated',
          gender: 'Male',
          image: 'https://via.placeholder.com/200' 
        }
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      specialStatus: 'None',
      documents: 'ID, Birth Certificate',
      image: 'https://via.placeholder.com/200',
      goats: [
        {
          name: 'Billy',
          breed: 'Nubian',
          dateOfBirth: '2021-01-01',
          vaccination_status: 'Vaccinated',
          gender: 'Male',
          image: 'https://via.placeholder.com/200'
        }
      ],
    },
    {
      id: 3,
      name: 'Michael Johnson',
      age: 40,
      gender: 'Male',
      specialStatus: 'None',
      documents: 'ID, Birth Certificate',
      image: 'https://via.placeholder.com/200',
      goats: [
        {
          name: 'Billy',
          breed: 'Nubian',
          dateOfBirth: '2021-01-01',
          vaccination_status: 'Vaccinated',
          gender: 'Male',
          image: 'https://via.placeholder.com/200'
        }
      ],
    },
  ];
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
          {initialBeneficiaries.map(beneficiary => (
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

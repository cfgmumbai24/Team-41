import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

const BeneficiaryProfile = ({ beneficiaries }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const beneficiary = beneficiaries.find(b => b.id === parseInt(id));

  if (!beneficiary) {
    return <div>Beneficiary not found</div>;
  }

  const handleBuyClick = () => {
    navigate('/buypage');
  };

  return (
    <div className="card mt-4 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="card-body">
        <div className="flex items-center justify-between mb-4">
          <div className="w-1/4">
            <img
              src={img3}
              alt={beneficiary.name}
              className="rounded-full mb-3"
              style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="w-3/4 pl-4">
            <h2 className="text-2xl font-bold">{beneficiary.name}</h2>
            <div className="mb-2">
              <span className="inline-bloc text-black text-xs px-2 py-1 rounded-full uppercase font-semibold mr-2">
              Special Status: {beneficiary.specialStatus || 'None'}
              </span>
              <span className="text-gray-600">{beneficiary.gender}</span>
            </div>
            <div className="mb-2 text-gray-600">{beneficiary.documents}</div>
          </div>
        </div>
        <hr className="my-4" />
        <h4 className="text-xl mb-4">Goat Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {beneficiary.goats.map((goat, index) => (
            <div key={index} className="col">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={img4 || 'https://via.placeholder.com/200'}
                  alt={goat.name || 'Goat'}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h5 className="font-bold text-lg mb-2">{goat.name || `Goat ${index + 1}`}</h5>
                  <p className="text-sm mb-2"><strong>Breed:</strong> {goat.breed}</p>
                  <p className="text-sm mb-2"><strong>Date of Birth:</strong> {goat.dateOfBirth || 'Unknown'}</p>
                  <p className="text-sm mb-2"><strong>Vaccination Status:</strong> {goat.vaccination_status}</p>
                  <p className="text-sm mb-2"><strong>Gender:</strong> {goat.gender}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={handleBuyClick}>Sell</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <Link to="/vendor" className="btn btn-secondary mt-3">Back to List</Link>
      </div>
    </div>
  );
};

export default BeneficiaryProfile;

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BeneficiaryProfile = ({ beneficiaries }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const beneficiary = beneficiaries.find(b => b.id === parseInt(id));

  if (!beneficiary) {
    return <div>Beneficiary not found</div>;
  }

  const handleBuyClick = () => {
    navigate('/buy');
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <img
              src={beneficiary.image}
              alt={beneficiary.name}
              className="img-fluid rounded-circle mb-3"
              style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <h2>{beneficiary.name}</h2>
            <div className="mb-3">
              <strong>Special Status:</strong> {beneficiary.specialStatus}
            </div>
            <div className="mb-3">
              <strong>Gender:</strong> {beneficiary.gender}
            </div>
            <div className="mb-3">
              <strong>Documents:</strong> {beneficiary.documents}
            </div>
          </div>
        </div>
        <hr />
        <h4 className="mb-3">Goat Details</h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {beneficiary.goats.map((goat, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src={goat.image || 'https://via.placeholder.com/200'}
                  alt={goat.name || 'Goat'}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{goat.name || `Goat ${index + 1}`}</h5>
                  <p className="card-text"><strong>Breed:</strong> {goat.breed}</p>
                  <p className="card-text"><strong>Date of Birth:</strong> {goat.dateOfBirth || 'Unknown'}</p>
                  <p className="card-text"><strong>Vaccination Status:</strong> {goat.vaccination_status}</p>
                  <p className="card-text"><strong>Gender:</strong> {goat.gender}</p>
                  <button className="btn btn-primary mt-2" onClick={handleBuyClick}>Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <Link to="/" className="btn btn-secondary mt-3">Back to List</Link>
      </div>
    </div>
  );
};

export default BeneficiaryProfile;

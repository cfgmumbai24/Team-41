import React from 'react';

const BuyPage = () => {
    const people = [
        {
            gote_id: '0123',
            breed: 'Boer',
            vaccination_status: 'Vacinated',
            select_price_range: '1000',
            address: '123 Goat Lane, Farmville, TX',
            image_url: 'https://via.placeholder.com/150' 
        },
    ];

    return (
        <div className="p-4">
            {people.map((person) => (
                <div key={person.gote_id} className="bg-white shadow-md rounded-lg p-6 mb-6 w-64 text-left">
                    <h2 className="text-lg font-semibold text-gray-900">Selling the Goat</h2>
                    <img src={person.image_url} alt={person.breed} className="w-full h-auto mb-4 rounded"/>
                    <p className="text-sm text-gray-600"><strong>ID:</strong> {person.gote_id}</p>
                    <p className="text-sm text-gray-600"><strong>Breed:</strong> {person.breed}</p>
                    <p className="text-sm text-gray-600"><strong>Vaccination Status:</strong> {person.vaccination_status}</p>
                    <p className="text-sm text-gray-600"><strong>Selling Price:</strong> ${person.select_price_range}</p>
                    <p className="text-sm text-gray-600"><strong>Address:</strong> {person.address}</p>
                    <button className="mt-4 bg-blue-500 text-black py-2 px-4 rounded">Sell</button>
                </div>
            ))}
        </div>
    );
};

export default BuyPage;
import React, { useEffect } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToyCard = ({ toy }) => {
    const { toyId, pictureURL, toyName, price, rating, availableQuantity } = toy;
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="card w-full bg-base-100 hover:shadow-xl border border-gray-100 transition-all duration-300" data-aos="fade-up">
            <figure className="p-5">
                <img src={pictureURL} alt={toyName} className="rounded-lg object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <div className="flex justify-between w-full mt-2">
                    <p className="font-semibold">Price: ${price}</p>
                    <p className="font-semibold">Rating: {rating}⭐</p>
                </div>
                <p className="text-sm text-gray-500">Quantity: {availableQuantity}</p>
                <div className="card-actions mt-4">
                    <Link to={`/toy/${toyId}`} className="btn bg-green-400 border-0 hover:text-green-400 hover:bg-black">View More</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;
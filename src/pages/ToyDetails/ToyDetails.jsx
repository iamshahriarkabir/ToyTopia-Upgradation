import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-toastify';


const ToyDetails = () => {
    const { id } = useParams();
    const allToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const [toy, setToy] = useState(null);
    useTitle(toy ? toy.toyName : 'Toy Details');

    useEffect(() => {
        const foundToy = allToys.find(t => t.toyId.toString() === id);
        setToy(foundToy);
    }, [id, allToys]);

    if (!toy) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>;
    }

    const { pictureURL, toyName, sellerName, sellerEmail, price, rating, availableQuantity, description, subCategory } = toy;

    const handleTryNow = (event) => {
        event.preventDefault();
        toast.success(`Thank you, ${user.displayName}! Your request to try the ${toyName} has been submitted.`);
        event.target.reset();
    };

    return (
        <div className="container mx-auto my-12 p-4">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="lg:w-1/2"><img src={pictureURL} alt={toyName} className="object-contain h-full w-full p-8" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl lg:text-4xl font-bold">{toyName}</h2>
                    <p className="text-lg mt-2">{description}</p>
                    <div className="divider"></div>
                    <p><strong>Seller:</strong> {sellerName}</p>
                    <p><strong>Seller Email:</strong> {sellerEmail}</p>
                    <p><strong>Sub-category:</strong> {subCategory}</p>
                    <p><strong>Price:</strong> <span className="text-xl lg:text-2xl font-semibold text-primary">${price}</span></p>
                    <p><strong>Rating:</strong> {rating} ⭐</p>
                    <p><strong>Available Quantity:</strong> {availableQuantity}</p>
                </div>
            </div>
            
            {/* Try Now Form */}
            <div className="mt-12 p-8 bg-base-200 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold text-center mb-6">Want to Try it Now?</h3>
                <form onSubmit={handleTryNow} className="max-w-lg mx-auto">
                    <div className="form-control space-x-3">
                        <label className="label"><span className="label-text mb-2">Your Name :</span></label>
                        <input type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                    </div>
                     <div className="form-control mt-4 space-x-3">
                        <label className="label"><span className="label-text mb-2">Your Email : </span></label>
                        <input type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    </div>
                    <div className="form-control mt-6 text-center">
                        <button type="submit" className="btn px-10 bg-green-400 border-0 hover:text-green-400 hover:bg-black">Try Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ToyDetails;
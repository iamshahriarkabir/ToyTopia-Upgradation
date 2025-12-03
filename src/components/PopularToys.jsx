import React from 'react';
import ToyCard from './ToyCard';

const PopularToys = ({toys}) => {
    return (
        
            <div className="mt-16 mb-20 px-4 container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Popular Toys</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toys.slice(0, 6).map(toy => <ToyCard key={toy.toyId} toy={toy} />)}
                </div>
            </div>
        
        
    );
};

export default PopularToys;
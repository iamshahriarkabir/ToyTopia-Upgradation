import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AOS from 'aos';
import ToyCard from '../../components/ToyCard';

const MyToys = () => {
    useTitle('All Toys');
        const [toys, setToys] = useState([]);
    
        useEffect(() => {
            fetch('/toys.json')
                .then(res => res.json())
                .then(data => setToys(data));
            
            AOS.init({ duration: 1200, once: true });
        }, []);
    return (
        <div className="container mx-auto my-12 p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Toys Collection</h1>
            <p className="text-lg text-gray-600 mb-8">This is where you can view and manage the toys you have added.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toys.map(toy => <ToyCard key={toy.toyId} toy={toy} />)}
                </div>
        </div>
    );
};

export default MyToys;
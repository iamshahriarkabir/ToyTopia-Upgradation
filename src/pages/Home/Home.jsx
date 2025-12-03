import React, { useEffect, useState } from 'react';


import useTitle from '../../hooks/useTitle';
import AOS from 'aos';

import HeroSlider from '../../components/HeroSlider';
import PopularToys from '../../components/Populartoys';
import TopBrands from '../../components/TopBrands';
import Testimonial from '../../components/Testimonial'
import Specialities from '../../components/Specialities';

const Home = () => {
    useTitle('Home');
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('/toys.json')
            .then(res => res.json())
            .then(data => setToys(data));
        
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <div>
        <HeroSlider/>
        <PopularToys toys={toys}/>
        <Specialities/>
        <TopBrands/>  
        <Testimonial/>

        </div>
    );
};

export default Home;
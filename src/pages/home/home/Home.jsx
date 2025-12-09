import React from 'react';
import Bannar from '../bannar/Bannar';
import About from '../about/About';
import Package from '../packegeSection/Package';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Package></Package>
        </div>
    );
};

export default Home;
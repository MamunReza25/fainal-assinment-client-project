import React from 'react';
import Bannar from '../bannar/Bannar';
import About from '../about/About';
import Package from '../packegeSection/Package';
import FeaturesShowcase from '../featuresShowcase/FeaturesShowcase';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Package></Package>
            <FeaturesShowcase></FeaturesShowcase>
        </div>
    );
};

export default Home;
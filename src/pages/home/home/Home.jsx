import React from 'react';
import Bannar from '../bannar/Bannar';
import About from '../about/About';
import Package from '../packegeSection/Package';
import FeaturesShowcase from '../featuresShowcase/FeaturesShowcase';
import Testimoniyal from '../testimonial/Testimoniyal';
import HowItWorks from './howItWork/HowItWork';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Package></Package>
            <FeaturesShowcase></FeaturesShowcase>
            <Testimoniyal></Testimoniyal>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;
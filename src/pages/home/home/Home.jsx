import React from 'react';
import Bannar from '../bannar/Bannar';
import About from '../about/About';
import Package from '../packegeSection/Package';
import FeaturesShowcase from '../featuresShowcase/FeaturesShowcase';
import Testimoniyal from '../testimonial/Testimoniyal';
import HowItWorks from './howItWork/HowItWork';
import Faq from './faq/Faq';
import ContactCTA from '../contactCTA/ContactCTA';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Package></Package>
            <FeaturesShowcase></FeaturesShowcase>
            <Testimoniyal></Testimoniyal>
            <HowItWorks></HowItWorks>
            <Faq></Faq>
            <ContactCTA></ContactCTA>
        </div>
    );
};

export default Home;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannarimg1 from '../../../assets//corporate-1.jpg';
import bannarimg2 from '../../../assets/corporate-2.jpeg';
import bannarimg3 from '../../../assets/corporate-3.jpeg';
import bannarimg4 from '../../../assets/corporate-4.jpeg';

const Banner = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
        >
            {/* Slide 1 */}
            <div className="relative">
                <img src={bannarimg1} className="w-full h-[300px] md:h-[500px] object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>


                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                               text-gray-800 text-2xl md:text-5xl font-bold drop-shadow-lg text-center">
                    Seamless Asset Management, Maximum Business Control <br />
                    <span className='text-[18px] font-semibold text-black'>"Monitor, organize, and secure all your company assets from a single intuitive platform."</span> <br />
                    <button className='btn'>Get Started Today</button>
                </h1>

            </div>
            {/* Slide 2 */}
            <div className="relative">
                <img src={bannarimg2} className="w-full h-[300px] md:h-[500px] object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>


                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                               text-gray-800 text-2xl md:text-5xl font-bold drop-shadow-lg text-center">
                    Track, Protect, and Optimize Your Assets Effortlessly <br />
                    <span className='text-[18px] font-semibold text-black'>"Stay ahead with real-time tracking and automated asset management tools."</span> <br />
                    <button className='btn'>Explore Features</button>
                </h1>
            </div>

            {/* Slide 3 */}
            <div className="relative">
                <img src={bannarimg3} className="w-full h-[300px] md:h-[500px] object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        text-gray-800 text-2xl md:text-5xl font-bold drop-shadow-lg text-center">
                    Empowering Teams with Smart Asset Solutions <br />
                    <span className='text-[18px] font-semibold text-black'>
                        Enable your team to manage resources efficiently and make data-driven decisions
                    </span> <br />
                    <button className='btn'>Join AssetsVerse Now</button>
                </h1>
            </div>

            {/* Slide 4 */}
            <div className="relative">
                <img src={bannarimg4} className="w-full h-[300px] md:h-[500px] object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                               text-white text-2xl md:text-5xl font-bold drop-shadow-lg text-center">
                    Complete Visibility. Smarter Decisions. Stronger Growth <br />
                    <span className='text-[18px] font-semibold text-white'>
                        Gain full insight into your assets and drive business growth with confidence
                    </span> <br />
                    <button className='btn'>Request a assets</button>
                </h1>
            </div>
        </Carousel>
    );
};

export default Banner;

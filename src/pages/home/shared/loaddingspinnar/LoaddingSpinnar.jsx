import React from 'react';
import { Hourglass } from 'react-loader-spinner';

const LoaddingSpinnar = () => {
    return (
        <div className="flex justify-center items-center h-[70vh]">
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                colors={['#306cce', '#72a1ed']}
            />
        </div>
    );
};

export default LoaddingSpinnar;
import React from 'react';

const Package = () => {
    const data = [
        {
            name: "Basic",
            employeeLimit: 5,
            price: 5,
            features: ["Asset Tracking", "Employee Management", "Basic Support"]
        },
        {
            name: "Standard",
            employeeLimit: 10,
            price: 8,
            features: ["All Basic features", "Advanced Analytics", "Priority Support"]
        },
        {
            name: "Premium",
            employeeLimit: 20,
            price: 15,
            features: ["All Standard features", "Custom Branding", "24/7 Support"]
        }
    ];

    return (
        <div className='py-10'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Package</h1>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-10">

                {data.map((pkg, index) => (
                    <div
                        key={index}
                        className="card w-96 bg-base-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="card-body">

                            <span className="badge badge-xs badge-warning mb-2">Most Popular</span>

                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold">{pkg.name}</h2>
                                <span className="text-xl font-semibold">{pkg.price}$/month</span>
                            </div>

                            {/* Divider */}
                            <hr className="my-4" />

                            {/* Features */}
                            <ul className="mt-2 flex flex-col gap-2 text-sm">

                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 me-2 mt-1 text-success"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span>{feature}</span>
                                    </li>
                                ))}

                            </ul>

                            <div className="mt-6">
                                <button className="btn btn-primary btn-block">Subscribe</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Package;

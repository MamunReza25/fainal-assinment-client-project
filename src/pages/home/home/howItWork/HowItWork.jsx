import React from "react";

const HowItWorks = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    How It Works
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-14">
                    A simple 3-step process to manage assets & events smoothly with AssetVerse.
                </p>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Step 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                        <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            {/* Heroicon: User Plus */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5a3 3 0 100 6 3 3 0 000-6zM4.5 19.5a7.5 
                  7.5 0 1115 0v.75H4.5V19.5zM19.5 8.25h3m-1.5-1.5v3"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Create Your Account</h3>
                        <p className="text-gray-600">
                            Sign up and set up your company profile within minutes to access AssetVerse.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                        <div className="w-16 h-16 mx-auto mb-5 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                            {/* Heroicon: Folder */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7.5A2.25 2.25 0 015.25 5h4.086c.414 0 .81.172 1.091.477l1.232 
                  1.346c.28.305.676.477 1.091.477H18.75A2.25 2.25 0 0121 
                  9.75v7.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 
                  17.25v-9.75z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Add Assets & Events</h3>
                        <p className="text-gray-600">
                            Add your assets, employees, and event details to keep everything organized.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                        <div className="w-16 h-16 mx-auto mb-5 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                            {/* Heroicon: Chart Bar */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3v18h18M9 17V9m4 8v-5m4 5V5"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Manage & Track Easily</h3>
                        <p className="text-gray-600">
                            Monitor assets and event data in real-time with a clean dashboard.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

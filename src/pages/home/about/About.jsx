import React from "react";
import { FaFolder, FaClock, FaLock, FaChartLine } from "react-icons/fa";

const benefits = [
    {
        id: 1,
        title: "Centralized Asset Management",
        description:
            "All your company assets organized in one intuitive platform, ensuring seamless control and monitoring.",
        icon: <FaFolder className="text-4xl text-blue-600 mb-4" />,
    },
    {
        id: 2,
        title: "Real-Time Tracking & Updates",
        description:
            "Monitor asset usage and status in real-time to prevent loss and optimize efficiency.",
        icon: <FaClock className="text-4xl text-blue-600 mb-4" />,
    },
    {
        id: 3,
        title: "Enhanced Security & Compliance",
        description:
            "Protect your valuable assets with built-in security features and ensure regulatory compliance.",
        icon: <FaLock className="text-4xl text-blue-600 mb-4" />,
    },
    {
        id: 4,
        title: "Data-Driven Insights & Reporting",
        description:
            "Make smarter business decisions with comprehensive analytics and customizable reports.",
        icon: <FaChartLine className="text-4xl text-blue-600 mb-4" />,
    },
];

const About = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h4 className="des">--------- About ------</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Why Choose AssetVerse
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                        >
                            {benefit.icon}
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

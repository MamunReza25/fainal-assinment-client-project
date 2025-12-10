import React from "react";
import img1 from '../../../assets/feature-icon/tracking-icon.png'
import img2 from '../../../assets/feature-icon/employmangement-icon.png'
import img3 from '../../../assets/feature-icon/advance nalysis.png'
import img4 from '../../../assets/feature-icon/24 hour suport1.png'
import img5 from '../../../assets/feature-icon/could backup.jpg'
import img6 from '../../../assets/feature-icon/sequrity.png'
const FeaturesShowcase = () => {
    const features = [
        {
            title: "Asset Tracking",
            desc: "Monitor all company assets in real-time with smart tracking.",
            icon: img1
        },
        {
            title: "Employee Management",
            desc: "Easily manage employee profiles, roles, and permissions.",
            icon: img2

        },
        {
            title: "Advanced Analytics",
            desc: "Get detailed insights and data visualization to improve decisions.",
            icon: img3
        },
        {
            title: "24/7 Support",
            desc: "Dedicated live support for uninterrupted business operations.",
            icon: img4
        },
        {
            title: "Cloud Backup",
            desc: "Automatic cloud backup keeps your data safe and secure.",
            icon: img5
        },
        {
            title: "Security & Encryption",
            desc: "High-level encryption to keep company data protected.",
            icon: img6
        }
    ];

    return (
        <div className="py-14">
            <h1 className="text-3xl font-bold text-center">Our Explore Features</h1>
            <p className="text-center text-gray-600 mb-10">
                Powerful tools to help your business operate smoothly.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-base-100 shadow-sm rounded-xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        {/* Icon  */}
                        <div>
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-14 h-14 mb-4"
                            />
                        </div>


                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesShowcase;

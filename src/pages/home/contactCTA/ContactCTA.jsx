import React from "react";

const ContactCTA = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! (message succesfuly...)");
    };

    return (
        <section className="py-20 bg-gray-300 my-5">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Get in Touch with AssetsVerse Event Management
                </h2>
                {/* Subheading */}
                <p className="text-gray-600 mb-10">
                    Contact us directly for any questions or requests related to your event. We are available 24/7 to assist you.
                </p>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-xl shadow-lg space-y-6"
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone (Optional)"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Details */}
                    <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 text-left">
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Contact Information
                        </h3>
                        <p className="text-gray-700">
                            <strong>Email:</strong> info@assetsverse.com
                        </p>
                        <p className="text-gray-700">
                            <strong>Phone:</strong> +880 1234 567890
                        </p>
                        <p className="text-gray-700">
                            <strong>Address:</strong> Dhaka, Bangladesh
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                Facebook
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                LinkedIn
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;

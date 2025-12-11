import React from "react";

const faqs = [
    {
        question: "What is AssetVerse?",
        answer:
            "AssetVerse is a platform that helps companies manage their assets and events efficiently using a centralized dashboard.",
    },
    {
        question: "How do I add assets to the system?",
        answer:
            "After creating your account, you can easily upload assets, assign categories, and link them to employees or events.",
    },
    {
        question: "Is my company data secure?",
        answer:
            "Yes. AssetVerse uses industry-standard encryption and security practices to keep your data safe.",
    },
    {
        question: "Can I manage events using AssetVerse?",
        answer:
            "Absolutely. You can create events, assign team members, add assets, and track everything in real-time.",
    },
    {
        question: "Do you provide customer support?",
        answer:
            "Yes, our support team is available 24/7 to help you with onboarding or any platform issues.",
    },
];

const Faq = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-5xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Frequently Asked Question (FAQ)
                    </h2>
                    <p className="mt-2 text-base-content/70 px-40">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="collapse collapse-arrow bg-base-200 rounded-box"
                        >
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                {item.question}
                            </div>
                            <div className="collapse-content text-base-content/80">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;

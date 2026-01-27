import React, { useMemo, useState } from "react";

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            role: "Entrepreneur",
            location: "New York, USA",
            text:
                "The legal support I received was unparalleled. They handled my corporate merger with such precision and dedication that I felt completely at ease throughout the entire process.",
            avatar: "https://i.pravatar.cc/150?u=1",
        },
        {
            id: 2,
            name: "Grace Morgan",
            role: "Real Estate Developer",
            location: "London, UK",
            text:
                "Navigating complex property laws is never easy, but this team made it look effortless. Their attention to detail saved us months of potential delays. Truly exceptional service. Professionalism at its finest. They defended our intellectual property rights         d.",
            avatar: "https://i.pravatar.cc/150?u=2",
        },
        {
            id: 3,
            name: "Mr. Smith",
            role: "CEO, TechCorp",
            location: "Berlin, Germany",
            text:
                "Professionalism at its finest. They defended our intellectual property rights with a strategy that was both aggressive and legally sound. Professionalism at its finest. They defended our intellectual property rights with a strategy that was both aggressive and legally sound.",
            avatar: "https://i.pravatar.cc/150?u=3",
        },
        {
            id: 4,
            name: "James Walker",
            role: "Small Business Owner",
            location: "USA",
            text:
                "I was facing a difficult litigation suit that threatened my business. Their team reassured me and delivered a verdict that vindicated us completely. Professionalism at its finest. They defended our intellectual property rights with a strategy that was both aggressive and legally sound.",
            avatar: "/avatar.jpg",
        },
        {
            id: 5,
            name: "Emma Walton",
            role: "Freelance Designer",
            location: "Paris, France",
            text:
                "They helped me draft contracts that protected my creative work globally. It's rare to find lawyers who truly understand the creative industry. Professionalism at its finest. They defended our intellectual property rights with a strategy that was both aggressive and legally sound.",
            avatar: "https://i.pravatar.cc/150?u=5",
        },
    ];

    const [activeId, setActiveId] = useState(4);

    const activeReview = useMemo(
        () => reviews.find((r) => r.id === activeId),
        [activeId, reviews]
    );

    return (
        <section className="relative w-full max-w-[1920px] mx-auto px-[100px] py-[140px] bg-[#041C2C] text-center overflow-hidden mt-25">

            {/* Decorative background quote */}
            <div className="absolute bottom-[150px] right-[200px] pointer-events-none select-none">
                <svg
                    width="250"
                    height="250"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-[0.08]"
                >
                    <path
                        d="M60 40C45 55 38 72 38 95C38 118 50 130 70 130C90 130 102 118 102 98C102 78 92 66 72 66C70 66 68 66 66 67C69 58 74 51 82 43L60 40Z"
                        stroke="#BE7D60"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        d="M110 40C95 55 88 72 88 95C88 118 100 130 120 130C140 130 152 118 152 98C152 78 142 66 122 66C120 66 118 66 116 67C119 58 124 51 132 43L110 40Z"
                        stroke="#BE7D60"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-12">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#BE7D60"
                    >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                ))}
            </div>

            {/* Testimonial text */}
            <div className="max-w-[960px] mx-auto min-h-[280px] flex flex-col items-center justify-center">
                <p className="text-[28px] leading-[42px] font-['Forum'] text-white font-light mb-14">
                    “{activeReview.text}”
                </p>

                <div className="flex items-center gap-5 mb-10">
                    <img
                        src={activeReview.avatar}
                        alt={activeReview.name}
                        className="w-[64px] h-[64px] rounded-full object-cover border-2 border-[#BE7D60]"
                    />
                    <div className="text-left">
                        <p className="text-[18px] font-medium text-white font-['Forum']">
                            {activeReview.name}
                        </p>
                        <p className="text-[14px] tracking-widest text-gray-400 uppercase font-['Forum']">
                            {activeReview.location}
                        </p>
                    </div>
                </div>
            </div>

            {/* Name navigation */}
            <div className="max-w-[820px] mx-auto flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
                {reviews.map((review) => (
                    <button
                        key={review.id}
                        onClick={() => setActiveId(review.id)}
                        aria-current={activeId === review.id}
                        className={`relative pb-2 text-[18px] font-['Forum'] transition-colors ${activeId === review.id
                            ? "text-white"
                            : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        {review.name}
                        {activeId === review.id && (
                            <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-[#BE7D60]" />
                        )}
                    </button>
                ))}
            </div>

            {/* Bottom link */}
            <a
                href="#"
                className="inline-flex items-center gap-3 text-[20px] font-['Forum'] text-[#BE7D60] hover:opacity-80 transition"
            >
                Check out our people reviews
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                    <path
                        d="M1 7H17M17 7L11 1M17 7L11 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>
        </section>
    );
};

export default Testimonial;
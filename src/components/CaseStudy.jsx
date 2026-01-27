import React from "react";

const CaseStudy = () => {
    const cases = [
        {
            id: 1,
            image: "/case1.jpg",
            desc: "Strategic consolidation for global market dominance through efficient legal structuring."
        },
        {
            id: 2,
            image: "/case2.png",
            desc: "Protecting digital assets in the modern era with forward-thinking intellectual."
        },
        {
            id: 3,
            image: "/case3.jpg",
            desc: "Securing generational wealth through property with long-term legal planning."
        },
        {
            id: 4,
            image: "/case4.jpg",
            desc: "Navigating cross-border regulations and compliance for sustainable."
        }
    ];

    return (
        <section className="w-full max-w-[1920px] mx-auto py-[120px] pl-[100px] pr-[50px] bg-white">
            <h2 className="text-[48px] font-['Forum'] font-medium text-[#1A1A1A] mb-12 leading-none">
                Case Study
            </h2>

            <div className="w-[80%] ml-auto grid grid-cols-2 gap-12">
                {cases.map((item) => (
                    <div key={item.id} className="flex flex-col gap-6 group cursor-pointer">
                        <div className="relative w-full h-[450px] overflow-hidden">
                            <img
                                src={item.image}
                                alt="Case study"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 m-auto w-[85%] h-[85%] bg-black/30 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out backdrop-blur-[2px]">
                                <div className="bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20">
                                    <img
                                        src="/upArrow.png"
                                        alt="View case"
                                        className="w-8 h-8 rotate-45 invert brightness-0"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pr-10">
                            <p className="text-[26px] text-[#555] font-['Forum'] leading-[30px]">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudy;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Optional: Animate title on load or scroll
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });

            // Animate case study images
            const images = document.querySelectorAll(".case-item");
            images.forEach((img, i) => {
                gsap.from(img, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Create a pinning effect for the title section using ScrollTrigger for maximum control
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: ".case-study-left",
                pinSpacing: false, // We're handling spacing with flexbox
                markers: false
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full max-w-[1920px] mx-auto bg-white flex items-start">

            {/* Left Column: Sticky Title */}
            {/* We remove vertical padding from parent and manage it here or via triggers to ensure correct pinning height */}
            <div className="case-study-left w-[20%] h-dvh flex flex-col justify-start pt-[120px] pl-[100px] border-r border-gray-100">
                <h2 ref={titleRef} className="text-[48px] font-['Forum'] font-medium text-[#1A1A1A] leading-none whitespace-nowrap ">
                    Case Study
                </h2>
            </div>

            {/* Right Column: Scrollable Content */}
            <div className="w-[80%] py-[120px] pl-[80px] pr-[50px]">
                <div className="grid grid-cols-2 gap-12">
                    {cases.map((item) => (
                        <div key={item.id} className="case-item flex flex-col gap-6 group cursor-pointer">
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
            </div>
        </section>
    );
};

export default CaseStudy;
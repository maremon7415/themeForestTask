import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            tl.from(".about-img", {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            tl.from(".about-heading", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5");

            tl.from(".timeline-container", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const timelineData = [
        {
            year: "1971",
            title: "Founded in London",
            desc: "Established with a vision to provide accessible legal support, starting from a small office in central London."
        },
        {
            year: "1986",
            title: "Firm Expansion",
            desc: "Opened new branches across the UK, expanding our expertise into corporate and international law."
        },
        {
            year: "1991",
            title: "Landmark Victory",
            desc: "Successfully defended a major landmark case that set a precedent in property rights law for decades."
        }
    ];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % timelineData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
    };

    return (
        <div ref={containerRef} className='w-full max-w-[1920px] mx-auto min-h-screen bg-white pt-[100px] px-[100px] grid grid-cols-[0.9fr_1.1fr] gap-[60px]'>

            {/* Left Box (Images) */}
            <div className="w-full h-full relative flex flex-col justify-center items-center gap-[60px]">
                <div className="about-img w-full h-[45%] overflow-hidden">
                    <img
                        src="/about1.png"
                        alt="Law firm history"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
                <div className="about-img w-full h-[45%] overflow-hidden">
                    <img
                        src="/about2.png"
                        alt="Legal team"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
            </div>

            {/* Right Box (Content) */}
            <div className="w-full h-full flex flex-col justify-center">

                {/* Top 20% - Heading */}
                <div className="w-full max-w-[90%] h-[20%] flex items-start">
                    <h2 className="about-heading text-[48px] leading-[1.1] font-['Forum'] text-[#1A1A1A]">
                        Serving clients in every area of law since 1971 with experience and dedication.
                    </h2>
                </div>

                {/* Bottom 80% - Content + Controls */}
                <div className="timeline-container w-full h-[80%] flex border-t border-gray-100 pt-12">

                    {/* Timeline Content List */}
                    <div className="flex flex-col w-full gap-12 pr-10">
                        {timelineData.map((item, index) => (
                            <div
                                key={item.year}
                                className={`group transition-all duration-500 ease-in-out flex flex-col justify-center ${index === activeIndex
                                    ? 'opacity-100 border-r-4 border-[#BE7D60] pr-8'
                                    : 'opacity-90 grayscale border-r-4 border-transparent'
                                    }`}
                            >
                                <h4 className={`text-[70px] font-medium leading-none mb-2 transition-colors duration-300 ${index === activeIndex ? 'text-[#1A1A1A]' : 'text-gray-800'}`}>
                                    {item.year}
                                </h4>
                                <div className="flex items-center gap-4">
                                    <h5 className={`text-[36px] transition-colors duration-300 ${index === activeIndex ? 'text-[#1A1A1A]' : 'text-gray-800'}`}>
                                        {item.title}
                                    </h5>
                                    <span className={`h-px transition-all duration-500 ${index === activeIndex ? 'w-[80px] bg-[#BE7D60]' : 'w-[20px] bg-gray-300'}`}></span>
                                </div>
                                <p className={`text-[18px] leading-[1.6] transition-colors duration-300 w-[80%] ${index === activeIndex ? 'text-[#555]' : 'text-gray-800'}`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Controls Sidebar */}
                    <div className='w-[100px] h-full flex justify-center'>
                        {/* Arrows */}
                        <div className="flex flex-col gap-8 pt-4">
                            <button
                                onClick={handlePrev}
                                aria-label="Previous"
                                className="hover:opacity-60 transition-opacity duration-300 transform"
                            >
                                <img src="/upArrow.png" alt="Previous year" className="w-[40px] h-auto object-contain" />
                            </button>
                            <button
                                onClick={handleNext}
                                aria-label="Next"
                                className="hover:opacity-60 transition-opacity duration-300 transform"
                            >
                                <img src="/downArrow.png" alt="Next year" className="w-[40px] h-auto object-contain" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
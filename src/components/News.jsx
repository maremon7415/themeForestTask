import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const News = () => {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const newsData = [
        {
            id: 1,
            date: "June 2025",
            image: "/nes1.jpg",
            title: "When should you hire a lawyer? A practical guide for individuals",
            link: "#",
        },
        {
            id: 2,
            date: "May 2025",
            image: "/nes1.jpg",
            title: "Corporate law: navigating the complex regulatory landscape",
            link: "#",
        },
        {
            id: 3,
            date: "April 2025",
            image: "/nes1.jpg",
            title: "Intellectual property: protecting your creative assets globally",
            link: "#",
        },
        {
            id: 4,
            date: "March 2025",
            image: "/nes1.jpg",
            title: "Real estate dynamics: understanding new property rights",
            link: "#",
        },
        {
            id: 5,
            date: "February 2025",
            image: "/nes1.jpg",
            title: "The future of legal tech: AI in the courtroom",
            link: "#",
        },
        {
            id: 6,
            date: "January 2025",
            image: "/nes1.jpg",
            title: "Family law updates: what you need to know this year",
            link: "#",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".news-header", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(".news-card", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        gsap.to(sliderRef.current, {
            xPercent: -(currentIndex * (100 / 3)),
            duration: 0.8,
            ease: "power3.inOut",
        });
    }, [currentIndex]);

    const maxIndex = newsData.length - 3;

    return (
        <section
            ref={containerRef}
            className="w-full max-w-[1920px] mx-auto pb-25 px-[100px] bg-white overflow-hidden"
        >
            <div className="flex flex-col gap-16">

                <div className="news-header flex items-end justify-between border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-6">
                        <h2 className="text-[40px] font-['Forum'] text-[#1A1A1A] leading-none">
                            Our Recent News
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
                            disabled={currentIndex === 0}
                            className={`w-[60px] h-[60px] rounded-full border border-[#BE7D60] flex items-center justify-center transition ${currentIndex === 0
                                ? "opacity-40 cursor-not-allowed"
                                : "hover:bg-[#BE7D60]"
                                } group`}
                        >
                            <img
                                src="/upArrow.png"
                                alt="Previous"
                                className="w-5 h-5 -rotate-90 brightness-0 group-hover:invert transition"
                            />
                        </button>

                        <button
                            onClick={() =>
                                setCurrentIndex((i) => Math.min(i + 1, maxIndex))
                            }
                            disabled={currentIndex === maxIndex}
                            className={`w-[60px] h-[60px] rounded-full border border-[#BE7D60] flex items-center justify-center transition ${currentIndex === maxIndex
                                ? "opacity-40 cursor-not-allowed"
                                : "hover:bg-[#BE7D60]"
                                } group`}
                        >
                            <img
                                src="/upArrow.png"
                                alt="Next"
                                className="w-5 h-5 rotate-90 brightness-0 group-hover:invert transition"
                            />
                        </button>
                    </div>
                </div>

                <div className="w-full overflow-hidden">
                    <div ref={sliderRef} className="flex">
                        {newsData.map((item) => (
                            <div
                                key={item.id}
                                className="news-card flex-[0_0_33.333333%] px-4"
                            >
                                <div className="flex flex-col gap-6 group cursor-pointer">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#BE7D60]" />
                                            <p>News</p>
                                        </div>
                                        <p className="text-[16px] uppercase tracking-widest text-gray-900 font-['Forum']">
                                            {item.date}
                                        </p>
                                    </div>

                                    <div className="relative  h-[360px] overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500" />
                                    </div>

                                    <div className="flex items-start justify-between gap-6 border-b border-gray-200 pb-6 group-hover-[#BE7D60] transition">
                                        <h3 className="text-[22px] font-['Forum'] leading-snug max-w-[85%] text-[#BE7D60] underline">
                                            {item.title}
                                        </h3>

                                        <div className="w-[40px] h-[40px] rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#BE7D60] group-hover:border-[#BE7D60] transition">
                                            <img
                                                src="/upArrow.png"
                                                alt="Read"
                                                className="w-4 h-4 rotate-45 opacity-50 group-hover:invert group-hover:opacity-100 transition"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default News;
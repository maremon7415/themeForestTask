import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Personnel = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Team Members
            gsap.from(".team-member", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            // Animate Bottom Section
            gsap.from(".bottom-section", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".bottom-section",
                    start: "top 85%",
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const team = [
        {
            id: 1,
            name: "Alexander",
            location: "New York",
            role: "Senior Partner",
            dept: "Head of Corporate Law",
            image: "/men1.jpg",
        },
        {
            id: 2,
            name: "James Wilson",
            location: "London",
            role: "Partner",
            dept: "Commercial Litigation",
            image: "/men2.png",
        },
        {
            id: 3,
            name: "Sarah Chen",
            location: "Singapore",
            role: "Associate",
            dept: "Intellectual Property",
            image: "/men3.png",
        },
        {
            id: 4,
            name: "Michael Ross",
            location: "Berlin",
            role: "Senior Counsel",
            dept: "International Trade",
            image: "/men4.png",
        },
    ];

    return (
        <section ref={containerRef} className="relative w-full max-w-[1920px] mx-auto pt-25 bg-[#041C2C] mb-50">

            {/* Team Grid */}
            <div className="w-full px-50 grid grid-cols-4 gap-8">
                {team.map((member) => (
                    <div key={member.id} className="team-member flex flex-col group cursor-pointer">
                        <div className="w-full h-[300px] overflow-hidden relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Hover Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <h3 className="text-[32px] font-['Forum'] text-white mt-6 mb-4 group-hover:text-[#BE7D60] transition-colors relative inline-block w-fit">
                            {member.name}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="border border-white/20 px-3 py-1 text-[12px] uppercase tracking-wider font-medium text-white/90 hover:bg-white/5 transition-colors">
                                {member.location}
                            </span>
                            <span className="border border-white/20 px-3 py-1 text-[12px] uppercase tracking-wider font-medium text-white/90 hover:bg-white/5 transition-colors">
                                {member.role}
                            </span>
                            <span className="border border-white/20 px-3 py-1 text-[12px] uppercase tracking-wider font-medium text-white/90 hover:bg-white/5 transition-colors w-full text-center">
                                {member.dept}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section - Image with Overlay Text */}
            <div className="bottom-section w-full pl-50 relative">
                <div className="relative w-full h-[600px] transform translate-y-25 z-10">
                    <img
                        src="/personnelBg.jpg"
                        alt="Global Initiatives"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Centered Overlay Text */}
                    <div className="absolute inset-0 flex items-end justify-start ml-12 mb-12">
                        <h2 className="text-[60px] leading-[1.1] font-['Forum'] font-regular text-white text-center drop-shadow-md">
                            Contributing Important <br />
                            <span className="italic">Global Initiatives</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Personnel;
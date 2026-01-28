import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JoinCta = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            // Animate Left Column
            tl.from(".cta-left", {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Animate Center Content
            tl.from(".cta-center", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5");

            // Animate Right Column
            tl.from(".cta-right-img", {
                x: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.8");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className='w-full max-w-[1920px] mx-auto py-[100px] px-[100px] bg-white'>
            <div className='w-full grid grid-cols-3 items-center'>

                {/* Left Column - Image 1 */}
                <div className='cta-left w-full h-[300px] flex items-end justify-start pl-10'>
                    <div className="w-[160px] h-[160px] border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        <img
                            className='w-full h-full object-cover'
                            src="/joincta1.png"
                            alt="Partner"
                        />
                    </div>
                </div>

                {/* Center Column - Content */}
                <div className='cta-center w-full flex flex-col items-center justify-center text-center -mt-10'>
                    <h4 className="text-[70px] leading-none font-['Forum'] text-[#1A1A1A] mb-6 whitespace-nowrap">
                        Become Our Intern
                    </h4>
                    <p className="text-[#555] text-[16px] leading-[1.6] max-w-[400px] mb-10 font-['Forum']">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis sint illo aperiam possimus eum est!
                    </p>
                    <button className='group bg-[#BE7D60] text-white px-5 py-3 flex items-center justify-center gap-4 text-[14px] font-bold tracking-[0.2em] hover:bg-[#1A1A1A] transition-all duration-300 shadow-xl shadow-[#BE7D60]/20 cursor-pointer'>
                        Free Consultation
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Right Column - Images 2 & 3 */}
                <div className='w-full h-[400px] flex flex-col justify-between items-end pr-10'>
                    {/* Top Image */}
                    <div className="cta-right-img w-[140px] h-[140px] mr-[80px] border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        <img
                            className='w-full h-full object-cover'
                            src="/joincta2.png"
                            alt="Meeting"
                        />
                    </div>
                    {/* Bottom Image */}
                    <div className="cta-right-img w-[180px] h-[180px] border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        <img
                            className='w-full h-full object-cover'
                            src="/joincta3.jpg"
                            alt="Discussion"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default JoinCta
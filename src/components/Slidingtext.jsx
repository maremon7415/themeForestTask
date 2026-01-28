import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Slidingtext = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const phrases = [
        "Since 1987",
        "Thousands of cases won",
        "Nationwide legal support"
    ];

    // Create a set large enough to fill a screen (repeated 4 times per set is plenty)
    const singleSet = [...phrases, ...phrases, ...phrases, ...phrases];
    // Double it for the seamless loop (slide 0 -> -50%)
    const loopItems = [...singleSet, ...singleSet];

    return (
        <div ref={containerRef} className='w-full border-y border-[#BE7D60]/20 bg-[#F9F2F0] py-10 overflow-hidden flex'>
            <div className='flex items-center gap-16 animate-marquee min-w-max hover:[animation-play-state:paused]'>
                {loopItems.map((text, index) => (
                    <React.Fragment key={index}>
                        <h2 className='text-[50px] leading-none font-["Forum"] text-[#1A1A1A] whitespace-nowrap tracking-widest'>
                            {text}
                        </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#BE7D60" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Slidingtext
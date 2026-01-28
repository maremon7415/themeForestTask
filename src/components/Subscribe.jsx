import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Subscribe = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".subscribe-content", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full max-w-[1920px] mx-auto py-[100px] px-[100px] bg-[#F9F2F0] flex items-center justify-between">
            <div className="subscribe-content flex flex-col gap-4 max-w-[50%]">
                <h2 className="text-[48px] font-['Forum'] text-[#1A1A1A] leading-none">
                    Subscribe for Updates
                </h2>
                <p className="text-[#555] font-['Forum'] text-[18px]">
                    Get the latest legal insights and news delivered to your inbox.
                </p>
            </div>

            <div className="subscribe-content w-[40%]">
                <form className="w-full flex border-b border-[#BE7D60] py-2 relative group">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full bg-transparent text-[20px] font-['Forum'] text-[#1A1A1A] placeholder-[#888] outline-none pr-[60px]"
                    />
                    <button
                        type="button"
                        className="absolute right-0 bottom-2 w-[50px] h-[50px] bg-[#BE7D60] rounded-full flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors duration-300 cursor-pointer"
                    >
                        <img
                            src="/upArrow.png"
                            alt="Subscribe"
                            className="w-5 h-5 object-contain rotate-45 brightness-0 invert"
                        />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
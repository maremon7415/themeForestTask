import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Main Columns
            gsap.from(".footer-col", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                }
            });

            // Animate Bottom Bar
            gsap.from(".footer-bottom", {
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                }
            });

            // Animate Canvas Image
            gsap.from(".footer-canvas", {
                x: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                }
            });

        }, footerRef);

        return () => ctx.revert();
    }, []);

    const socialLinks = [
        { name: "LinkedIn", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Twitter", href: "#" }
    ];

    const navLinks = [
        "Home", "About", "Our Teams", "Case Studies", "Blogs", "Contact"
    ];

    return (
        <footer ref={footerRef} className='relative w-full max-w-[1920px] mx-auto px-[100px] pt-[120px] pb-12 bg-[#041C2C] text-white overflow-hidden'>

            {/* Main Content */}
            <div className='flex relative z-10 mb-24'>
                {/* Left Column (50%) */}
                <div className='footer-col w-3/5 flex flex-col gap-12 pr-20 relative'>
                    <h2 className="text-[56px] leading-[1.1] font-['Forum'] text-white">
                        Together, We Build Smarter <span className="text-[#BE7D60]">Legal Outcomes</span>
                    </h2>
                    <div className="flex items-start gap-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="group flex items-center gap-3 text-[18px] font-['Forum'] hover:text-[#BE7D60] transition-colors"
                            >
                                {link.name}
                                <div className='w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#BE7D60] group-hover:bg-[#BE7D60] transition-all duration-300'>
                                    <img
                                        src="/upArrow.png"
                                        alt="Arrow"
                                        className="w-3 h-3 invert brightness-0 rotate-45 transition-transform duration-300 group-hover:invert-0"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                    {/* Decorative Image */}
                    <div className='footer-canvas absolute bottom-0 right-0 pointer-events-none opacity-20 transform translate-x-20 translate-y-20'>
                        <img src="/canvas.png" alt="Decorative" className="max-w-[400px]" />
                    </div>
                </div>

                {/* Middle Column (25%) */}
                <div className='footer-col w-1/5 flex flex-col gap-10 pt-4'>
                    <div className='flex flex-col gap-4 font-["Forum"] text-[18px] text-[#CCCCCC]'>
                        <a href="mailto:Consulty@email.com" className="hover:text-white transition-colors">Consulty@email.com</a>
                        <a href="mailto:contact@email.com" className="hover:text-white transition-colors">contact@email.com</a>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-[#BE7D60] font-['Forum'] text-[18px] hover:text-white transition-colors">
                        Google Map
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M1 7H17M17 7L11 1M17 7L11 13" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Right Column (25%) */}
                <div className="footer-col w-1/5 flex flex-col gap-10 pt-4 cursor-pointer">
                    <div className='font-["Forum"] text-[18px] text-[#CCCCCC]'>
                        <p>123 Main St, Anytown, USA</p>
                    </div>
                    <div className='flex flex-col gap-2 font-["Forum"] text-[18px] text-[#CCCCCC]'>
                        <p>+123 456 7890</p>
                        <p>+123 456 7890</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='footer-bottom w-full pt-8 border-t border-white/10 flex justify-between items-center'>
                <p className="text-[14px] font-['Forum'] text-[#888888]">
                    Copyright © 2026 Consulty. All Rights Reserved.
                </p>
                <div className='flex gap-8'>
                    {navLinks.map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="text-[14px] font-['Forum'] text-[#CCCCCC] hover:text-[#BE7D60] transition-colors uppercase tracking-wider"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
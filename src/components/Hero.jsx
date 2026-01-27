import React from "react";

const Hero = () => {
    return (
        <div className="w-full max-w-[1920px] h-[822px] mx-auto overflow-hidden">
            {/* Header Content */}
            <div className="w-full px-[100px] h-[200px] my-[50px] bg-white flex items-center justify-between z-10 relative">
                {/* Left heading */}
                <div className="w-[60%] h-full flex items-center justify-start">
                    <h2 className="text-[80px] font-medium leading-[80px] font-['Forum'] tracking-tight text-gray-900">
                        Justice. Advocacy. <br />
                        <span className="text-[#BE7D60] italic">Result.</span>
                    </h2>
                </div>

                {/* Right circular text */}
                <div className="w-[40%] h-full flex items-center justify-center">
                    <div className="relative w-[160px] h-[160px] flex items-center justify-center">
                        {/* Spinning Text Ring */}
                        <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                            <svg viewBox="0 0 160 160" className="w-full h-full overflow-visible">
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                    />
                                </defs>
                                <text fill="#1A1A1A" fontSize="13.5" fontWeight="500" letterSpacing="2px">
                                    <textPath href="#circlePath" textLength="375" lengthAdjust="spacingAndGlyphs">
                                        WE WILL SOLVE YOUR PROBLEM TODAY ⟶
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        {/* Center Dot */}
                        <span className="absolute w-[16px] h-[16px] rounded-full bg-[#BE7D60] shadow-lg shadow-[#BE7D60]/40" />
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="w-full h-[760px] relative flex">
                {/* Left Social Links */}
                <div className="w-[100px] h-full flex items-center justify-center border-r border-gray-100 bg-white z-10">
                    <div className="flex gap-8 text-[14px] font-bold tracking-[0.2em] -rotate-90 text-gray-400 whitespace-nowrap">
                        {['DRIBBBLE', 'BEHANCE', 'GITHUB', 'LINKEDIN', 'FACEBOOK'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="hover:text-[#BE7D60] hover:tracking-[0.3em] transition-all duration-300 ease-out"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1 h-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500 z-10" />
                    <img
                        src="/heroBg.png"
                        alt="Hero"
                        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;

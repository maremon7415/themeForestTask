import React from 'react'

const ArrowButton = ({ text }) => {
    return (
        <button className="group w-fit flex items-center gap-3 text-[20px] font-medium tracking-[0.15em] text-[#1A1A1A] hover:text-[#BE7D60] transition-colors">
            {text}
            <span className="group-hover:translate-x-1 transition-transform duration-300 -rotate-45 text-[#BE7D60]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </button>
    )
}

const ShortFeature = () => {
    return (
        <div className="w-full max-w-[1920px] mx-auto h-[351px] px-[100px] py-[50px] grid grid-cols-[1.2fr_1fr_1fr] items-center bg-white border-b border-gray-100 font-['Forum']">

            {/* Column 1 */}
            <div className="h-full flex flex-col justify-end pr-12 border-r border-[#F8F2EF]">
                <h2 className="text-[48px] leading-[58px] text-[#1A1A1A] mb-6">
                    Drive impact through <br />
                    <span className="italic text-[#BE7D60]">
                        global legal initiatives
                    </span>
                </h2>

                <p className="text-[#555] text-[16px] leading-[26px] pr-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum libero quasi neque asperiores officia amet iusto, eum enim, deserunt aliquid necessitatibus!
                </p>
            </div>

            {/* Column 2 */}
            <div className="h-full flex flex-col justify-end px-12 border-r border-[#F8F2EF]">
                <p className="text-[24px] leading-[30px] text-[#1A1A1A] mb-8">
                    Smart actionable tips for modern businesses
                </p>

                <ArrowButton text="Read more" />
            </div>

            {/* Column 3 */}
            <div className="h-full flex flex-col justify-end pl-12">
                <p className="text-[70px] leading-none text-[#BE7D60] mb-2">
                    960K
                    <sup className="text-[40px] align-top relative top-1">+</sup>
                </p>

                <p className="text-[#555] text-[24px] font-medium mb-8">
                    Helping you move forward with confidence
                </p>

                <ArrowButton text="Read more" />
            </div>
        </div>
    )
}

export default ShortFeature
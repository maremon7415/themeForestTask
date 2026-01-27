import React from 'react'

const AwardAchivments = () => {
    const stats = [
        { number: "54+", suffix: "/Years", label: "of Legal Excellence" },
        { number: "500+", suffix: "/Cases", label: "Successfully Resolved" },
        { number: "850+", suffix: "/Areas", label: "Handled Across Jurisdictions" },
        { number: "10K+", suffix: "/Hours", label: "of Courtroom Representation" },
    ];

    const awards = [
        {
            id: 1,
            title: "Best Law Firm in the World",
            desc: "Awarded for outstanding legal service and client satisfaction across all practice areas."
        },
        {
            id: 2,
            title: "Top Litigation Firm in the World",
            desc: "National Legal Excellence Award for superior courtroom performance and case victories."
        },
        {
            id: 3,
            title: "Client Choice Award in the World",
            desc: "Recognized for exceptional client care, transparency, and results-driven approach."
        },
        {
            id: 4,
            title: "Legal Innovation in the World",
            desc: "Pioneering digital legal solutions and efficient case management systems."
        }
    ];

    return (
        <section className='w-full max-w-[1920px] mx-auto px-[100px] bg-white flex gap-0'>

            {/* Left Column: Stats (20%) */}
            <div className='w-[20%] flex flex-col justify-center gap-14 border-r border-gray-100 pr-10'>
                {stats.map((stat, index) => (
                    <div key={index} className='flex flex-col'>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-[50px] font-['Forum'] text-[#1A1A1A] leading-none">
                                {stat.number}
                            </h2>
                            <span className="text-[18px] text-[#BE7D60] font-['Forum']">
                                {stat.suffix}
                            </span>
                        </div>
                        <p className="text-[16px] text-[#555] font-['Forum'] mt-2 uppercase tracking-wide">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right Column: Awards List (80%) */}
            <div className='w-[80%] pl-[80px] flex flex-col justify-center'>
                {awards.map((award) => (
                    <div
                        key={award.id}
                        className='flex justify-between items-center py-10 border-b border-gray-200 group cursor-pointer hover:border-[#BE7D60] transition-colors'
                    >
                        {/* Title Section */}
                        <div className='flex items-center gap-6 w-[45%]'>
                            <img
                                src="/award.png"
                                alt="Award"
                                className="w-20 h-20 object-contain "
                            />
                            <h3 className="text-[28px] font-['Forum'] text-[#1A1A1A] leading-tight">
                                {award.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="w-[40%] text-[16px] text-[#555] font-['Forum'] leading-relaxed">
                            {award.desc}
                        </div>

                        {/* Arrow */}
                        <div className="w-[5%] flex justify-end">
                            <div className="border border-[#BE7D60] rounded-full p-2"><img src="/downArrow.png" alt="" className='-rotate-90 w-[30px] h-[30px] object-contain ' /></div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default AwardAchivments
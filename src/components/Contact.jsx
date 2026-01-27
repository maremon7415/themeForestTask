import React from 'react'

const Contact = () => {
    return (
        <section className='w-full max-w-[1920px] mx-auto py-[120px] px-[100px] bg-white'>
            <div className="w-full flex shadow-sm">

                {/* Left Information Column (30%) */}
                <div className="w-[30%] flex flex-col gap-14 pr-10 pt-10">

                    {/* Location */}
                    <div className='flex gap-6'>
                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#BE7D60]/30 rounded-full">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BE7D60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[22px] font-['Forum'] text-[#1A1A1A] mb-2">Location</p>
                            <p className="text-[16px] text-[#555] font-['Forum'] mb-3 leading-relaxed">
                                123 Address, City, State,<br /> Country
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-[#BE7D60] font-['Forum'] hover:underline">
                                Google Map
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className='flex gap-6'>
                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#BE7D60]/30 rounded-full">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BE7D60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[22px] font-['Forum'] text-[#1A1A1A] mb-2">Email</p>
                            <a href="mailto:info@lawfirm.com" className="text-[16px] text-[#555] font-['Forum'] hover:text-[#BE7D60] transition-colors">
                                info@lawfirm.com
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className='flex gap-6'>
                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#BE7D60]/30 rounded-full">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BE7D60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[22px] font-['Forum'] text-[#1A1A1A] mb-2">Phone</p>
                            <p className="text-[16px] text-[#555] font-['Forum']">+123 456 7890</p>
                            <p className="text-[16px] text-[#555] font-['Forum']">+123 456 7890</p>
                        </div>
                    </div>

                </div>

                {/* Right Form Column (70%) */}
                <form className="w-[70%] bg-[#F9F2F0] pl-[80px] p-[60px] flex flex-col border-l border-[#BE7D60]">
                    <h4 className="text-[40px] font-['Forum'] text-[#1A1A1A] leading-[1.1] mb-12 uppercase">
                        Fill out the Form <br />
                        <span className="text-[#BE7D60]">we will get in touch</span>
                    </h4>

                    <div className='flex flex-col gap-8'>
                        <div className='grid grid-cols-2 gap-10'>
                            <input
                                type="text"
                                placeholder='First Name'
                                className="w-full bg-transparent border-b border-[#BE7D60] py-3 text-[18px] font-['Forum'] placeholder-[#888] outline-none focus:border-black transition-colors"
                            />
                            <input
                                type="text"
                                placeholder='Last Name'
                                className="w-full bg-transparent border-b border-[#BE7D60] py-3 text-[18px] font-['Forum'] placeholder-[#888] outline-none focus:border-black transition-colors"
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-10'>
                            <input
                                type="email"
                                placeholder='Email'
                                className="w-full bg-transparent border-b border-[#BE7D60] py-3 text-[18px] font-['Forum'] placeholder-[#888] outline-none focus:border-black transition-colors"
                            />
                            <input
                                type="tel"
                                placeholder='Phone'
                                className="w-full bg-transparent border-b border-[#BE7D60] py-3 text-[18px] font-['Forum'] placeholder-[#888] outline-none focus:border-black transition-colors"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder='Subject'
                                className="w-full bg-transparent border-b border-[#BE7D60] py-3 text-[18px] font-['Forum'] placeholder-[#888] outline-none focus:border-black transition-colors"
                            />
                        </div>

                        <div>
                            <textarea
                                placeholder='Message'
                                rows="4"
                                className="w-full bg-transparent border-b border-[#BE7D60] py-3 text-[18px] font-['Forum'] placeholder-[#888] outline-none focus:border-black transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#1A1A1A] text-white px-10 py-4 mt-6 text-[14px] font-bold uppercase tracking-[0.2em] hover:bg-[#BE7D60] transition-colors self-start cursor-pointer"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
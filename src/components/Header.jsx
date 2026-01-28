import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="w-full max-w-[1920px] h-[136px] mx-auto px-[50px] 2xl:px-[100px] font-light text-[#1A1A1A]">
      {/* Top bar */}
      <div className="w-full h-[54px] flex justify-between items-center border-b border-[#F8F2EF]">
        <ul className="flex gap-6 text-[16px]">
          <li className="cursor-pointer hover:text-black transition-colors">
            FAQ
          </li>
          <li className="cursor-pointer hover:text-black transition-colors">
            Personnel
          </li>
          <li className="cursor-pointer hover:text-black transition-colors">
            Our Expertise
          </li>
        </ul>

        <ul className="flex gap-6 text-[16px]">
          <li className="text-[#555]">consultancy@email.com</li>
          <li className="text-[#555]">Mon - Sat 8:00 - 16:00</li>
        </ul>
      </div>

      {/* Main nav */}
      <div className="w-full h-[82px] flex items-center">
        <div className="w-full h-[54px] flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Justivo logo" className="h-[32px]" />
            <p className="text-[20px] font-medium tracking-wide">JUSTIVO</p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-6 text-lg">
              {[
                "Home",
                "About Us",
                "Practice Areas",
                "Our Team",
                "Case Studies",
                "Blog",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-black transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

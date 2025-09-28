"use client"
import React, { useState } from "react";
import { navigation } from "@/lib/data";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="w-full max-w-[95%] mx-auto flex justify-between items-center p-3 md:p-5">
                <a href="/" className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight 
                            text-white font-['Syne']">
                    Muhammad<span className="text-orange-400">.</span>Uzair
                    <span className="text-orange-400">.</span>Asif
                </a>

                <div className="hidden md:flex items-center gap-3 lg:gap-4">
                    {navigation.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`
                                relative px-4 lg:px-6 py-2 text-base lg:text-lg font-semibold bg-[#000000] text-white
                                border-3 lg:border-4 border-[#ffffff] rounded-none
                                shadow-[3px_3px_0_#ffffff] lg:shadow-[4px_4px_0_#ffffff]
                                hover:shadow-[2px_2px_0_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px]
                                active:shadow-none active:translate-x-[4px] active:translate-y-[2px]
                                transition-all duration-150 cursor-pointer
                                whitespace-nowrap
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <button
                    className="cursor-pointer md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            <div className={`md:hidden bg-[#f4f1e1] border-t-2 border-orange-400/20 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 py-3 space-y-3">
                    {navigation.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`
                                block text-center px-6 py-3 text-lg font-semibold bg-[#000000] text-white
                                border-3 border-[#ffffff] rounded-none
                                shadow-[3px_3px_0_#ffffff]
                                hover:shadow-[2px_2px_0_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px]
                                active:shadow-none active:translate-x-[4px] active:translate-y-[2px]
                                transition-all duration-150 cursor-pointer
                            `}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
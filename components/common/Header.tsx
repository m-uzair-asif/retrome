import React from "react";
import { navigation } from "@/lib/data";
import Link from "next/link";

const Header = () => {
    return (
        <div className="border-b border-gray-700">
            <div className="w-full max-w-[95%] mx-auto flex justify-between items-center p-5">
                <h1 className="text-3xl font-bold">
                    Muhammad<span className="text-orange-400">.</span>Uzair
                    <span className="text-orange-400">.</span>Asif
                </h1>

                <div className="flex items-center gap-4">
                    {navigation.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`
                                border-2 border-gray-700 px-4 py-1.5 font-medium w-fit
                                shadow-[4px_4px_0_#FA812F]              
                                active:shadow-[1.5px_1.5px_0_#FA812F]   
                                active:translate-x-[2px] active:translate-y-[2px]
                                transition-all duration-150 cursor-pointer
                            `}
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

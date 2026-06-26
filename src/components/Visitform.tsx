"use client";

import React from 'react';
import Image from 'next/image';

export default function VisitForm() {
    return (
        <div className="relative z-10 -mt-15 max-[900px]:-mt-5 w-full px-[5%] flex justify-center">
            <div className="w-full max-w-6xl p-8 bg-white rounded-lg shadow-xl shadow-black/5">

                <h2 className="text-2xl font-bold text-[#1E1E1E] mb-1">Request for a visit</h2>
                <p className="text-xs text-gray-400 mb-6 md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col md:flex-row items-end gap-5">

                    <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                        {/* Name Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-700 md:text-sm">Name</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="w-full h-11 px-4 bg-white border border-gray-300 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#CF173C] transition-colors duration-200"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-700 md:text-sm">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full h-11 px-4 bg-white border border-gray-300 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#CF173C] transition-colors duration-200"
                            />
                        </div>

                        {/* Mobile Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-700 md:text-sm">Mobile</label>
                            <input
                                type="tel"
                                placeholder="Enter mobile number"
                                className="w-full h-11 px-4 bg-white border border-gray-300 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#CF173C] transition-colors duration-200"
                            />
                        </div>

                        {/* Select City Dropdown */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-gray-700 md:text-sm">Select city</label>
                            <div className="relative w-full">
                                <select
                                    defaultValue=""
                                    className="w-full h-11 pl-4 pr-10 bg-white border border-gray-300 rounded text-sm text-gray-400 outline-none appearance-none cursor-pointer focus:border-[#CF173C] transition-colors duration-200"
                                >
                                    <option value="" disabled>Select city</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="pune">Pune</option>
                                    <option value="bangalore">Bangalore</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-xxs select-none">
                                    ▼
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Submit Request Button Container */}
                    <div className="w-full md:w-auto shrink-0">
                        <button
                            type="submit"
                            className="w-full md:w-19 h-17 flex flex-col items-center justify-center gap-1.5 bg-gradient-to-b from-[#A31D1D] to-[#6B0000] text-white rounded shadow-lg shadow-[#A31D1D]/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer group"
                        >
                            <Image
                                src="/searchnormal1.png"
                                alt="submit"
                                width={18}
                                height={18}
                                className="h-4.5 w-4.5 brightness-0 invert object-contain transition-transform duration-200 group-hover:scale-105"
                            />
                            <span className="text-xxs font-medium tracking-wider uppercase">Request</span>
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}
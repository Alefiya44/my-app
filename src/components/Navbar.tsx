import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profile" },
    { label: "Tickets", href: "/tickets" },
    { label: "Offers", href: "/offers" },
    { label: "Space", href: "/space" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="relative z-50 w-full font-sans">
      {/* Top Bar */}
      <div className="w-full border-b border-gray-200 bg-[#FCFBFA] text-xs text-gray-600 shadow-sm md:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">

          <div className="flex items-center gap-4">
            <a
              href="tel:+9154345533"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-[#8B0000]"
            >
              <Image
                src="/Vector.png"
                alt="Call"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              <span>(+91) 54345533</span>
            </a>

            <span className="text-gray-300">|</span>

            <a
              href="#map"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-[#8B0000]"
            >
              <Image
                src="/location.png"
                alt="Location"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              <span>Location Map</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/facebook.jpg"
                alt="Facebook"
                width={20}
                height={20}
                className="h-5 w-auto object-contain"
              />
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
                className="h-5 w-auto object-contain"
              />
              <Image
                src="/play.png"
                alt="Play"
                width={20}
                height={20}
                className="h-5 w-auto object-contain"
              />
            </div>

            <button className="flex items-center gap-2 transition-colors duration-200 hover:text-[#8B0000]">
              <Image
                src="/searchnormal1.png"
                alt="Search"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              <span>Search</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-[#F7F1EB] shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col px-4 lg:flex-row lg:px-8">

          {/* Logo */}
          <div className="flex shrink-0 items-center justify-center bg-white px-4 py-2 shadow-md md:rounded-b-xl">
            <Image
              src="/CoKarma_logo1 2.png"
              alt="CoKarma Logo"
              width={150}
              height={96}
              priority
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-1 flex-col">

            {/* Navigation Links */}
            <div className="flex items-center justify-between bg-[#F7F1EB] py-4 lg:pl-6">
              <ul className="flex gap-7 overflow-x-auto whitespace-nowrap text-sm font-medium text-gray-700 scrollbar-none">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="cursor-pointer transition-colors duration-200 hover:text-[#8B0000]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <button className="ml-4 flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#8B0000]">
                <Image
                  src="/Group.png"
                  alt="Login"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
                <span className="hidden sm:block">Login / Signup</span>
              </button>
            </div>

            {/* Announcement Bar */}
            <div className="bg-gradient-to-r from-[#8B0000] to-[#A31D1D] px-6 py-2 text-center text-xs text-white sm:text-sm">
              <span>
                # Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <a
                href="#details"
                className="ml-2 font-semibold hover:underline inline-block whitespace-nowrap"
              >
                More Details →
              </a>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}
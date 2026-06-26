import React from "react";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 lg:px-8">
      <div className="relative flex items-center justify-between min-h-[500px] overflow-hidden shadow-lg">

        {/* Background Image */}
        <img
          src="/hello.png.png"
          alt="Coworking Space"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Left Arrow */}
        <button className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-md transition hover:scale-105 hover:bg-white">
          <img
            src="/arrowleft.png"
            alt="Previous"
            className="h-4 w-4"
          />
        </button>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 md:justify-end lg:pr-20">
          <div className="max-w-xl text-center md:text-left">

            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>

            <p className="mb-6 text-sm leading-relaxed text-gray-200 md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam blanditiis harum
              quisquam eius sed odit fugiat iusto fuga praesentium optio,
              eaque rerum!
            </p>

            <button className="rounded bg-gradient-to-r from-[#CF173C] to-[#1E1E1E] px-8 py-3 font-semibold text-white shadow-lg transition hover:opacity-90">
              View More
            </button>

          </div>
        </div>

        {/* Right Arrow */}
        <button className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-md transition hover:scale-105 hover:bg-white">
          <img
            src="/arrowright.png"
            alt="Next"
            className="h-4 w-4"
          />
        </button>

      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';

const galleryImages = [
    "/gallery/image1.jpg",
    "/gallery/image2.jpg",
    "/gallery/image3.jpg",
    "/gallery/image4.jpg",
    "/gallery/image5.jpg",
    "/gallery/image6.jpg",
    "/gallery/image7.jpg",
    "/gallery/image8.jpg",
];

export default function GallerySection() {
    return (
        <section className="w-full bg-[#FFFFFF] flex justify-center items-center py-[60px]">
            <div className="w-full max-w-[1445px] min-h-[591px] px-4 mx-auto flex flex-col items-center">

                {/* Header Block matching the Figma metrics */}
                <div className="text-center mb-[40px]">
                    <h2 className="text-[32px] font-bold text-[#2F2F2F] tracking-tight mb-2">
                        Lorem ipsum dolor
                    </h2>
                    <p className="text-[14px] text-[#7B7777] font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* 4-Column Image Grid Layout */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[344/210] w-full overflow-hidden bg-gray-100"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover w-full h-full transition-transform duration-300 ease-out hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
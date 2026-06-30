import React from 'react';
import Image from 'next/image';

export default function GallerySection() {
    return (
        <section className="w-full bg-white flex justify-center items-center py-[60px]">
            <div className="flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-[40px]">
                    <h2 className="text-[32px] font-bold text-[#2F2F2F] tracking-tight mb-2">
                        Lorem ipsum dolor
                    </h2>
                    <p className="text-[14px] text-[#7B7777] font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* ROW 1 — exact px widths: 337 / 279 / 390 / 337, gap 24px */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '337px 279px 390px 337px',
                        columnGap: '24px',
                    }}
                >
                    <div className="relative" style={{ width: 337, height: 226 }}>
                        <Image src="/GalleryS/Rectangle 48.png" alt="Gallery 1" fill className="object-cover" />
                    </div>
                    <div className="relative" style={{ width: 279, height: 226 }}>
                        <Image src="/GalleryS/Rectangle 51.png" alt="Gallery 2" fill className="object-cover" />
                    </div>
                    <div className="relative" style={{ width: 390, height: 226 }}>
                        <Image src="/GalleryS/Rectangle 52.png" alt="Gallery 3" fill className="object-cover" />
                    </div>
                    <div className="relative" style={{ width: 337, height: 226 }}>
                        <Image src="/GalleryS/Rectangle 55.png" alt="Gallery 4" fill className="object-cover" />
                    </div>
                </div>

                {/* ROW 2 — exact px widths: 251 / 421 / 268 / 414, gap 24px */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '251px 421px 268px 414px',
                        columnGap: '24px',
                        marginTop: '24px',
                    }}
                >
                    <div className="relative" style={{ width: 251, height: 226 }}>
                        <Image src="/GalleryS/Rectangle 49.png" alt="Gallery 5" fill className="object-cover" />
                    </div>
                    <div className="relative" style={{ width: 421, height: 226 }}>
                        <Image src="/GalleryS/Rectangle 50.png" alt="Gallery 6" fill className="object-cover" />
                    </div>
                    <div className="relative" style={{ width: 268, height: 226 }}>
                        <Image src="/GalleryS/Rectangle 53.png" alt="Gallery 7" fill className="object-cover" />
                    </div>
                    <div className="relative" style={{ width: 414, height: 226 }}>
                        <Image src="/GalleryS/Rectangle 54.png" alt="Gallery 8" fill className="object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
}

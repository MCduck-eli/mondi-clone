"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
    const images = [
        "/mondi3.jpg",
        "/mondi1.webp",
        "/mondi2.jpg",
        "/monid4.jpeg",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative w-full overflow-hidden mt-16 md:mt-0">
            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
                            index === currentSlide
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0"
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            onLoadingComplete={() => setIsLoading(false)}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">
                                Mondi Cafe
                            </h1>
                            <p className="text-lg md:text-xl">
                                Osmon ranglaridagi lazzat
                            </p>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 animate-pulse"></div>
                )}
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentSlide
                                ? "bg-white scale-125"
                                : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <button
                type="button"
                onClick={goToPrevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 transition-all group focus:outline-none"
                aria-label="Previous slide"
            >
                <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                type="button"
                onClick={goToNextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 transition-all group focus:outline-none"
                aria-label="Next slide"
            >
                <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Hero;

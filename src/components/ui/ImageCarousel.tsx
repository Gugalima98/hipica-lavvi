"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageCarouselProps {
    images: string[];
    alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="relative group w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
            {/* Main Image */}
            <div
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                className="w-full h-full bg-center bg-cover duration-500 transition-all"
            >
                {/* Overlay Text placeholder if needed */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors">
                <Button variant="ghost" size="icon" onClick={prevSlide} className="text-white hover:text-white">
                    <ChevronLeft size={30} />
                </Button>
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors">
                <Button variant="ghost" size="icon" onClick={nextSlide} className="text-white hover:text-white">
                    <ChevronRight size={30} />
                </Button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`transition-all duration-300 cursor-pointer w-3 h-3 rounded-full ${currentIndex === slideIndex ? "bg-white scale-125" : "bg-white/50"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

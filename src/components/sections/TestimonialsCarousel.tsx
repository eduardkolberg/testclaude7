"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

interface TestimonialItem {
  quote: string;
  author: string;
  relation: string;
  stars: number;
}

interface TestimonialsCarouselProps {
  items: TestimonialItem[];
  animated?: boolean;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };

export default function TestimonialsCarousel({ items, animated = true, className = "" }: TestimonialsCarouselProps) {
  const { ref, visible } = useInView(0.15);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = windowWidth < 768 ? 1 : 3;
  const maxSlide = items.length - visibleCount;

  return (
    <div className={`relative px-4 md:px-12 ${className}`} ref={animated ? ref : undefined}>
      {/* Arrows */}
      <button
        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white items-center justify-center transition-all shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#E0F7FA] hover:text-[#00838F] hover:shadow-[0_6px_16px_rgba(0,131,143,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide(Math.min(maxSlide, currentSlide + 1))}
        disabled={currentSlide >= maxSlide}
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white items-center justify-center transition-all shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#E0F7FA] hover:text-[#00838F] hover:shadow-[0_6px_16px_rgba(0,131,143,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden -mx-4 px-4 py-8">
        <div
          className="flex gap-8 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${currentSlide} * ((100% + 32px) / ${visibleCount})))`,
          }}
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              className="flex-none w-full md:w-[calc(33.333%-22px)] bg-white rounded-[16px] p-8 transition-all hover:scale-[1.02] relative border border-transparent hover:border-[#4DD0E1]"
              style={{ boxShadow: "0 2px 12px rgba(13,33,55,0.08)" }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#4DD0E1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < t.stars ? "text-[#FFA000]" : "text-[#E0E7E9]"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <div className="mb-8 pl-2 border-l-2 border-[#E0F7FA]">
                <p className="italic" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-auto">
                <div style={{ ...fontHeadings, fontSize: "16px", fontWeight: 700, color: "#0D2137" }}>
                  {t.author}
                </div>
                <div style={{ ...fontBody, fontSize: "14px", color: "#90A4AE" }}>
                  {t.relation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(items.length / visibleCount) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx * visibleCount)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label={`Go to slide group ${idx + 1}`}
          >
            <span className={`block w-2.5 h-2.5 rounded-full transition-colors ${
              Math.ceil(currentSlide / visibleCount) === idx
                ? "bg-[#00838F]"
                : "bg-[#E0E7E9] hover:bg-[#B2EBF2]"
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
}

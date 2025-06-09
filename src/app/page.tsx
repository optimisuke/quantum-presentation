"use client";

import React, { useState, useEffect, useRef } from "react";
import Slide1 from "@/components/Slide1";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";
import Slide4 from "@/components/Slide4";
import Slide5 from "@/components/Slide5";
import Slide6 from "@/components/Slide6";
import Slide7 from "@/components/Slide7";
import Slide8 from "@/components/Slide8";
import Navigation from "@/components/Navigation";
import KeyboardHelp from "@/components/KeyboardHelp";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const totalSlides = 8;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        if (currentSlide < totalSlides - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // Scroll to current slide
  useEffect(() => {
    if (slidesRef.current) {
      const slideElements = slidesRef.current.children;
      if (slideElements[currentSlide]) {
        slideElements[currentSlide].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [currentSlide]);

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleGoToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <main className="relative">
      <KeyboardHelp />
      <div ref={slidesRef} className="snap-y snap-mandatory">
        <div className="snap-start">
          <Slide1 />
        </div>
        <div className="snap-start">
          <Slide2 />
        </div>
        <div className="snap-start">
          <Slide3 />
        </div>
        <div className="snap-start">
          <Slide4 />
        </div>
        <div className="snap-start">
          <Slide5 />
        </div>
        <div className="snap-start">
          <Slide6 />
        </div>
        <div className="snap-start">
          <Slide7 />
        </div>
        <div className="snap-start">
          <Slide8 />
        </div>
      </div>

      <Navigation
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onGoToSlide={handleGoToSlide}
      />
    </main>
  );
}

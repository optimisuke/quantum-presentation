import React from "react";

interface NavigationProps {
  totalSlides: number;
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (slideIndex: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  totalSlides,
  currentSlide,
  onPrevious,
  onNext,
  onGoToSlide,
}) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center space-x-4 rounded-full bg-black/30 px-6 py-3 backdrop-blur-md">
        <button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="rounded-full p-2 text-white transition hover:bg-white/20 disabled:opacity-30"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                currentSlide === index
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full p-2 text-white transition hover:bg-white/20 disabled:opacity-30"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;

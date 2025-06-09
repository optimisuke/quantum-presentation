import React, { useState } from "react";

const KeyboardHelp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed right-4 top-4 z-50 rounded-full bg-black/30 p-2 text-white backdrop-blur-md transition hover:bg-black/50"
        aria-label="Keyboard shortcuts"
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
          <path d="M3 7h4" />
          <path d="M9 7h4" />
          <path d="M17 7h4" />
          <path d="M21 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z" />
          <path d="M6 17v4" />
          <path d="M18 17v4" />
          <path d="M3 10h18" />
          <path d="M6 7v3" />
          <path d="M12 7v3" />
          <path d="M18 7v3" />
        </svg>
      </button>

      {isVisible && (
        <div className="fixed left-0 right-0 top-0 z-40 flex h-full items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">キーボードショートカット</h2>
              <button
                onClick={() => setIsVisible(false)}
                className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>次のスライド</span>
                <div className="flex space-x-2">
                  <kbd className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm">
                    →
                  </kbd>
                  <span className="text-gray-500">または</span>
                  <kbd className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm">
                    Space
                  </kbd>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>前のスライド</span>
                <kbd className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm">
                  ←
                </kbd>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyboardHelp;

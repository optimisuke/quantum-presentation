import React from "react";

const Slide1 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 p-8 text-center text-white">
      <div className="relative z-10 max-w-5xl">
        <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          Quantum
        </div>

        <h1 className="mb-8 text-6xl font-extrabold md:text-7xl lg:text-8xl leading-tight">
          なぜ理学部物理学科OBが
          <br />
          量子コンピュータを学ぶべきか
        </h1>
        <p className="text-3xl font-semibold md:text-4xl lg:text-5xl">
          ～面白くて最先端、いま君の出番～
        </p>
      </div>
    </section>
  );
};

export default Slide1;

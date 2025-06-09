import React from "react";

const Slide7 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-white p-8 text-gray-800 overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        <h2 className="mb-6 text-center text-5xl font-bold text-green-600 md:text-6xl">
          💰 そして投資対象としての魅力
        </h2>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-center text-3xl font-semibold text-white shadow-lg md:text-4xl">
          技術＋知識 → 未来を拓く武器に！
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute top-0 left-0 h-2 w-full bg-green-500"></div>
            <div className="p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold">専門性を活かして</h3>
              <p className="text-lg text-gray-600">企業・研究で活躍</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute top-0 left-0 h-2 w-full bg-green-500"></div>
            <div className="p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-green-700">
                VCや企業が大注目
              </h3>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl md:col-span-2">
            <div className="absolute top-0 left-0 h-2 w-full bg-green-500"></div>
            <div className="p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold">学術から起業まで</h3>
              <p className="text-lg text-gray-600">社会実装への広がる道</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="relative animate-pulse rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-5 text-2xl font-bold text-white md:text-3xl">
            <div className="absolute -top-3 -left-3 text-3xl">�</div>
            <div className="ml-6">これから10年、量子は絶対アツい</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide7;

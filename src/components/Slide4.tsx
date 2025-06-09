import React from "react";

const Slide4 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-gray-100 p-8 text-gray-800 overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        <h2 className="mb-10 text-5xl font-bold text-orange-600 md:text-6xl text-center">
          📊 EXPECTED – なぜ今やるべきか
        </h2>

        <div className="space-y-6">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <p className="text-center text-2xl font-semibold md:text-3xl">
              技術もビジネスも熱い！
            </p>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-100 to-yellow-100 p-6 shadow-md">
            <p className="text-center text-2xl md:text-3xl">
              次世代の計算機は「量子」が主戦場
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-white p-4 shadow-md">
              <p className="mt-2 text-xl font-medium">Google</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md">
              <p className="mt-2 text-xl font-medium">IBM</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md">
              <p className="mt-2 text-xl font-medium">中国政府</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="animate-pulse rounded-xl bg-red-100 p-6 text-center text-2xl font-bold text-red-600 md:text-3xl">
              人材がとにかく足りない
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-center text-3xl font-bold text-white shadow-lg md:text-4xl">
            「物理わかるけど情報苦手」じゃもったいない！
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide4;

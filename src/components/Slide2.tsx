import React from "react";

const Slide2 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-gray-100 p-8 text-gray-800 overflow-hidden">
      <div className="relative z-10 max-w-4xl">
        <h2 className="mb-10 text-5xl font-bold text-indigo-600 md:text-6xl text-center">
          WILL – なぜ学びたいのか
        </h2>

        <div className="space-y-6 text-center">
          <p className="text-2xl md:text-3xl">量子の世界が技術になった</p>
          <div className="rounded-lg bg-indigo-50 p-6 shadow-inner">
            <p className="italic text-2xl md:text-3xl mb-4">
              「ご冗談でしょう、ファインマンさん」が現実に
            </p>
            <div className="text-4xl">📚 → 💻</div>
          </div>
          <p className="text-2xl md:text-3xl">
            見たことない世界に飛び込むワクワク感
          </p>
          <div className="mt-8 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-3xl font-bold text-white shadow-lg md:text-4xl">
            知識じゃなく、好奇心がドライブ
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide2;

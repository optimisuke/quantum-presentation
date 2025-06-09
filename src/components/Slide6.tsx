import React from "react";

const Slide6 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-gray-100 p-8 text-gray-800 overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        <h2 className="mb-6 text-center text-5xl font-bold text-purple-600 md:text-6xl">
          融合領域としての魅力
        </h2>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 p-4 text-center text-3xl font-semibold text-white shadow-lg md:text-4xl">
          量子コンピュータとは数学・物理学・情報工学の「融合」だ！
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-white p-3 shadow-md">
            <p className="text-xl">すべてを活かせる珍しいフィールド</p>
          </div>

          <div className="rounded-lg bg-white p-3 shadow-md">
            <p className="text-xl">ハードもソフトも手を出せる余地がたくさん</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="animate-pulse rounded-xl bg-purple-700 p-5 text-2xl font-bold text-white md:text-3xl">
            💡 「物理出身で良かった！」と思える場所
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide6;

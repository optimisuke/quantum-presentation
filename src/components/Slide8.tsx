import React from "react";

const Slide8 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 p-8 text-center text-white">
      <div className="relative z-10">
        <h2 className="mb-10 text-5xl font-bold md:text-6xl">
          まとめ & メッセージ
        </h2>

        <div className="mx-auto max-w-3xl space-y-6">
          <div className="transform rounded-xl bg-white/10 p-5 shadow-lg backdrop-blur-sm transition-all hover:scale-105">
            <p className="text-xl font-semibold md:text-2xl">
              量子コンピュータは、あなたにぴったりのフロンティア！
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="transform rounded-xl bg-white/10 p-5 shadow-lg backdrop-blur-sm transition-all hover:scale-105">
              <p className="text-xl md:text-2xl">
                ワクワクする物理を、現実世界に役立てよう
              </p>
            </div>

            <div className="transform rounded-xl bg-white/10 p-5 shadow-lg backdrop-blur-sm transition-all hover:scale-105">
              <p className="text-xl md:text-2xl">
                すでにある知識と直感が大きな武器になる
              </p>
            </div>
          </div>

          <div className="transform rounded-xl bg-gradient-to-r from-purple-500/70 to-indigo-500/70 p-5 shadow-lg backdrop-blur-sm transition-all hover:scale-105">
            <p className="text-xl md:text-2xl">
              難しいけど面白い。
              <span className="font-bold">だからこそ挑戦する価値がある！</span>
            </p>
          </div>
        </div>

        <div className="mt-10 animate-bounce">
          <div className="rounded-full bg-white/20 p-6 backdrop-blur-md">
            <p className="text-3xl font-extrabold md:text-4xl">
              ✨ &ldquo;あなたの量子直感、いまこそ活かそう&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide8;

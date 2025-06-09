import React from "react";

const Slide5 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-white p-8 text-gray-800 overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        <h2 className="mb-6 text-center text-5xl font-bold text-cyan-600 md:text-6xl">
          パラダイムシフト
        </h2>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-center text-3xl font-semibold text-white shadow-lg md:text-4xl">
          これは「デジタルから量子」への大転換
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-medium">古典ビット</span>
            </div>
            <div className="text-4xl">➡️</div>
            <div className="flex items-center space-x-4">
              <div>
                <span className="text-2xl font-medium text-cyan-700">
                  量子ビット
                </span>
                <br />
                <span className="text-lg">(0と1の重ね合わせ)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-medium">決定論</span>
            </div>
            <div className="text-4xl">➡️</div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-medium text-cyan-700">確率論</span>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-medium">論理ゲート</span>
            </div>
            <div className="text-4xl">➡️</div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-medium text-cyan-700">
                ユニタリ変換
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="animate-pulse rounded-full bg-cyan-600 p-6 text-3xl font-bold text-white md:text-4xl">
            🌍 計算のあり方が根本から変わる
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide5;

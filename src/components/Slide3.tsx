import React from "react";

const Slide3 = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-white p-8 text-gray-800 overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        <h2 className="mb-8 text-5xl font-bold text-teal-600 md:text-6xl text-center">
          📐 CAN – なぜ自分にできるのか
        </h2>

        <div className="mb-8 flex items-center justify-center">
          <p className="text-center text-2xl font-semibold md:text-3xl">
            あなたのバックグラウンドは超強み！
          </p>
        </div>

        <div className="w-full max-w-2xl overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full border-collapse text-xl md:text-2xl">
            <thead>
              <tr className="bg-gradient-to-r from-teal-500 to-teal-400 text-white">
                <th className="border border-teal-300 p-4 text-left">分野</th>
                <th className="border border-teal-300 p-4 text-left">
                  すでに学んできたこと
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-teal-50 transition-colors">
                <td className="border border-teal-100 p-4 font-medium">数学</td>
                <td className="border border-teal-100 p-4">
                  行列・線形代数・固有値
                </td>
              </tr>
              <tr className="bg-teal-50 hover:bg-teal-100 transition-colors">
                <td className="border border-teal-100 p-4 font-medium">物理</td>
                <td className="border border-teal-100 p-4">
                  波動関数・測定問題・直感
                </td>
              </tr>
              <tr className="bg-white hover:bg-teal-50 transition-colors">
                <td className="border border-teal-100 p-4 font-medium">情報</td>
                <td className="border border-teal-100 p-4">
                  論理回路・プログラミング・思考力
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="rounded-full bg-teal-600 p-6 text-3xl text-white font-bold md:text-4xl animate-pulse">
            🔧 すべてが量子コンピューティングに直結！
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide3;

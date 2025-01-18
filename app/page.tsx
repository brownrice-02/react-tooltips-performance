"use client";
import { useState } from "react";
import { products } from "./mockData";

export default function Home({ data = products }) {

  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                產品名稱
              </th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">
                銷售量
              </th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">
                庫存
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap relative">
                  <div
                    className="inline-block cursor-help"
                    onMouseEnter={() => setActiveTooltip(item.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    {item.name}
                    {activeTooltip === item.id && (
                      <div className="absolute z-10 px-3 py-2 text-sm bg-gray-800 text-white rounded shadow-lg 
                        bottom-full mb-2 -ml-2 max-w-xs">
                        {item.tooltip}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  {item.sales}
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  {item.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

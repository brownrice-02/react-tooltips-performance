// mockData.ts
import { Product } from "@/types";

const productPrefixes = ["iPhone", "MacBook", "iPad", "Apple Watch", "AirPods"];
const productSuffixes = ["Pro", "Air", "Max", "Ultra", "Mini"];
const chipsets = ["A16", "M2", "M3", "S9", "H2"];

const generateSales = (index: number): number => {
  return 1000 + (index * 73) % 4000;
};

const generateStock = (index: number): number => {
  return 50 + (index * 47) % 250;
};

export const products: Product[] = Array.from({ length: 50 }, (_, index) => {
  const prefixIndex = index % productPrefixes.length;
  const suffixIndex = Math.floor(index / productPrefixes.length) % productSuffixes.length;
  const chipIndex = index % chipsets.length;
  
  const name = `${productPrefixes[prefixIndex]} ${productSuffixes[suffixIndex]}`;
  const sales = generateSales(index);
  const stock = generateStock(index);
  
  return {
    id: index + 1,
    name,
    sales,
    stock,
    tooltip: `搭載 ${chipsets[chipIndex]} 晶片，提供卓越性能和效率`
  };
});
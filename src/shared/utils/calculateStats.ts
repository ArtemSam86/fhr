import type { ExtractorFn } from '../types/common.ts';

interface IPlayer {
  name: string;
  goals: number;
}
interface IStats {
  min: number;
  max: number;
  average: number;
}

// Функциональный подход
export const calculateStats = <P>(
  values: P[],
  extractor: ExtractorFn<P, number>
): IStats | null => {
  if (!values.length) return null;
  const valuesExtracted = values.map(extractor);
  const min = Math.min(...valuesExtracted);
  const max = Math.max(...valuesExtracted);
  const average =
    valuesExtracted.reduce((acc, el) => acc + el, 0) / valuesExtracted.length;

  return { min, max, average };
};

// Классовый подход
// Класс со статическими методами. Можно добавлять различные виды калькуляции
export class Calculate {
  static stats<P>(
    values: P[],
    extractor: ExtractorFn<P, number>
  ): IStats | null {
    if (!values.length) return null;
    const valuesExtracted = values.map(extractor);
    const min = Math.min(...valuesExtracted);
    const max = Math.max(...valuesExtracted);
    const average =
      valuesExtracted.reduce((acc, el) => acc + el, 0) / valuesExtracted.length;

    return { min, max, average };
  }
}

// Класс калькулятор со своими общими методами, который можно расширять с помощью интерфейсов
interface ICalculateStats {
  calculateStats<P>(
    values: P[],
    extractor: ExtractorFn<P, number>
  ): IStats | null;
}
interface ICalculator extends ICalculateStats {
  sum(x: number, y: number): number;
}
class Calculator implements ICalculator {
  sum(x: number, y: number): number {
    return x + y;
  }
  calculateStats<P>(
    values: P[],
    extractor: ExtractorFn<P, number>
  ): IStats | null {
    if (!values.length) return null;
    const valuesExtracted = values.map(extractor);
    const min = Math.min(...valuesExtracted);
    const max = Math.max(...valuesExtracted);
    const average =
      valuesExtracted.reduce((acc, el) => acc + el, 0) / valuesExtracted.length;

    return { min, max, average };
  }
}

// TESTS
// Test data
const players: IPlayer[] = [
  { name: 'Иванов', goals: 10 },
  { name: 'Петров', goals: 15 },
  { name: 'Сидоров', goals: 25 },
];

// 1
let stats = calculateStats(players, (p) => p.goals);
console.log(stats);
let statsNull = calculateStats([] as IPlayer[], (p) => p.goals);
console.log(statsNull);

// 2
stats = Calculate.stats(players, (p) => p.goals);
console.log(stats);
statsNull = Calculate.stats([] as IPlayer[], (p) => p.goals);
console.log(statsNull);

// 3
const calculator = new Calculator();
stats = calculateStats(players, (p) => p.goals);
console.log(stats);
statsNull = calculator.calculateStats([] as IPlayer[], (p) => p.goals);
console.log(statsNull);

import { useState } from "react";

export default function PermutationCalculator() {
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [result, setResult] = useState(null);

  const factorial = (num) => {
    if (num < 0) return 0;
    return num <= 1 ? 1 : num * factorial(num - 1);
  };

  const calculatePermutation = () => {
    if (n >= r) {
      const value = factorial(n) / factorial(n - r);
      setResult(value);
    } else {
      setResult("'n' deve ser maior ou igual a 'r'");
    }
  };

  return (
    <>
        <h2 className="text-xl font-bold">Calculadora de Permutação</h2>
        <div className="flex flex-col gap-2">
          <label className="font-medium">n (total de elementos)</label>
          <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">r (elementos escolhidos)</label>
          <input type="number" value={r} onChange={(e) => setR(Number(e.target.value))} />
        </div>
        <button onClick={calculatePermutation}>Calcular</button>
        {result !== null && (
          <div className="text-lg font-semibold mt-4">Resultado: {result}</div>
        )}
    </>
  );
}
import React, { useState } from "react";

const fatorial = (n) => {
  if (n <= 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= n; i++) resultado *= i;
  return resultado;
};

// Conta ocorrências de cada letra
const contarLetras = (str) => {
  const map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
};

// Permutações únicas (sem repetição de letras iguais)
const calcularAnagramasUnicos = (str) => {
  const contagem = contarLetras(str);
  const numerador = fatorial(str.length);
  const denominador = Object.values(contagem).reduce(
    (acc, val) => acc * fatorial(val),
    1
  );
  return numerador / denominador;
};

export default function AnagramCalculator() {
  const [palavra, setPalavra] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleCalculate = () => {
    const limpaPalavra = palavra.trim().toLowerCase().replace(/\s+/g, "");
    if (!limpaPalavra) return;

    const totalSemRepeticao = calcularAnagramasUnicos(limpaPalavra);
    const totalComRepeticao = Math.pow(limpaPalavra.length, limpaPalavra.length);

    setResultado({
      totalComRepeticao,
      totalSemRepeticao,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma palavra"
        value={palavra}
        onChange={(e) => setPalavra(e.target.value)}
      />

      <button
        onClick={handleCalculate}
      >
        Calcular
      </button>

      {resultado && (
        <div>
          <p>
            <strong>Combinatória com repetição (teórica):</strong>{" "}
            {resultado.totalComRepeticao.toLocaleString()}
          </p>
          <p>
            <strong>Anagramas únicos (sem repetição de letras iguais):</strong>{" "}
            {resultado.totalSemRepeticao.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};
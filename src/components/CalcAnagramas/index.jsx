import { useState } from "react"

const fatorial = (num) => {
    let fat = 1;
    for (let i = num; i > 1; i--) {
        fat *= i;
    }
    return fat
}

const calcularAnagramas = (p) => {
    const letras = p.toLowerCase().split("");
    const tamanhoPalavra = letras.length;
  
    // Contar as repetições de cada letra
    const frequencia = {};
    letras.forEach((letra) => {
      frequencia[letra] = (frequencia[letra] || 0) + 1;
    });
  
    // Numerador: totalLetters!
    const numerador = fatorial(tamanhoPalavra);
  
    // Denominador: produto dos fatoriais das frequências
    const denominador = Object.values(frequencia).reduce(
      (acc, count) => acc * fatorial(count),
      1
    );
  
    return numerador / denominador;
}

export default function CalcAnagramas() {
    const [palavra, setPalavra] = useState("")
    const [resultado, setResultado] = useState(null)

    const handleChange = (e) => {
        const value = e.target.value;
        setPalavra(value);
        if (value) {
          const anagrams = calcularAnagramas(value);
          setResultado(anagrams);
        } else {
          setResultado(null);
        }
      };
    return (
        <>
            <form>
                <input type="text" placeholder="Insira a palavra" value={palavra} onChange={handleChange}/>
            </form>

            <p>Ela tem {resultado.toLocaleString()} letras duplicadas.</p>
        </>
    )
}
import React, { useState } from "react";

export default function CalcCombinacao() {
    const [ elementos, setElementos ] = useState(0)
    const [ posicoes, setPosicoes ] = useState(0)
    const fatorial = (num) => {
        let fat = 1;
        for (let i = num; i > 1; i--) {
            fat *= i;
        }
        return fat
    }

    const combinacao = (elementos, posicoes) => {
        let resultado = fatorial(elementos) / (fatorial(posicoes) * fatorial(elementos - posicoes))
        return Math.round(resultado)
    }
    
    return (
        <>
            <form>
                <input type="number" placeholder="Quantidade de elementos" onChange={(ev) => setElementos(ev.target.value)}/>
                <br />
                <input type="number" placeholder="Quantidade de posições" onChange={(ev) => setPosicoes(ev.target.value)} />
            </form>

            <div>
                <p>O fatorial de {elementos} é {fatorial(elementos)}</p>
                <p>A combinação de {elementos} elementos para {posicoes} posições, é {combinacao(elementos, posicoes)}</p>
            </div>
        </>
    )
}
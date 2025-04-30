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
        <div style={{ position: "relative", top: "64px" }}>
            <form>
                <input type="number" placeholder="Quantidade de elementos" onChange={(ev) => setElementos(ev.target.value)}/>
                <br />
                <input type="number" placeholder="Quantidade de posições" onChange={(ev) => setPosicoes(ev.target.value)} />
            </form>

            <div>
                {
                    Number(posicoes) > Number(elementos) ? <p style={{ color: "red", fontWeight: "bold" }}>N(elementos) não pode ser menor que P(posições).</p> :
                    <p>A combinação de {elementos} elementos para {posicoes} posições, é {combinacao(elementos, posicoes)}</p>
                }
            </div>
        </div>
    )
}
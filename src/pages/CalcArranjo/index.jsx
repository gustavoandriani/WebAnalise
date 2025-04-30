import React, { useState } from "react"

export default function CalcArranjo() {
    const[elementos, setElementos] = useState(0)
    const[posicoes, setPosicoes] = useState(0)

    const submitForm = (ev) => {
        ev.preventDefault()
    }

    const fatorial = (num) => {
        let fat = 1;
        for (let i = num; i > 1; i--) {
            fat *= i;
        }
        return fat
    }

    const arranjoSimples = (elementos, posicoes) => {
        let resultado = fatorial(elementos) / fatorial(elementos - posicoes)
        return Math.round(resultado)
    }

    const arranjoRepeticao = (elementos, posicoes) => {
        return Math.pow(elementos, posicoes)
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
                    Number(posicoes) > Number(elementos) ? <p style={{ color: "red", fontWeight: "bold" }}>N(elementos) não pode ser menor que P(posições).</p> : <p>O arranjo simples de {elementos} elementos para {posicoes} posições, é {arranjoSimples(elementos, posicoes)} 
                    <br /> 
                    O arranjo c/ repetição de {elementos} elementos para {posicoes} posições, é {arranjoRepeticao(elementos, posicoes)}</p>
                }
            </div>
        </div>
    )

}
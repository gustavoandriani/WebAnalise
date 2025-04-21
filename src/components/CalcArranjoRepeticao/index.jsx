import React, { useState } from "react"
export default function CalcArranjoRepeticao() {
    const[elementos, setElementos] = useState(0)
    const[posicoes, setPosicoes] = useState(0)

    const arranjoRepeticao = (elementos, posicoes) => {
        return Math.pow(elementos, posicoes)
    }

    return (
        <>
        <form>
            <input type="number" placeholder="Quantidade de elementos" onChange={(ev) => setElementos(ev.target.value)}/>
            <br />
            <input type="number" placeholder="Quantidade de posições" onChange={(ev) => setPosicoes(ev.target.value)} />
        </form>

        <div>
            <h1>O fatorial de {elementos} é {fatorial(elementos)}</h1>
            <h1>O arranjo c/ repetição de {elementos} elementos para {posicoes} posições, é {arranjoRepeticao(elementos, posicoes)}</h1>
        </div>
    </>
    )
}
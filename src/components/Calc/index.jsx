import React, { useState } from "react"

export default function Calc() {
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

    const combinacao = (elementos, posicoes) => {
        let resultado = fatorial(elementos) / (fatorial(posicoes) * fatorial(elementos - posicoes))
        return Math.round(resultado)
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <input type="number" placeholder="Digite a quantidade de elementos" onChange={(ev) => setElementos(ev.target.value)}/>
                <br />
                <input type="number" placeholder="Digite a quantidade de posições" onChange={(ev) => setPosicoes(ev.target.value)} />
            </form>

            <div>
                <h1>O fatorial de {elementos} é {fatorial(elementos)}</h1>
                <h1>O arranjo simples de {elementos} elementos para {posicoes} posições, é {arranjoSimples(elementos, posicoes)}</h1>
                <h1>O arranjo c/ repetição de {elementos} elementos para {posicoes} posições, é {arranjoRepeticao(elementos, posicoes)}</h1>
                <h1>A combinação de {elementos} elementos para {posicoes} posições, é {combinacao(elementos, posicoes)}</h1>
            </div>
        </>
    )

}
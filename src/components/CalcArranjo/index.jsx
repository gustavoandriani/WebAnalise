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
        <>
            <form>
                <input type="number" placeholder="Quantidade de elementos" onChange={(ev) => setElementos(ev.target.value)}/>
                <br />
                <input type="number" placeholder="Quantidade de posições" onChange={(ev) => setPosicoes(ev.target.value)} />
            </form>

            <div>
                <p>O fatorial de {elementos} é {fatorial(elementos)}</p>
                <p>O arranjo simples de {elementos} elementos para {posicoes} posições, é {arranjoSimples(elementos, posicoes)}</p>
                <p>O arranjo c/ repetição de {elementos} elementos para {posicoes} posições, é {arranjoRepeticao(elementos, posicoes)}</p>
            </div>
        </>
    )

}
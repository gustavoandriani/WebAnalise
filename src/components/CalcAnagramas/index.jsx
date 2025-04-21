import { useState } from "react"

export default function CalcAnagramas() {
    const [ palavra, setPalavra ] = useState("")
    
    const tamanhoPalavra = (p) => {
        return p.length
    }

    const letrasDuplicadas = (p) => {
        let palavraOrdenada = p.sort
        return palavraOrdenada
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Insira a palavra" onChange={(ev) => setPalavra(ev.target.value)}/>
            </form>

            <p>A palavra {palavra}, tem {tamanhoPalavra(palavra)} letras.</p>
            <p>Ela tem {letrasDuplicadas(palavra)} letras duplicadas.</p>
        </>
    )
}
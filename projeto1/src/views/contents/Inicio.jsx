import React from "react"
import Logo from "./imagens/githubinho.png"
import './estilo.css'

const Inicio = props => (
    <main className="Inicio">
        <div>
            <h1>Projeto PWI</h1>
            <br />
            <h2>O GitHub</h2> 
            <img src={Logo} />
        </div>
    </main>
)

export default Inicio
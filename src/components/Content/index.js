import "./styles.css";

import React, { useState } from "react";

export default function Content() {
    const [ email, setEmail ] = useState("");

    function handleSubmit() {
        localStorage.setItem('email:', email);
    }

    return (
        <div className="content-container">
            <div className="content-image">
                <h1>SEMANA DO CAFÉ</h1>
                <h2>02 a 06 de Agosto</h2>
            </div>
            <div className="subscription-container">
                <h1>CADASTRE SEU E-MAIL</h1>
                <h3>Não perca PROMOÇÃO ESPECIAL diária durante a semana do café</h3>
                <form className="subscription">
                    <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <button type="button" onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    );

}
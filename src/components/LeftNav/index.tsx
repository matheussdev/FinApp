import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/finapplogo.svg"

import { Container } from "./style";

export function LeftNav(){
    const [location, setLocation] =useState(window.location.pathname)
    const locationUrl = window.location.pathname;
    useEffect(()=>{
        setLocation(locationUrl)
    },[locationUrl])

    return(
        <Container>
            <div>
                <img src={logo} height="90%" alt="Fin App - o seu aplicativo de finanças"/>
            </div>
            <div>
                <ul>
                    {location ==="/"?(<li><Link to="/" className="active" onClick={()=>setLocation("/")}>Dashboard</Link></li>):(<li><Link onClick={()=>setLocation("/")} to="/">Dashboard</Link></li>)}
                    {location ==="/extrato-detalhado"?(<li><Link to="/extrato-detalhado" onClick={()=>setLocation("/extrato-detalhado")} className="active">Transações</Link></li>):(<li><Link onClick={()=>setLocation("/extrato-detalhado")} to="/extrato-detalhado">Transações</Link></li>)}
                    <li><Link to="/">Gráficos</Link></li>
                    <li><Link to="/">Relatórios</Link></li>
                    <li><Link to="/">Cofre</Link></li>
                    <li><Link to="/">Gastos diários</Link></li>
                    <li><Link to="/">Minha metas</Link></li>
                </ul>
            </div>
        </Container>
    )
}
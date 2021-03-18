import styled from "styled-components";
import { darken, transparentize } from "polished"

export const Container = styled.form`
    h2 {
        color:var(--SecondaryColor);
        font-size:1.5rem;
        margin-bottom:2rem;
    }

    input {
        width:100%;
        padding:0 1.5rem;
        height:4rem;
        border-radius:0.25rem;

        border:1px solid #d7d7d7;
        background:#e7e9ee;

        font-weight:400;
        font-size: 1rem;

        &::placeholder{
            color:#999
        }
        & + input{
             margin-top:1rem;
        }
         
    }
    button[type="submit"] {
        width:100%;
        padding:0.5rem;
        color:#fff;

        background:var(--color-button-success);
        height:4rem;
        border-radius:0.25rem;
        border:0;
        font-size:1rem;
        margin-top:1.5rem;
        font-weight:600;

        transition: filter 0.3s;

        &:hover{
            filter:brightness(0.9);
        }

    }
    
`

export const TrasactionTypeContainer = styled.div`
    margin:1rem 0;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:0.5rem;

`
interface RadioBoxProps{
    isActive:boolean;
    activecolor: "green" | "red";
}

export const RadioBox = styled.button<RadioBoxProps>`
    height:4rem;
        border: 1px solid #d7d7d7;
        border-radius:0.25rem;

        background:${(props)=> props.isActive ? transparentize( 0.8 ,props.activecolor) : 'transparent'};

        display:flex;
        justify-content:center;
        align-items:center;

        font-size:1rem;
        color: ${transparentize( 0.4, '#000000')};

        transition: border 0.3s;

        &:hover{

            border: 1px solid ${darken(0.1, '#d7d7d7')};

        }
`
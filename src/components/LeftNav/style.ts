import styled from "styled-components"

export const Container = styled.nav`
    display: flex;
    flex-direction : column;
    height: 100%;
    width: 100%;
    background:var(--color-white);
    -webkit-box-shadow: 1px 1px 20px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 1px 1px 20px 0px rgba(0,0,0,0.15);
    box-shadow: 1px 1px 20px 0px rgba(0,0,0,0.15);


    >div:first-child{
        height:3rem;
        color: var(--color-white);
        display: flex;
        align-items: center;
        padding:0.25rem 1rem;
        font-size:1.5rem;
        font-weight:600;
        background:var(--color-secondary)
    }

    >div:last-child{
        width:100%;

        ul{
            list-style: none;
            width:100%;
            padding:1rem;
            display:grid;
                grid-template-columns:1fr;

                gap:0.25rem;

            li{
                
                display:flex;
                a{
                    text-decoration:none;
                    color:var(--color-secondary);
                    background:var(--color-white);
                    width: 100%;
                    
                    padding:1rem 1rem; 
                    border-radius:0.25rem;
                    &:hover{
                        filter:brightness(0.95)
                    }

                    &.active{
                        filter:brightness(0.9)
                    }
                }
            }
        }
    }
`
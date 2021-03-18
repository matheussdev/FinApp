import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    background:linear-gradient(to right,#41012f 14%,#6f0039 51%,#41012f 88%), var(--color-secondary);
    padding: 1.25rem 1rem 5rem;

    .content{
        display:flex;
        justify-content:space-between;
        width:100%;
        max-width:1080px;
        margin:0 auto;
        padding:0 1rem;

        >div:first-child{
            display:flex;
            flex-direction:column;
            justify-content:center;
            h6{ 
                color:var(--color-white);
                font-size:1.25rem;
            }
            span{
                color:var(--color-white);
                font-size:0.85rem;
            }
        }
        >div:last-child{
            display:flex;
            align-items:center;
            button{
                border: 2px solid #6f0090;
                border-radius:0.5rem;
                padding:0.25rem 1rem;
                
                background:transparent;

                color:var(--color-white);

                filter:brightness(0.7);

                font-size:1.25rem;

                transition: filter 0.2s;

                &:first-child{
                    margin-right:1rem;
                }
                &:hover{
                    filter:brightness(1);
                }
            }
        }
    }
`
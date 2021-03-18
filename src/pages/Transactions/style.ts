import styled from "styled-components";

export const Container = styled.section`
    height:calc(100% - 8.75rem);
    table{
        max-width: 1080px;
        margin:-3rem auto 0; 
        /* padding:0 1rem; */
        width:100%;
        display:flex;
        height:100%;
        flex-direction: column;

        thead{

            border-top: 1px solid var(--color-white);
            display:grid;
            width:100%;
            grid-template-columns:1fr 0.5fr 0.5fr 0.5fr;
            height:3rem;
            margin:0 0rem 0.5rem;
            th{
                display:flex;
                /* justify-content:center; */
                align-items:center;
                font-size:1.25rem;
                color:var(--color-white);
                padding:0 1rem;

            }
        }
        .overflowTable{
            overflow-y:auto;
            max-height:calc(100vh - 13.75rem);
            overflow-x:visible;
            padding:1rem 1rem;
            display:flex;
            flex-direction : column-reverse;
            tr{
                +tr{margin-bottom:1rem;}
                display:grid;
                width:100%;
                grid-template-columns:1fr 0.5fr 0.5fr 0.5fr;

                background-color:var(--color-white);
                border-radius:0.5rem;

                -webkit-box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
                -moz-box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
                box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
                td{
                    display:flex;
                    /* justify-content:center; */
                    align-items:center;
                    font-size:1.25rem;
                    color:var(--secondary);
                    font-weight:400;


                    padding:1.25rem 1rem;
                }
            }

            :-webkit-scrollbar-track {
              background-color: #F4F4F4;
            }
            ::-webkit-scrollbar {
              width: 5px;
            
              background: #F4F4F4;
            }
            ::-webkit-scrollbar-thumb {
              background: #b6b6b685;
              border-radius: 3rem;
            }
        }
        
    }

`
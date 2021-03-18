import styled from "styled-components";

export const Container = styled.section`
height:calc(100% - 3rem);
/* background:#333; */

.contentDashboard {
    width:100%;
    max-width:1180px;
    height:calc(50% - 5.75rem);

    margin:-3rem auto 0;
    padding: 0 1rem;
    
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

    gap: 1rem;
    /* margin-bottom :4rem; */
    
    
    >div{
        /* max-height:300px;  */
        /* height:calc(100% - 1rem); */
        background-color:var(--color-white);
        -webkit-box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
        -moz-box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
        box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
        /* height: 100%; */

        padding:1rem;

        display:flex;
        justify-content:center;
        flex-direction:column;

        border-radius:0.8rem;
        /* height:100% */

        h4{
            font-size:1.5rem;
            color:var(--text-in-white);
        }
        h2{
            font-size:3rem;
            font-weight:800;
            color:var(--color-button-success);
        }
        div{

        
        > a{
            display:block;
            width:fit-content;
            background:transparent;
            color:var(--color-primary);
            font-weight:500;
            text-decoration:none;

            margin-top:0.5rem;
            padding:0.5rem 1rem;

            border: 2px solid var(--color-primary);
            border-radius:0.5rem;

            transition: all 0.3s;

            &:hover{
                background: var(--color-primary);
                color: var(--color-white);
                -webkit-box-shadow: 2px 2px 20px 1px rgba(0,0,0,0.30);
                -moz-box-shadow: 2px 2px 20px 1px rgba(0,0,0,0.30);
                box-shadow: 2px 2px 20px 1px rgba(0,0,0,0.30);
            }
        }
        }

        ul{
            width:100%;
            
            li{
                list-style:none;


                border-left: 0.25rem solid var(--background);
                padding: 0.5rem 1rem 0 0.5rem;

            }
            a{
                display: flex;
                color: var(--color-primary);
                border-left: 0.25rem solid var(--color-primary);
                padding: 0.5rem 0.5rem 0rem 0.5rem;
            }

        }
    }
}

.chartSpendDayContainer{
    width:100%;
    max-width:1180px;
    height:calc(50% - 2.75rem);


    margin: 1rem auto;
    padding: 0 1rem;
    
    display:grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    >div{
        background-color:var(--color-white);
        -webkit-box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
        -moz-box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
        box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.20);
        /* height: 100%; */

        padding:1rem;

        display:flex;
        justify-content:center;
        flex-direction:column;

        border-radius:0.8rem;
        /* height:100% */

        h4{
            font-size:1.5rem;
            color:var(--text-in-white);
        }
        h2{
            font-size:3rem;
            font-weight:800;
            color:var(--color-button-success);
        }
    }
}

`
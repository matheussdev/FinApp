import { createGlobalStyle } from "styled-components"

export  const GlobalStalye = createGlobalStyle`
    :root{
        --background:#EFEFEF;
        --color-white:#FFF;
        --color-primary: #4A1931;
        --color-secondary:#57002F;
        --color-button-success:rgb(47, 161, 47);
        --text-in-white:#525252;
        --color-focus-in-white:#358D06;
        --color-button-danger:#D90000;
        --color-button-danger-border: #660000;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        font-size: 16px;

        @media (max-width: 1080px){
            font-size:93.75%;
        }
        @media (max-width: 720px){
            font-size:87.5%;
        }
    }

    body{
        background:var(--background);
        -webkit-font-smoothing:antialiased;
    }
    button{
        cursor:pointer;
    }
    [disabled]{
        opacity:0.6;
        cursor:not-allowed;

    }

    body, button, input, textarea{
        font-family: 'Inter', sans-serif;
        font-weight:400;

    }

    h1,h2,h3,h4,h5, h6, strong{
        font-weight:600;
    }

    #root{
        height:100vh;
        display: grid;
        grid-template-columns: 0.25fr 1fr;

        >div{
            height:100%;
        }
    }


    .react-modal-overlay{

        background:rgba(0,0,0, 0.5);
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;

        display:flex;
        align-items:center;
        justify-content:center;

    }
    .react-modal-content{
        width:100%;
        max-width:576px; 

        background:var(--background);

        padding: 3rem;
        position: relative;

        border-radius:0.25rem;
    }
`
import styled from 'styled-components';

export const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    margin-top: 5rem;
    @media (min-width: 992px){
        display : flex;
        grid-auto-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

export const Imagen = styled.img`
    max-width : 100%;
    margin-top : 5rem;
    margin: 0 auto;
`

export const Heading = styled.h2`
    font-family : 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 52px;
    margin-bottom : 50px;
    margin-top:20px;
    width:400px;

    @media(max-width: 768px){
        margin: 0 auto;
        padding: 10px;
        margin-top: 2rem;
    }

    &::after{
        content : '';
        width: 100px;
        height : 6px;
        background-color: #66A2FE;
        display : block;
    }

`

export const Button = styled.input`
    margin-top: 20px;
    font-weight : bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius: 10px;
    color:#FFF;
    cursor: pointer;
`

export const Label = styled.label`
    font-family : 'Bebas Neue', cursive;
    color : #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size : 2.4rem;
    margin-top: 2rem;
    display: block;
`

export const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius:10px;
    border: none;
    font-size: 1.2rem;
`

export const MensajeError = styled.p`
    background-color : #b7322c;
    padding: 1rem;
    color : #fff;
    font-size : 30px;
    text-transform: uppercase;
    font-weight : bold;
    text-align: center;
    font-family : 'Bebas Neue', cursive;
`;

export const InfoDiv = styled.div`
    color: #fff;
    font-family : Arial, Helvetica, sans-serif;
    margin: 0 auto;
`;

export const Parrafo = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`

export const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: bold;
    }
`
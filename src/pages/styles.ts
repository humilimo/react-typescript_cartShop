import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Lato&family=Poppins&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Poppins&display=swap');
    font-family: 'Lato', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
}
body{
    background-color: rgba(0,0,0,0.05);
}
a{
    text-decoration: none;
}
`;
export const ProdutosStore = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 150px 100px 50px;
`;

export const Produto = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 10px 3px;
    border: 0;
    height: 500px;
    width: 315px;
    background: rgba(255, 255, 255, 1);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 6px 10px;    
    border-radius: 1rem;
    img{
        width: 150px;
        height: 150px;
        margin: auto;
    }
`;
export const TituloProduto = styled.h3`
    font-size: 1em;
    margin: 0;
    color: black;
`;
export const PrecoProduto = styled.h3`
    margin-top: 5px;
    font-size: 1.5em;
`;
export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 120px;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.04);
    border-radius: 0 0 20px 20px;
    background-color: #fff159;
    box-shadow: 0 0.2px 10px 0.1px;
    position: fixed;
    top: 0;
`;
export const BarraDePesquisa = styled.form`
    display: flex;
    flex-direction: row;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 15px;
    border-radius: 8px;
    width: 30%;
    padding-left: 20px;
    align-items: center;
    margin-left: auto;
`;
export const InputPesquisa = styled.input`
    display: flex;
    background: rgb(255, 255, 255);
    border: 0;
    height: 40px;
    width: 100%;
    &:focus {
    outline: 0; 
    border-color: 0; 
    box-shadow: 0 0 0 0;
  }
`;
export const Lupa = styled.img`
    width: 25px;
    height: 25px;
    margin-top: 3px;
    margin-right: 8px;
`;
export const Logo = styled.img`
    width: 200px;
    height: 60px;
    margin-left: 70px;
`;
export const Carrinho = styled.a`
    display: flex;
    margin-right: 100px;
    margin-left: 30px;
    font-size: 30px;
    color: black;
    text-decoration: none;
    h5{
        font-size: 15px;
        text-align: center;
        color: black;
        width: 20px;
        height: 20px;
        border: 0.3px solid black;
        border-radius: 100%;
        background-color: red;
    }
`;
export const Botao = styled.button`
    background-color: rgba(0, 0, 0.4, 0.02);
    border: 0;
    font-size: 30px;
    margin-top: 20px;
    padding-top: 4px;
    width: 100%;
    :hover{
        cursor: pointer;
        //i want the icon to move a little bit to the right when the mouse is over it
        transition: 0.5s;
        padding-left: 3px;
        padding-right: 3px;
    }
    border-radius: 1rem;
`;
export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
    h4{
        color: greenyellow;
    }
`;
export const Caixa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 10px;
    header {
      padding: 15px 20px;
      font-size: 18px;
      border-bottom: 1px solid #ccc;
      width: 100%;
      text-align: center;
    }
    footer {
        width: 100%;
        border-radius: 0 0 10px 10px;
        padding: 15px 20px;
        background: #ddd;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #555;
        }
        p{
            align-self: flex-end;
            font-size: 15px;
        }
    }
    h1{
        font-size: 20px;
        margin: 10px;
    }
`;
export const Info = styled.div`
    font-size: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        color: #555;

        &:last-child {
          color: rgb(0, 160, 0);//green em rgb(0, 128, 0)
        }
    }
`;
export const FinalizarCompra = styled.button`
    border: 0;
    padding: 15px 0;
    color: white;
    background: #28a745;
    display: block;
    width: 500px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 16px;
    &:hover {
      background: #3bc55b;
      cursor: pointer;
    }
    a{
        text-decoration: none;
        color: white;
    }
`;
// Agradecimento, Detalhes, CaixaFinal
export const BodyFinal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const CaixaFinal = styled.div`
    width: 70%;
    height: 500px;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 6px 10px;    
    background: rgba(255, 255, 255, 1);
    span{
        margin-top: 50px;
        font-size: 60px;
        color: green;
        width: 100%;
        text-align: center;
        margin-bottom: -60px;
    }
`;
export const Agradecimento = styled.div`
    font-size: 10px;
    color: green;
    width: 100%;
    text-align: center;
`;
export const Detalhes = styled.div`
    color: black;
    display: flex;
    height: 50%;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 0.08);
    border-radius: 0 0 10px 10px;
    h1{
        text-align: center;
        border-bottom: 3px solid #ccc;
        padding: 2px 0;
    }
    h2{
        font-size: 17px;
        padding: 0 60px;
        margin-top: 4px;
    }
    span{
        font-size: 16px;
        color: gray;
    }
`;
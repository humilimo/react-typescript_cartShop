import React, {useState} from 'react';
import {getItem , setItem} from '../services/LocalStorageFuncs';
import {BsFillCartFill, BsFillCheckCircleFill} from 'react-icons/bs'
import {Produto, PrecoProduto, TituloProduto, ProdutosStore, Navbar, 
BarraDePesquisa, InputPesquisa, Lupa, Logo, Carrinho, Botao, Descricao,
Container, Info, FinalizarCompra, Caixa, Agradecimento, Detalhes, CaixaFinal, BodyFinal} from './styles';
export const PostPurchase = () => {
    const [data, setData] = useState(getItem('carrinho')||[]);
    const [contador, setContador] = useState(data.length);
    const finalizar = () => {
        setData([]);
        setItem('carrinho', []);
        setContador(0);
    }
    return(
        <>
            <Navbar>
                <a href="/" onClick={finalizar}><Logo src="src\assets\valve.png" alt="" /></a>
                <BarraDePesquisa>
                    <InputPesquisa type="text" placeholder="Procure seu celular"></InputPesquisa>
                    <a href=""><Lupa src="src\assets\lupa.png" alt="" /></a>  
                </BarraDePesquisa>
                <Carrinho href="/cart"><BsFillCartFill/></Carrinho>
            </Navbar>
            <BodyFinal>
                <CaixaFinal>
                    <span>
                        <BsFillCheckCircleFill/>
                    </span>
                    <Agradecimento>
                        <h1>Obrigado por comprar conosco!</h1>
                        <h2>Seu pedido já está sendo processado e chegará em breve!</h2>
                    </Agradecimento>
                    <Detalhes>
                        <h1>Detalhes do pedido</h1>
                        <h2>Itens: <span>{contador}</span></h2>
                        <h2>Subtotal: <span>R${(data.reduce((acc, item) => {
                            return acc + item.price;
                            }, 0)).toFixed(2)}</span></h2>
                        <h2>Frete: <span>R$0.00</span></h2>
                        <h2>Desconto: <span>R$0.00</span></h2>                     
                        <h2>Valor total: <span>R${(data.reduce((acc, item) => {
                            return acc + item.price;
                            }, 0)).toFixed(2)}</span></h2>
                        <h2>Comprador: <span>Luís Felipe Oliveira</span></h2>
                        <h2>Forma de pagamento: <span>PIX</span> </h2>
                        <h2>Endereço de entrega: <span>Travessa Tuyuty, 46, LOJA 001, Recife, Recife/PE - CEP 50030-050</span>  </h2>
                    </Detalhes>
                </CaixaFinal>
            </BodyFinal>
        </>
    )
}


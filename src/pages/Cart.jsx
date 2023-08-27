import React, {useState} from 'react';
import {getItem , setItem} from '../services/LocalStorageFuncs';
import {BsFillCartPlusFill , BsFillCartCheckFill, BsFillCartFill, BsFillCartDashFill} from 'react-icons/bs'
import {Produto, PrecoProduto, TituloProduto, ProdutosStore, Navbar, 
BarraDePesquisa, InputPesquisa, Lupa, Logo, Carrinho, Botao, Descricao,
Container, Info, FinalizarCompra, Caixa} from './styles';
import { Redirect } from 'react-router-dom';

export const Cart = () => {
    const [data, setData] = useState(getItem('carrinho')||[]);
    const [contador, setContador] = useState(data.length);
    const[search, setSearch] = useState('');
    const dataFilter = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

    const removerDoCarrinho = (obj) => {
            const arrFilter = data.filter((e) => e.id !== obj.id);
            setData(arrFilter);
            setItem('carrinho', arrFilter);
            setContador(contador - 1);
    }
    return(
        <div>
            <Navbar>
                <a href="./"><Logo src="src\assets\valve.png" alt="" /></a>
                <BarraDePesquisa>
                    <InputPesquisa type="text" placeholder="Procure seu celular"
                        value={search}
                        onChange = {(e) => setSearch(e.target.value)}>
                    </InputPesquisa>
                    <a href=""><Lupa src="src\assets\lupa.png" alt="" /></a>  
                </BarraDePesquisa>
                <Carrinho href="/cart"><BsFillCartFill/>
                    {
                        contador > 0 ?  <h5>{contador}</h5> : null
                    }
                </Carrinho>
            </Navbar>
            <ProdutosStore>
                {
                    dataFilter.map((item) => {
                        return(
                            <Produto key={item.id}>
                                <img src={item.thumbnail} alt={item.title}/>
                                <TituloProduto>{item.title}</TituloProduto>
                                <Descricao>
                                    <PrecoProduto>R${item.price}</PrecoProduto>
                                    <p>ou em <b>10x</b> de R${item.price/10} <b>sem juros</b></p>
                                    <h4>Frete grátis</h4>
                                </Descricao>
                                <Botao onClick={() => removerDoCarrinho(item)}>
                                    {
                                        <BsFillCartDashFill/>
                                    }
                                </Botao>
                            </Produto>
                        )
                    })
                }
            </ProdutosStore>
            <Caixa>
                <Container>
                    <header>Resumo da compra</header>
                    {   
                        data.length > 0 ?
                        <Info>
                        <div>
                            <span>Sub-total</span>
                            <span>R$ {
                                data.reduce((acc, item) => {
                                    return acc + item.price;
                                 }, 0).toFixed(2)
                                }
                            </span>
                        </div>
                        <div>
                            <span>Frete</span>
                            <span>Gratuito</span>
                        </div>
                        </Info>
                    : <h1>Carrinho vazio</h1>
                    }
                    <footer>
                        <div>
                            <span>Total</span>
                            <span>R$ {
                                data.reduce((acc, item) => {
                                    return acc + item.price;
                                }, 0).toFixed(2)} no pix 
                            </span>
                        </div>
                        <p>ou em 10x de R${(data.reduce((acc, item) => {
                            return acc + item.price;
                            }, 0)/10).toFixed(2)} sem juros
                        </p>
                    </footer>
                </Container>
                {
                  data.length > 0 ?  <a href='/purchase'><FinalizarCompra>Finalizar Compra</FinalizarCompra></a> : null
                }
            </Caixa>
        </div>
    )
}
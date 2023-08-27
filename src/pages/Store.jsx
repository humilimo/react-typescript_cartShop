import React, { useEffect, useState} from 'react';
import {BsFillCartPlusFill , BsFillCartCheckFill, BsFillCartFill} from 'react-icons/bs'
import {getItem, setItem} from '../services/LocalStorageFuncs';
import {Produto, PrecoProduto, TituloProduto, ProdutosStore, Navbar, 
BarraDePesquisa, InputPesquisa, Lupa, Logo, Carrinho, Botao, Descricao} from './styles';
export const Store = () => { 
    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('carrinho') || []);
    const [contador, setContador] = useState(cart.length);
    const[search, setSearch] = useState('');
    const dataFilter = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {

        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular';
            const response = await fetch(url);
            const objJson = await response.json();
            setData(objJson.results);
        }
    fetchApi();
    }, []);
    const handleClick = (obj) => {
        const newCart = cart.find((e) => e.id === obj.id);
        if(newCart){
            const arrFilter = cart.filter((e) => e.id !== obj.id);
            setCart(arrFilter);
            setItem('carrinho', arrFilter);
            setContador(contador - 1);
        }
        else{
            setCart([...cart, obj]);
            setItem('carrinho', [...cart, obj]);
            setContador(contador + 1);
        }
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
                                <Botao onClick={() => handleClick(item)}>
                                    { 
                                        cart.some((itemCart) => itemCart.id === item.id) ? <BsFillCartCheckFill/> : <BsFillCartPlusFill/>
                                    }
                                </Botao>
                            </Produto>
                        )
                    })
                }
            </ProdutosStore >
        </div>
    )
}
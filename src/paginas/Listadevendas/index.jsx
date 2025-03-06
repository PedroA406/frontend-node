import { useEffect, useState, useRef } from 'react'
import api from '../../services/api'
import './style.css'
import { Link } from 'react-router-dom'

function Vendas() {

    const [produtos, setProdutos] = useState([])

    const inputName = useRef()
    const inputdescricao = useRef()
    const inputpreco = useRef()


    async function Vendendo() {

        await api.post('/produtos', {

            name: inputName.current.value+('--> vendido'),
            descricao: inputdescricao.current.value,
            preco: inputpreco.current.value

        })

        getProdutos()


    }

    async function getProdutos(){

        const produtosFromApi = await api.get('/produtos')
        
        setProdutos(produtosFromApi.data)
    
        
      }


      async function deleteProdutos(id) {

        await api.delete(`/produtos/${id}`)
        getProdutos()
    
      }
    
      useEffect(() => {
    
        getProdutos()
    
      }, [])


    return (



        <div className='container'>

            <nav >

                <div className='nave'>
                    <ul>
                        <li><div className='start'> SAFIRA LANCHES</div></li>
                        <li>
                            <Link to='/'>Início</Link>
                        </li>
                        <li>
                            <Link to='/Vendas'>Venda</Link>
                        </li>
                        <li>
                            <Link to='/Home'>Cadastro de Produtos</Link>
                        </li>
                        <li>
                            <a href="login.html">contato</a>
                        </li>
                    </ul>

                </div>
            </nav>

            <br></br>

            <section>



<div className="highlights">
<h1>Realizar Venda</h1>
    
<form className='botao' action="">
        
        <input placeholder='Produto' name='name' type="text" ref={inputName}/>
        <input placeholder='Descrição' name='descricao' type="text" ref={inputdescricao} />
        <input placeholder='Preço' name='preco' type="number" ref={inputpreco}/>
        <button   type='button' onClick={Vendendo}>  Confirmar </button>
      </form>

</div>
<div className="highlights">
<h1>Histórico de Vendas</h1>

{produtos.filter(produto =>
         produto.name.includes("vendido")).map(produto => 




            <div  className='card' >


            <div>
              <p>produto: <span>{produto.name}</span></p>
              <p>Descrição: <span>{produto.descricao}</span></p>
              <p>Preço: <span>{produto.preco} </span></p>
            </div>
            <button onClick={() => deleteProdutos(produto.id)} >  Excluir</button>
          </div>
        )

        }

</div>
</section>



       



        </div >

    )

}

export default Vendas

import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'

function Home() {
  const [produtos, setProdutos] = useState([])

  const inputName = useRef()
  const inputdescricao = useRef()
  const inputpreco = useRef()


  async function createProdutos() {

    await api.post('/produtos', {

      name: inputName.current.value,
      descricao: inputdescricao.current.value,
      preco: inputpreco.current.value

    })

    getProdutos()


  }


  async function getProdutos() {

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
            <li><div className='start'> Safira Lanches</div></li>
            <li>
              <Link to='/'>Início</Link>
            </li>
            <li>
              <Link to='/Vendas'>Venda</Link>
            </li>
            <li>
              <Link to='/Home'>Cadastrar Produtos</Link>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>

        </div>
      </nav>

      <br></br>
      <form action="">
        <h1>Cadastro de produtos</h1>
        <input placeholder='Name' name='name' type="text" ref={inputName} />
        <input placeholder='Descrição' name='descricao' type="text" ref={inputdescricao} />
        <input placeholder='Preço' name='preco' type="text" ref={inputpreco} />
        <button type='button' onClick={createProdutos}>  CADASTRAR </button>
      </form>


      {produtos.map(produto => (

        <div key={produto.id} className='card' >
          <div>
            <p>Nome: <span>{produto.name}</span></p>
            <p>Descrição: <span>{produto.descricao}</span></p>
            <p>Preço: <span>{produto.preco} </span></p>
          </div>
          <button onClick={() => deleteProdutos(produto.id)}> Excluir</button>
        </div>


      ))
      }



    </div >

  )
}

export default Home

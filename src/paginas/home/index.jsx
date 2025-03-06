import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'

function Inicio() {

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


            



        </div >

    )

}

export default Inicio
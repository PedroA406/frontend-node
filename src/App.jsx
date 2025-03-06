import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "./paginas/Cadastro"
import Inicio from "./paginas/home"
import Vendas from "./paginas/Listadevendas"

function App(){
    return(
        <BrowserRouter>

        <Routes> 
        
        <Route  path="/" element={<Inicio />}>  </Route>
        <Route  path="/Home" element={<Home />}>  </Route>
        <Route  path="/Vendas" element={<Vendas />}>  </Route>
        
        </Routes>
    
         </BrowserRouter> 
    )
}

export default App
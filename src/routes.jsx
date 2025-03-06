import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/home";
import Home from "./paginas/home/index";


function AppRoutes(){
    
return(

    <BrowserRouter>

    <Routes> 
    
    <Route  patc="/" element={<Inicio />}>  </Route>
    <Route  patc="/index" element={<Home />}>  </Route>
    
    </Routes>

     </BrowserRouter> 

)

}

export default AppRoutes


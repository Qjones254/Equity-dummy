import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Add'
import App from './App'

function AppRouter(){
    return(
        <BrowserRouter>
       < Routes>
       <Route path="/" element={<App/>}/>
       <Route path="create" element={<Add/>}/>
       </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;
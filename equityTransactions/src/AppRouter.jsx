import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Add'
import App from './App'
import Delete from './Delete'

function AppRouter(){
    return(
        <BrowserRouter>
       < Routes>
       <Route path="/" element={<App/>}/>
       <Route path="create" element={<Add/>}/>
       <Route path="delete/:id" element={<Delete/>}/>
       </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;
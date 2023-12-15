import React from 'react'
import {Routes,Route} from "react-router-dom"
import ReactForm from '../Pages/React/ReactForm'
import BlockChan from '../Pages/React/BlockChan'
import AngularForm from '../Pages/Angular/AngularForm'
import JavascriptForm from '../Pages/Javascript/JavascriptForm'
import PythonForm from '../Pages/Pathon/PaythonForm'


const MainRoutes = () => {
  
  return (
    <div>
        <Routes>
    <Route path='/a' element={<ReactForm/>} />
    <Route path='/angularForm' element={<AngularForm/>} />
    <Route path='/' element={<JavascriptForm/>} />
    <Route path='/a' element={<PythonForm/>} />
    <Route path='/blockchan' element={<BlockChan/>} />
   
        </Routes>
    </div>
  )
}

export default MainRoutes
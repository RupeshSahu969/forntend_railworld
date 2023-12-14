import React from 'react'
import {Routes,Route} from "react-router-dom"
import ReactForm from '../Pages/React/ReactForm'
import BlockChan from '../Pages/React/BlockChan'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
    <Route path='/' element={<ReactForm/>} />
    <Route path='/blockchan' element={<BlockChan/>} />
   
        </Routes>
    </div>
  )
}

export default MainRoutes
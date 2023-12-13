import React from 'react'
import {Routes,Route} from "react-router-dom"
import ReactForm from '../Pages/React/ReactForm'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
    <Route path='' element={<ReactForm/>} />
    <Route path='' element={<ReactForm/>} />
    <Route path='' element={<ReactForm/>} />
    <Route path='' element={<ReactForm/>} />
    <Route path='' element={<ReactForm/>} />
    <Route path='' element={<ReactForm/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes
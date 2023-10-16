import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageForm from '../pages/PageForm'
import PageData from '../pages/PageData'
import Error404 from '../pages/Error404'

function UserRoute() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<PageForm/>}></Route>
            <Route path='/ratings' element={<PageData/>}></Route>
            <Route path='/*' element={<Error404/>}></Route>
        </Routes>
    </div>
  )
}

export default UserRoute

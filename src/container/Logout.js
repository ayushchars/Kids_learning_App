import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Table from './Contents/Table'
import Alpha from './Contents/Alpha'
import Colours from './Contents/Colours'
function Logout() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Table />} />
                <Route path='/Table' element={<Table />} />
                <Route path='/Colours' element={<Colours />} />
                <Route path='/Alpha' element={<Alpha />} />
            </Routes>
        </>
    )
}

export default Logout

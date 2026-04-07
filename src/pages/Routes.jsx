import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Frontend from './Frontend'
import NoPage from '@/components/Misc/NoPage'


const Index = () => {
  return (
    <Routes>       
        <Route path="/*" element={<Frontend/>} />
        <Route path="auth/*" element={<Auth/>} />
        <Route path="dashboard/*" element={<Dashboard/>} />   
        <Route path="*" element={<NoPage/>} />         
    </Routes>
  )
}

export default Index
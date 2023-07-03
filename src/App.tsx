import React, { useState } from 'react'
import './App.css'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Link, Route, Routes, BrowserRouter, Navigate, useLocation } from 'react-router-dom'
import routes from './router'

function App() {
    return (
        <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/' element={<Layout></Layout>} >
                            {routes.map(({ path, component: RouteComp }) => {
                                return <Route key={path} path={path} element={<RouteComp />}></Route>
                            })}
                            <Route path='/home' element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
        </>
    )
}

export default App

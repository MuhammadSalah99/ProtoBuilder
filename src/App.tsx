import React,  { createContext, useEffect, useState} from 'react'
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './utils/useAuth'

import Login from './pages/login/login'
import Register from './pages/register/Register'
import Index from './pages/dashboard'
import PageBuilder from './pages/dashboard/pagebuilder/PageBuilder'
import Home from './pages/home/Home'
import PrivateRoute from './utils/priveRoute'
import { useLocalStorage } from './utils/useLocalStorage'
function App() {
    const {value, setItem, getItem, removeItem} = useLocalStorage()

    const {user, setUser, logout } = useAuth()
    useEffect(() => {
      console.log(user)

    }, [])
    const routes = [

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <PrivateRoute element={<Index/> } />
    },
    {
        path: "/dashboard/pagebuilder",
        element: <PageBuilder />

    }]

    const router = createBrowserRouter(routes)

    return (
        <AuthContext.Provider value={{ user, setUser, logout }} >
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}

export default App

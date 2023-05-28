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
import {User } from './utils/useUser'
import { useLocalStorage } from './utils/useLocalStorage'
function App() {
   

    const [user, setUser] = useState<User | null > (null);
    const { getItem } = useLocalStorage()
    useEffect(() => {
      console.log(user)
      let parsedUser = JSON.parse(getItem('user')) as User
        if(!user) {
            setUser(parsedUser)
        }
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
        <AuthContext.Provider value={{ user, setUser}} >
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}

export default App

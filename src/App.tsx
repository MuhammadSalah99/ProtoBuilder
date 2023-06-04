import React, { createContext, useEffect, useState } from 'react'
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
import { User } from './utils/useUser'
import { useLocalStorage } from './utils/useLocalStorage'
import AdminBlogs from './pages/dashboard/blogs/AdminBlogs'
import CreateBlog from './pages/dashboard/blogs/CreateBlog'
import EditBlogs from './pages/dashboard/blogs/EditBlogs'
function App() {


    const [user, setUser] = useState<User | null>(null);
    const { getItem } = useLocalStorage()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        console.log(user)
        let storedUser = getItem('user')
        if (storedUser != "") {
            let parsedUser: User = JSON.parse(storedUser)
            setTimeout(() => {
                if (!user) {
                    setUser(parsedUser)
                }
                setIsLoading(false);
            }, 1000)
        }
        else {
            setIsLoading(false)
        }
    }, [user])
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
            path: "/:id/dashboard",
            element: <PrivateRoute element={<Index />} />
        },
        {
            path: "/:id/dashboard/pagebuilder",
            element: <PrivateRoute element={<PageBuilder />} />

        },
        {
            path: "/:id/dashboard/blogs",
            element: <PrivateRoute element={<AdminBlogs />} />

        },
        {
            path: "/:id/dashboard/blogs/create",
            element: <PrivateRoute element={<CreateBlog />} />
        },
        {
            path: "/:id/dashboard/blogs/:blogId/edit",
            element: <PrivateRoute element={<EditBlogs />} />
        },
    ]

    const router = createBrowserRouter(routes)
    if (isLoading) {
        return (<div className="text-zinc-500">Loading ...</div>)
    }
    return (
        <AuthContext.Provider value={{ user, setUser }} >
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}

export default App

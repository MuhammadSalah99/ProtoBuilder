import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

import Login from './pages/login/login'
import Register from './pages/register/Register'
import Index from './pages/dashboard'
import PageBuilder from './pages/dashboard/pagebuilder/PageBuilder'
import Landing from './pages/landing/Landing'
import PrivateRoute from './utils/priveRoute'
import { User } from './utils/useUser'
import { useLocalStorage } from './utils/useLocalStorage'
import AdminBlogs from './pages/dashboard/blogs/AdminBlogs'
import CreateBlog from './pages/dashboard/blogs/CreateBlog'
import EditBlogs from './pages/dashboard/blogs/EditBlogs'
import SendMessages from './pages/dashboard/messages/SendMessages'
import AdminProjects from './pages/dashboard/projects/AdminProjects'
import CreateProject from './pages/dashboard/projects/CreateProject'
import EditProject from './pages/dashboard/projects/EditProject'
import Home from './pages/home/Home'
import EditUser from './pages/dashboard/user/EditUser'
import Chat from './pages/dashboard/messages/Chat'
import Blogs from './pages/home/Blogs'
import Blog from './pages/home/Blog'
import UserPro from './pages/home/User'
import BlogsOfUser from './pages/home/BlogsByUser'
import AdminInbox from './pages/dashboard/inbox/AdminInbox'
import Projects from './pages/home/Projects'
import Project from './pages/home/Project'
import ProjectsByUser from './pages/home/ProjecsByUser'
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
            element: <Landing />,
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
        {
            path: "/:id/dashboard/projects",
            element: <PrivateRoute element={<AdminProjects />} />
        },
        {
            path: "/:id/dashboard/projects/create",
            element: <PrivateRoute element={<CreateProject />} />
        },
        {
            path: "/:id/dashboard/projects/:projectId/edit",
            element: <PrivateRoute element={<EditProject />} />
        },
        {
            path: "/:id/dashboard/user/edit",
            element: <PrivateRoute element={<EditUser />} />
        },
        {
            path: '/:id/dashboard/inbox',
            element: <PrivateRoute element={<AdminInbox />} />
        },
        {
            path: '/:id/dashboard/inbox/:cId',
            element: <PrivateRoute element={<AdminInbox />} />
        },
        {
            path: "/explore",
            element: <Home />
        },
        {
            path: '/blogs',
            element: <Blogs />
        },
        {
            path: '/blogs/:blogId',
            element: <Blog />
        },
        {
            path: '/projects',
            element: <Projects />
        },
        {
            path: '/projects/:projectId',
            element: <Project />
        },
        {
            path: '/projects/all/:userId',
            element: <ProjectsByUser />
        },
        {
            path: '/blogs/all/:userId',
            element: <BlogsOfUser />
        },
        {
            path: '/users/:userId',
            element: <UserPro />
        },
        {
            path: "/text/:senderId/:reId",
            element: <Chat />
        },
        {
            path: "/:senderId/message/:reciverId",
            element: <SendMessages />
        }
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Register from './pages/register/Register';
import Login from './pages/login/login';
import PageBuilder from './pages/dashboard/pagebuilder/PageBuilder';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/dashboard/index'
import { AuthProvider } from './utils/AuthContext.js'

const routes = [

  {
    path: "/",
    element: <App />,
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
      element : <Index />
  },
  {
      path: "/dashboard/pagebuilder",
      element: <PageBuilder />
    
}]

const router = createBrowserRouter(routes );


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
    <AuthProvider>
         <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)

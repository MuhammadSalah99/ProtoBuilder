import React, { useState ,useContext } from 'react'
import axios from 'axios';
import { useAuth } from '../../utils/useAuth';
import { User, useUser } from '../../utils/useUser';
import { AuthContext } from '../../context/AuthContext';
import { useLocalStorage } from '../../utils/useLocalStorage';
useLocalStorage
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { addUser } = useUser()
    const {user , setUser} = useContext(AuthContext)
    const handleInputChange = (event: any) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        });
    };

    const loginUser = async (userData: any) => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', userData);
           const userD: User = response.data
            addUser(userD)
            setUser(userD)
            console.log(user)

           
       } catch (error) {
            console.error('Login failed:', error);
        }
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        loginUser(formData);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {user ? user.name: "hi" }
                            Sign in to your accounti                         </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={formData.email} onChange={handleInputChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={formData.password} onChange={handleInputChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login

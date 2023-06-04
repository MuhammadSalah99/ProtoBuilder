import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import { useLocalStorage } from '../../utils/useLocalStorage'
import Navbar from './utility/navbar'

const Index = () => {
    const { user, setUser } = useContext(AuthContext)
    const { setItem } = useLocalStorage()
    const logout = () => {
        setUser(null)
        setItem("user", "")
    }


    return (
        <div className="flex">
            <Navbar />
            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            $ 450k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            20k
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Index

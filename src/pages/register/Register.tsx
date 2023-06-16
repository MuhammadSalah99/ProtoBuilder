import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { User, useUser } from "../../utils/useUser"
import { useFormik } from 'formik';
import * as Yup from 'yup'
const Register = () => {


    const validationSchema = Yup.object().shape({

        userName: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
        role: Yup.string().required('Role is required'),
        
        major: Yup.string().required('Major is required'),
        phone: Yup.string().required('Phone is required'),
        officeAddress: Yup.string().required('Office Address is required'),
        city: Yup.string().required('City is required'),

    });



    const { user, setUser } = useContext(AuthContext)
    const { addUser } = useUser()

    const [errorMessage, setErrorMessage] = useState({code: 200, message: 'test'})
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate(`/${user.id}/dashboard`)
        }
    }, [],)

    const registerUser = async (userData: any) => {
        try {

            const response = await axios.post('https://nodeasaltask-production.up.railway.app/api/users/signup', userData);
            const userD: User = {
                id: response.data.user.id,
                name: response.data.user.userName,
                authToken: response.data.token,
                email: response.data.user.email,
                role: response.data.user.role
            }
            setUser(userD)
            console.log(userD)
            addUser(userD)
            setTimeout(() => {

                console.log(response)
                navigate(`/${userD.id}/dashboard`)
                navigate(0)
            }, 500)

        } catch (error) {
            setErrorMessage({code: error.response.status, message: error.response.data.error})
            console.error('Registration failed:', error);
        }
    };

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            role: 'Client',
            major: '',
            phone: '',
            officeAddress: '',
            city: '',
        },
        validationSchema,
        onSubmit: (values) => {
            registerUser(values);
        },
    });


     const handleSubmit = formik.handleSubmit;

    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-20 mx-auto   h-fit">
                <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </Link>
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="userName" className="block mb-2 text-sm font-medium text-white">
                                    Your Username
                                </label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="YourUsername"
                                />
                                {formik.touched.userName && formik.errors.userName && (
                                    <div className="text-red-500">{formik.errors.userName}</div>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    placeholder="yourname@email.com"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-red-500">{formik.errors.email}</div>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="••••••••"
                                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="text-red-500">{formik.errors.password}</div>
                                )}
                            </div>
                            <div>
                                <label className="block mb-3 text-sm font-medium text-white">You Are</label>
                                <select
                                    id="roles"
                                    value={formik.values.role}
                                    name="role"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Client">Client</option>
                                    <option value="Engineer">Engineer</option>
                                </select>
                                {formik.touched.role && formik.errors.role && (
                                    <div className="text-red-500">{formik.errors.role}</div>
                                )}
                            </div>
                            {formik.values.role === 'Engineer' && (
                                <>
                                    <div className="flex w-full justify-between">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-white">Major</label>
                                            <select
                                                id="major"
                                                name="major"
                                                value={formik.values.major}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value="">Select a major</option>
                                                <option value="Civil Engineer">Civil Engineer</option>
                                                <option value="Architect">Architect</option>
                                                <option value="Carpenter">Carpenter</option>
                                                <option value="Internal Designer">Internal Designer</option>
                                            </select>
                                            {formik.touched.major && formik.errors.major && (
                                                <div className="text-red-500">{formik.errors.major}</div>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Phone"
                                            />
                                            {formik.touched.phone && formik.errors.phone && (
                                                <div className="text-red-500">{formik.errors.phone}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-white">City</label>
                                            <select
                                                id="city"
                                                name="city"
                                                value={formik.values.city}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value="">Select a city</option>
                                                <option value="Tulkarm">Tulkarm</option>
                                                <option value="Jenin">Jenin</option>
                                                <option value="Nablus">Nablus</option>
                                                <option value="Ramallah">Ramallah</option>
                                            </select>
                                            {formik.touched.city && formik.errors.city && (
                                                <div className="text-red-500">{formik.errors.city}</div>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="officeAddress" className="block mb-2 text-sm font-medium text-white">
                                                Office Address
                                            </label>
                                            <input
                                                type="text"
                                                id="officeAddress"
                                                name="officeAddress"
                                                value={formik.values.officeAddress}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Office Address"
                                            />
                                            {formik.touched.officeAddress && formik.errors.officeAddress && (
                                                <div className="text-red-500">{formik.errors.officeAddress}</div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                            >
                                Create an account
                            </button>
                            {errorMessage.code == 409  && (
                                <div className="text-red-500">{errorMessage.message}</div>
                            )}

                            <p className="text-sm font-light text-gray-400">
                                Already have an account?{' '}
                                <Link to="/login" className="font-medium text-primary-600 hover:underline text-blue-500">
                                    Login here
                                </Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register

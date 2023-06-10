import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { storage } from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import Navbar from '../utility/navbar'
const EditUser = () => {

    const [major, setMajor] = useState('');
    const [phone, setPhone] = useState('');
    const [officeAddress, setOfficeAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [profilePic, setProfilePic] = useState<File | null>(null);
    const [linkPic, setLinkPic] = useState('')
    const [city, setCity] = useState('');

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://nodeasaltask-production.up.railway.app/api/users/${id}`)
            .then((res) => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setPhone(res.data.phone)
                setCity(res.data.city)
                setOfficeAddress(res.data.officeAddress)
                setBio(res.data.bio)
                setMajor(res.data.major)
                setLinkPic(res.data.profilePic)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleMajorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setMajor(e.target.value);
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handleOfficeAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        setOfficeAddress(e.target.value);
    };

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
    };

    const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageRef = ref(storage, `profilePics/${file.name}`)
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    console.log(url)
                    setLinkPic(url)
                    alert(url)
                })
                .catch((err) => {console.log(err)})
            })
        }


    };

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    const uploadProfile = () => {
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://nodeasaltask-production.up.railway.app/api/users/edit/${id}`,
                {
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    officeAddress: officeAddress,
                    city: city,
                    major: major,
                    bio: bio,
                    profilePic: linkPic,

                });

            // Handle the response, show success message, etc.
            console.log(response.data);

            // Reset the form after submission
            navigate(`/${id}/dashboard`)
            setMajor('');
            setPhone('');
            setOfficeAddress('');
            setFirstName('');
            setLastName('');
            setBio('');
            setProfilePic(null);
            setCity('');
        } catch (error) {
            // Handle the error, show error message, etc.
            console.error('Error updating user information:', error);
        }
    };
    return (
        <div className='flex w-full h-screen'>
            <Navbar />
            <div className='w-full mx-auto mt-8 p-8'>
                <h2 className='text-xl fontn-bold mb-4'>Edit Username</h2>
                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <div className="mb-2 ">
                        <div className='flex justify-between w-2/3 items-center mb-4'>

                            <label className="block mb-2 text-sm font-medium text-gray-900" >
                                First Name:</label>
                            <input
                                type="text"

                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />

                            <label className="block mb-2 text-sm font-medium text-gray-900" >
                                Last Name:</label>
                            <input
                                type="text"

                                className="bg-gray-50 w-1/3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </div>

                        <div className='flex justify-between w-2/3 items-center mb-4'>
                            <label className="block mb-2 text-sm font-medium text-gray-900" >Major:</label>
                            <select
                                className="border border-gray-300 rounded px-3 py-2 w-1/3"
                                value={major}
                                onChange={handleMajorChange}
                            >
                                <option value="Computer Science">Computer Science</option>
                                <option value="Electrical Engineering">Electrical Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                {/* Add more options as needed */}
                            </select>
                            <label className="block mb-2 text-sm font-medium text-gray-900" >
                                Phone:
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5"
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                        </div>
                    </div>

                    <div className='flex justify-between w-2/3 items-center'>

                        <label className="block mb-2 text-sm font-medium text-gray-900" >
                            Office Address:</label>
                        <input
                            type="text"

                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3 p-2.5"
                            value={officeAddress}
                            onChange={handleOfficeAddressChange}
                        />
                        <label className="block mb-2 text-sm font-medium text-gray-900" >
                            City:</label>
                        <input
                            type="text"

                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/3  p-2.5"
                            value={city}
                            onChange={handleCityChange}
                        />

                    </div>
                    <div className="mb-4">

                        <label className="block mb-2 text-sm font-medium text-gray-900" >
                            Bio:</label>
                        <textarea

                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            value={bio}
                            onChange={handleBioChange}
                        />
                    </div>
                    <div className="mb-4">

                        <label className="block mb-2 text-sm font-medium text-gray-900" >
                            Profile Picture:</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            onChange={handleProfilePicChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditUser

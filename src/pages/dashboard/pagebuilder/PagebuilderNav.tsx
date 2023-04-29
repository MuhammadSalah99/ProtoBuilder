import React from 'react'
import { Link } from 'react-router-dom'
const PagebuilderNav = () => {
    return (
        <div className="page-builder-nav">
            <nav className="bg-white border-b ">
                <div className="w-screen flex flex-wrap items-center justify-between mt-2  p4"  >
                    <div className='flex flex-row w-1/3 justify-between mx-2 pb-2'>
                        <Link to="/dashboard" className="flex items-center justify-between">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Flowbite</span>
                        </Link>
                        <div className="flex items-center justify-around  w-2/3">
                            <p className="text-[15px]">Site</p>
                            <p className='text-[15px]'>Settings</p>
                            <p className="text-[15px]">Dev Mode</p>
                        </div>
                    </div>
                    <div className="flex flex-row w-1/6 justify-between items-center pr-7 pb-2">
                        <p className='text-[15px]'>Save</p>
                        <p className='text-[15px]'>Preview</p>
                        <button className='text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-full text-[12px] px-5 py-2 tex-center'>Publish</button>
                    </div>
                </div>
            </nav>
            <div className="bg-white flex  w-screen justify-between  p4 pr-7 shadow-lg h-12">
                <div className="hover:text-blue-400 ml-4 flex justify-between w-1/6 items-center border-r pr-4">
                    <p className="text-sm">Page: Home</p> <svg className='w-4 h-4 text-grey' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                </div>
                <div className="flex items-center  justify-around p-3  border-r ml-[-26px] w-[100px]" >
                    <svg className='w-6 h-6 text-blue-400' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <svg className='w-6 h-6 text-blue-400' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                </div>
                <div className='flex items-center w-1/2 border-r pr-5'>
                    <p className='flex items-center pl-[20px] rounded-full bg-stone-200 text-sm text-grey w-full h-6'>https://mohmmedsjj1999.wixsite.com/my-site</p>
                </div>
                <div className="flex items-center w-[80px] justify-center border-r ml-[-26px]">
                    <svg className='w-6 h-6 text-blue-400' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <svg className='w-6 h-6 text-blue-400' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                </div>
                <div className="flex items-center justify-center` w-[100px] border-r ml-[-16px] pl-3">
                    <svg className='w-5 h-5 text-black' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p className='text-sm text-grey'>
                        Zoon in
                    </p>
                </div>
                <div className="flex items-center justify-center w-[100px] border-r ml-[-30px]">
                    <svg className='w-5 h-5 text-black' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M4.867 19.125h.008v.008h-.008v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p className='text-sm text-grey'>
                        Tools
                    </p>
                </div>

                <div className="flex items-center justify-between w-16">
                    <svg className='w-5 h-5 text-black' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p className='text-sm text-grey'>
                        Search
                    </p>
                </div>
            </div>
        </div >
    )
}

export default PagebuilderNav

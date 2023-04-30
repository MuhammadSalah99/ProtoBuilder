import React from 'react'
import Element from './Element';
const AddElementDrawer = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: any}) => {
  return (
   <main
      className={
        " relative  overflow-hidden z-10 h-screen inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-[60px] "
          : " transition-all delay-70 opacity-0 translate-x-[-200px]  ")
      }
    >
        <section
        className={
          " w-screen max-w-lg border-l aboolute top-0   border-t-[7px]  border-t-blue-500  absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform left-0 " +
          (isOpen ? " translate-x-0 " : " translate-x-[-200px] ")
        }
      >
        <article className="relative  w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-3 items-center flex justify-between ont-bold text-lg border-b">
             <h2>Add Elements</h2>
             <p className='text-xl cursor-pointer w-8 h-8 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all' onClick={()=> setIsOpen(false)}>x</p>
          </header>
          <div className="container p-4">
            <p>
                Paragraphs
            </p>
            <Element element="p" value="this is text 1234" />
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  )
}

export default AddElementDrawer

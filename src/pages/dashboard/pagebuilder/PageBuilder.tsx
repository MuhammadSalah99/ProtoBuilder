import React from 'react'
import CanvasArea from './CanvasArea'
import PagebuilderNav from './PagebuilderNav'
import PageBuilderSidebar from './PageBuilderSidebar'
const PageBuilder = () => {
  return (
    <div>
        <PagebuilderNav />
        <div className='relative w-screen flex h-screen px-24 py-8'>
             
            <PageBuilderSidebar />
            <CanvasArea />
        </div>
    </div>
  )
}

export default PageBuilder

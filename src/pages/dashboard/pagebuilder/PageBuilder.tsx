import React from 'react'
import PagebuilderNav from './PagebuilderNav'
import PageBuilderSidebar from './PageBuilderSidebar'
const PageBuilder = () => {
  return (
    <div>
        <PagebuilderNav />
        <div className='relative w-screen'>
            
            <PageBuilderSidebar />
        </div>
    </div>
  )
}

export default PageBuilder

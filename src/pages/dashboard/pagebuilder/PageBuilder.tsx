import React, {useState} from 'react'
import CanvasArea from './CanvasArea'
import PagebuilderNav from './PagebuilderNav'
import PageBuilderSidebar from './PageBuilderSidebar'
const PageBuilder = () => {
    const [list, setList] = useState([
        "The Call Of Ktulu",
        "For Whom The Bell Tolls",
        "The Day That Never Comes",
        "The Memory Remains",
        "Confusion",
        "Moth Into Flame",
        "The Outlaw Torn",
        "No Leaf Clover",
        "Halo on Fire",
    ]);
  return (
    <div>
        <PagebuilderNav />
        <div className='relative w-screen flex h-screen px-24 py-8'>
             
            <PageBuilderSidebar list={list} setList={setList}/>
            <CanvasArea list={list} setList={setList}/>
        </div>
    </div>
  )
}

export default PageBuilder

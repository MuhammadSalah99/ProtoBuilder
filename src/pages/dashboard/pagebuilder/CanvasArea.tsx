import React, { useState } from 'react'

const CanvasArea = ({list, setList}: {list: string[], setList: any} ) => {

    const [dragItem, setDragItem] = useState(0)

    const handleDragStart = (index: any) => {
        setDragItem(index);
    };

    const handleDragEnter = (e: any, index: any) => {
        const newList = [...list];
        const item = newList[dragItem];
        newList.splice(dragItem, 1);
        newList.splice(index, 0, item);
        setDragItem(index);
        setList(newList);
    };


    return (
        <div className='flex w-full bg-gray-100'>
            <ul className="dnd">
                {list &&
                    list.map((item, index) => (
                        <li
                            draggable
                            key={index}
                            onDragStart={() => handleDragStart(index)}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default CanvasArea

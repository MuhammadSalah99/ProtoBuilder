import React, { useState } from 'react'

const CanvasArea = () => {

    const [dragItem, setDragItem] = useState(0)
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
        <ul className="dnd">
            {list &&
                list.map((item, index) => (
                    <li
                        draggable="true"
                        key={index}
                        onDragStart={() => handleDragStart(index)}
                        onDragEnter={(e) => handleDragEnter(e, index)}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        {item}
                    </li>
                ))}
        </ul>
    )
}

export default CanvasArea

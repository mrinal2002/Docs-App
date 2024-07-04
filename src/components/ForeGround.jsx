import React, { useRef } from 'react'
import Card from './Card'

function ForeGround() {
    // const data=[
    //     // icon , description , filesize , closeOrDownload , tagDetails
    // ]

    const data = [
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: ".8mb",
            close: true,
            tag: { isOpen: true, tagTitle:"Download Now", tagColor:"green" }
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: ".8mb",
            close: false,
            tag: { isOpen: false, tagTitle:"Download Now", tagColor:"green" }
        },
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: ".8mb",
            close: true,
            tag: { isOpen: true, tagTitle:"Upload", tagColor:"blue" }
        },
    ];

    const ref=useRef(null);

    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-4'>
                {data.map((item,index)=>(
                    <Card data={item} reference={ref}/>
                ))}
            </div>
        </>
    )
}

export default ForeGround
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data , reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} className='relative flext-shrink-0 w-44 h-52 rounded-[40px] bg-zinc-900/90 text-white px-5 py-5 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-xs mt-5 leading-tight font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full  left-0'>
                <div className='flex items-center justify-between px-6 py-2 mb-3'>
                    <h4>{data.fileSize}</h4>
                    <span className='w-5 h-5 flex items-center bg-zinc-500 rounded-full justify-center'>
                        {data.close ? <IoClose /> : <LuDownload size=".6em" color='#fff'></LuDownload>}
                    </span>
                </div>
                {
                    data.tag.isOpen ? (
                        <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h4 className='text-sm font-semibold'>{data.tag.tagTitle}</h4>
                        </div>
                    ) : null
                }
            </div>
        </motion.div>
    )
}

export default Card
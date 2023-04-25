import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const anim={
    initial:{
        opacity:1,
        y:50,
    },
    animate:{
        y:0,
        opacity:0,
        Transition:{
            duration:0.5,
        }
    }
}
const Animtedarticle = ({heading,date}) => {
  return (
        < motion.div className='w-[98%] mx-auto  pr-1 pb-1 rounded-xl bg-black'
        
        initial={{y:50, opacity:0}}
        whileInView={{y:0,opacity:1,transition:{duration:0.5}}}
        
         
         >
          <Link href="./" className='"w-[98%] mx-auto  overflow-hidden bg-white capitalize"' >
           <div className='flex justify-between border-2  py-2 px-7 rounded-xl bg-white border-gray-700  items-center gap-6 '>
           <h1 className='text-[1.5rem] w-[80%] text-gray-800 '>{heading}</h1>
             <p className='flex flex-wrap text-pink-500 font-semibold justify-between'>{date}</p>
           </div>
          
          </Link>
    </motion.div> 
  )
}

export default Animtedarticle
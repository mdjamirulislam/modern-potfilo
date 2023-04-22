import Link from 'next/link'
import React from 'react'

const Lastfooter = () => {
  return (
    <div className='border-t-2 w-full overflow-hidden border-t-[#1b1b1b]'>
        <div className="flex justify-between text-gray-600 flex-wrap px-10 items-center font-bold text-lg  py-10 ">

            <h>{new Date().getFullYear()} &copy; All rights resarved</h>
            <h1 className=' '>  Build with love by <Link href="/" className='underline'> jamirul</Link></h1>
            <h> <Link href="/" className='underline'>Say Hello</Link> </h>
        </div>





    </div>
  )
}

export default Lastfooter
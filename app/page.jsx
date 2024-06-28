'use client'
import Link from 'next/link'
import { redirect, useRouter ,permanentRedirect} from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {

 
 
  return (
    <div>
     <div className="h-100 w-100 flex justify-center self-center " >
    <div className="img-data">
    <img src="./logo.png" alt="Logo " className='h-13 w-13 p-0' />
    <div className="loader flex justify-center">
<Link href={'/Home'} className="bg-orange-400 p-2 text-white font-bold rounded ">Start</Link>
    </div>
    </div>
     </div>
    </div>
  )
}

export default page

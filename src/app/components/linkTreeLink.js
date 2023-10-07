// We'll initialize a component here.
"use client"
import Link from 'next/link'
import Image from 'next/image'

const LinkTreeLink = ({linkname, link, preview_photo}) => {
  return (
    <div className='my-2 flex justify-center items-center bg-white rounded-full shadow-md p-2
      transform transition duration-300 hover:scale-105 min-w-full w-80 '>
      <div className='w-6 h-6 bg-black rounded-full mr-2'></div>
      <Link 
        href={link}
        target="_blank"
        class='text-sm'>
        {linkname}
      </Link>
    </div>

    // TODO: Share Button Feature
    // Snapchat, Facebook, LinkedIn, X, Whatsapp, Messanger, Email
    // + Copy Link To Clipboard

    // LATER: Tracking
  )
}

export default LinkTreeLink
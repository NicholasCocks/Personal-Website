// We'll initialize a component here.
"use client"
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const LinkTreeLink = ({linkname, link, preview_photo}) => {
  return (
    <div className='my-2 flex justify-between items-center bg-white dark:text-slate-800 rounded-full shadow-md p-2
      transform transition duration-300 hover:scale-105 w-80'>
      <div className='w-6 h-6 bg-black rounded-full mr-2'></div>
      
      <Link 
        href={link}
        target="_blank"
        className='text-sm no-underline'>
        {linkname}
      </Link>
      
      <FontAwesomeIcon icon={faEllipsis} className=" w-7" />
    </div>

    // TODO: Share Button Feature
    // Snapchat, Facebook, LinkedIn, X, Whatsapp, Messanger, Email
    // + Copy Link To Clipboard

    // LATER: Tracking
  )
}

export default LinkTreeLink
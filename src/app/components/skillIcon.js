"use client"

import Image from 'next/image';

const SkillIcon = ({ skillObject }) => {
  return (
    <li
      class="htmlicon flex items-center">
      <Image 
        src={`/images/${skillObject["src"]}`}
        width={40}
        height={40}
        alt={`${skillObject["alt"]}`} 
        className='mr-4'/>
      <p class="htmlptag">{skillObject["text"]}</p>
    </li>
  )
}

export default SkillIcon
"use client"

import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillIcon = ({ skillObject }) => {
  return (
    <li
      className="htmlicon flex items-center">
      <FontAwesomeIcon icon={skillObject["src"]} className='mr-4 w-8 h-8'/>
      <p className="htmlptag">{skillObject["text"]}</p>
    </li>
  )
}

export default SkillIcon


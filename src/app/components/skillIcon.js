"use client"

import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillIcon = ({ skillObject }) => {
  return (
    <li
      class="htmlicon flex items-center">
      <FontAwesomeIcon icon={skillObject["src"]} className='mr-4'/>
      <p class="htmlptag">{skillObject["text"]}</p>
    </li>
  )
}

export default SkillIcon


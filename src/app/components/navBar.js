"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const pathname = usePathname();

  return (
    <>
      <h1 id="logo" >Nicholas Cocks</h1>
        <ul className='pages_nav'>
          <nav class="flex justify-center items-center text-lg">
          {routeDescriptions.map((routeObject, index) => {
            return (
              <Link 
                href={routeObject["route"]}
                to="/"
                key={index}
                className={`p-2 mx-2 rounded-lg hover:text-blue-500 hover:bg-slate-200
                  ${pathname == routeObject["route"] ? "active_nav" : ""}`}>
                {routeObject["name"]}
              </Link>
            )
          })}
        </nav>
        </ul>
        <ul className="sections_nav flex items-center justify-center">
          <li className='mx-4'>
            <a href="https://www.linkedin.com/in/nicholas-cocks/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="text-center w-7" />
            </a>
          </li>
          <li className='mx-4'>
            <a href="https://github.com/NicholasCocks" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="text-center" />
            </a>
          </li>
          <li className='mx-4'>
            <a href="mailto:nick@caveat.nyc" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="text-center" />
            </a>
          </li>
        </ul>
    </>
  )
}

const routeDescriptions = [
  { name: "Home", route: "/"},
  { name: "Art", route: "/art"}
]

export default NavBar
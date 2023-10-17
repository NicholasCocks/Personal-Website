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
      <h1 className='text-4xl font-bold tracking-tight text-slate-600 sm:text-5xl'>Nicholas Cocks</h1>
        <ul className='pages_nav'>
          <nav class="flex items-center lg:items-start lg:flex-col text-lg">
          {routeDescriptions.map((routeObject, index) => {
            return (
              <Link 
                href={routeObject["route"]}
                to="/"
                key={index}
                className={`p-2 my-2 w-full hover:bg-stone-200 from-inherit from-slate-100 hover:shadow-md no-underline bg-gradient-to-br
                  ${pathname == routeObject["route"] ? "active_nav" : ""}`}>
                {routeObject["name"]}
              </Link>
            )
          })}
        </nav>
        </ul>
        <ul className="sections_nav flex items-center mt-2">
          <li className='mr-4'>
            <a href="https://www.linkedin.com/in/nicholas-cocks/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="text-center" />
            </a>
          </li>
          <li className='mr-4'>
            <a href="https://github.com/NicholasCocks" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="text-center" />
            </a>
          </li>
          <li className='mr-4'>
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
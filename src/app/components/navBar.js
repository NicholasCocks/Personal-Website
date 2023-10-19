"use client"

import Link from 'next/link'

import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ThemeButton from './themeButton';
import { ReactDOM, useEffect, useState } from 'react';

const NavBar = () => {
  const pathname = usePathname();
  let [sectionTitles, setSectionTitles] = useState([]);

  const getSectionHeaderHtmlNode = () => {
    return Array.from(document.getElementsByTagName('H3')).map(element => {
      return element.innerText
    });
  }

  useEffect(() => {
    setSectionTitles(getSectionHeaderHtmlNode());
  }, [pathname])

  return (
    <>
      <h1 className='text-4xl font-bold tracking-tight text-slate-600 sm:text-5xl'>
        Nicholas Cocks
      </h1>

      <ThemeButton />

      <ul id='pages_nav'>
        <nav className="flex items-center lg:items-start lg:flex-col text-lg">
          {routeDescriptions.map((routeObject, index) => {
            return (
              <Link 
                href={routeObject["route"]}
                to="/"
                key={index}
                className={`p-2 my-2 w-full hover:bg-stone-200 from-inherit from-slate-100 dark:from-slate-800 hover:shadow-md no-underline bg-gradient-to-br
                  ${pathname == routeObject["route"] ? "active_nav" : ""}`}>
                {routeObject["name"]}
              </Link>
            )
          })}
        </nav>
      </ul>

      <ul id="sections_nav">
        {sectionTitles.map((name, index) => {
          return (
            <li key={index}>
              {name}
            </li>
          )
        })}
      </ul>
      
      <ul id='socials_nav' className='flex items-center mt-2'>
        <li className='mr-4'>
          <a href="https://www.linkedin.com/in/nicholas-cocks/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="text-center fa-lg" />
          </a>
        </li>
        <li className='mr-4'>
          <a href="https://github.com/NicholasCocks" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="text-center fa-lg" />
          </a>
        </li>
        <li className='mr-4'>
          <a href="mailto:nick@caveat.nyc" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} className="text-center fa-lg" />
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
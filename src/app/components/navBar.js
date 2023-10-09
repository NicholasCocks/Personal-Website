"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <>
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
    </>
  )
}

const routeDescriptions = [
  { name: "Home", route: "/"},
  { name: "Art", route: "/art"}
]

export default NavBar
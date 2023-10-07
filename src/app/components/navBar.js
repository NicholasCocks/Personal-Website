"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav class="container flex justify-center text-lg mx-auto my-4 px-4">
      <Link 
        href="/"
        to="/"
        className={pathname == "/" ? "active_nav" : ""}>
        Home
      </Link>
      <Link 
        href="/art"
        to="/art"
        className={pathname == "/art" ? "active_nav" : ""}
        Art> Art
      </Link>
    </nav>
  )
}

export default NavBar
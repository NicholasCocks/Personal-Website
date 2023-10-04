"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header>
      <Link 
        href="/"
        to="/"
        className={pathname == "/" ? "active" : ""}>
        Home
      </Link>
      <Link 
        href="/art"
        to="/art"
        className={pathname == "/art" ? "active" : ""}>
        Art
      </Link>
    </header>
  )
}

export default NavBar
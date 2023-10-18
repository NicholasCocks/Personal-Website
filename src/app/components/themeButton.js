"use client"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeButton = () => {
  const [theme, setTheme] = useState("")

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light') 
    } else {
      setTheme('dark')
    }   
  }

  useEffect(() => {
    if (theme == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = theme
  },[theme])

  useEffect(() => {

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) 
      && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')     
    } else {
      setTheme('light') 
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <button className='w-4' onClick={e => toggleTheme()}> 
      <FontAwesomeIcon icon={theme == 'dark' ? faMoon : faSun} className='fa-lg' />
    </button>
    )
}

export default ThemeButton


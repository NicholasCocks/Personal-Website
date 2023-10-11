import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navBar'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nick Cocks',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet"></link>
      </head>
      <body className={`${inter.className}`}>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='container lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 
            lg:flex-col lg:justify-between lg:px-24 lg:py-24 max-h-screen'>
            <NavBar />
          </header>
          
          {children}
        </div>
      </body>
    </html>
  )
}

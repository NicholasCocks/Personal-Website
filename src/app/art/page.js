import React from 'react'
import LinkTreeLink from '../components/linkTreeLink'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify, faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

const artPage = () => {
  // TODO: cover photo
  return (
    <main className="container flex flex-col content-center items-center px-4">
      <h2 className='text-5xl mb-8'>Art Page</h2>
      <section>
        <p>Booking: nickcocksofficial@gmail.com</p>
      </section>
      <section className='flex flex-col content-center items-center'>
        <div className='flex items-center justify-between w-9/12 my-4'>
          <h3 className=''>New EP!</h3>
        </div>
        
        <LinkTreeLink 
          linkname="'Please Keep Going' Video EP"
          link=""
          preview_photo={{"icon": faYoutube}}  />
          <a href='#' target='_blank'>
            
          </a>
        <LinkTreeLink
          linkname="'Please Keep Going' EP on Spotify"
          link="https://open.spotify.com/album/0d64K1LbnkEteaFUDUl6BS"
          preview_photo={{"icon": faSpotify}}/>

        <div className='flex items-center justify-between w-9/12 my-4'>
          <h3 className=''>Photography</h3>

          <a href='#' target="_blank">
            <FontAwesomeIcon 
              icon=""
              className='text-center fa-xl hover:text-slate-700' />      
          </a>
        </div>

        <LinkTreeLink 
          linkname="Photography Portfolio"
          link="https://www.instagram.com/nikola.djukic.photos/"
          preview_photo={{"icon":   faInstagram}}/>

        <h3 className='my-4'>Music Ive Produced</h3>
        <LinkTreeLink
          linkname="Bendita Bonita EP"
          link="https://open.spotify.com/album/7iIBpYWbJURlWJLHHf6lgU"
          preview_photo={{"icon": faSpotify}}/>
        <LinkTreeLink 
          linkname="Bodega Knights Soundtrack"
          link="https://open.spotify.com/artist/6Jp32mUd4706FIK0gh6kpA"
          preview_photo={{"icon": faSpotify}}/>
        <LinkTreeLink
          linkname="Nick Cocks x Danielle Devito"
          link="https://soundcloud.com/ncxdd"
          preview_photo={{"icon": faSoundcloud}}/>
      </section>
    </main>
  )
}

export default artPage
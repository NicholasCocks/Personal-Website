import React from 'react'
import LinkTreeLink from '../components/linkTreeLink'

const artPage = () => {
  return (
    <main class="container flex flex-col content-center items-center px-4">
      <h1>Art Page</h1>
      <div className='flex flex-col content-center items-center'>
        <h3 className='text-lg'>New EP!</h3>
        <LinkTreeLink 
          linkname="'Please Keep Going' Video EP"
          link="https://www.youtube.com/watch?v=cKQfo_LKG4Q&list=PL1shYKdQavBT2fjRizqk9fKfnnvtkqTSu"
          preview_photo=""/>
        <LinkTreeLink
          linkname="'Please Keep Going' EP on Spotify"
          link="https://open.spotify.com/album/0d64K1LbnkEteaFUDUl6BS"
          preview_photo=""/>

        <h3 className='text-lg'>Photography</h3>
        <LinkTreeLink 
          linkname="Photography Portfolio"
          link="https://www.instagram.com/nikola.djukic.photos/"
          preview_photo=""/>

        <h3 className='text-lg'>Music Ive Produced</h3>
        <LinkTreeLink
          linkname="Bendita Bonita EP"
          link="https://open.spotify.com/album/7iIBpYWbJURlWJLHHf6lgU"
          preview_photo=""/>
        <LinkTreeLink 
          linkname="Bodega Knights Soundtrack"
          link="https://open.spotify.com/artist/6Jp32mUd4706FIK0gh6kpA"
          preview_photo=""/>
        <LinkTreeLink
          linkname="Nick Cocks x Danielle Devito"
          link="https://soundcloud.com/ncxdd"
          preview_photo=""/>
      </div>
    </main>
  )
}

export default artPage
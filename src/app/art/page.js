import React from 'react'
import LinkTreeLink from '../components/linkTreeLink'

const artPage = () => {
  return (
    <main>
      <h1>Art Page</h1>
      <h3>New EP!</h3>
      <LinkTreeLink 
        linkname="'Please Keep Going' Video EP"
        link="https://www.youtube.com/watch?v=cKQfo_LKG4Q&list=PL1shYKdQavBT2fjRizqk9fKfnnvtkqTSu"
        preview_photo=""/>
      <LinkTreeLink
        linkname="'Please Keep Going' EP on Spotify"
        link="https://open.spotify.com/album/0d64K1LbnkEteaFUDUl6BS"
        preview_photo=""/>

      <h3>Photography</h3>
      <LinkTreeLink 
        linkname="Photography portfolio"
        link="https://www.instagram.com/nikola.djukic.photos/"
        preview_photo=""/>

      <h3>Music Ive Produced</h3>
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

      
    </main>
  )
}

export default artPage
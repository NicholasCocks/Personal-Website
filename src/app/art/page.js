import React from 'react'
import LinkTreeLink from '../components/linkTreeLink'

const artPage = () => {
  return (
    <main>
      <h1>Art Page</h1>
      <h3>New EP!</h3>
      <LinkTreeLink linkname="'Please Keep Going' Video EP"/>
      <LinkTreeLink linkname="'Please Keep Going' EP on Spotify"/>

      <h3>Photography</h3>
      <LinkTreeLink linkname="Photography portfolio"/>

      <h3>Music Ive Produced</h3>
      <LinkTreeLink linkname="Bendita Bonita EP"/>
      <LinkTreeLink linkname="Bodega Knights Soundtrack"/>
      <LinkTreeLink linkname="Nick Cocks x Danielle Devito"/>
    </main>
  )
}

export default artPage
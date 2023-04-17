import React from 'react'
import TrackTitle from './TrackTitle'
import TrackAuthor from './TrackAuthor'
import TrackAlbum from './TrackAlbum'
import TrackTime from './TrackTime'

function Item() {
  return (
    <div className="playlist__item">
    <div className="playlist__track track">
        <TrackTitle/>
        <TrackAuthor/>
        <TrackAlbum/>
        <TrackTime/>
    </div>
</div>
  )
}

export default Item

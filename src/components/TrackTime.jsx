import React from 'react'

function TrackTime() {
  return (
    <div className="track__time">
    <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
    </svg>
    <span className="track__time-text">4:44</span>
</div>
  )
}

export default TrackTime

import React from 'react'
import Search from './Search'
import Filter from './Filter'
import Content from './Content'

function Centerblock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
    <Filter/>
    <Content/>
    </div>

  )
}

export default Centerblock

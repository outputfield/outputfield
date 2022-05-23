import React, { useState } from 'react'
import { ArtistRow } from './artistRow.component'
import artistdata from '../data/artist-data'
import Artist from '../artist/artist.component'

const data = artistdata.artists

const ArtistListPage = ({artists} :any) => {

  const [overlay, setOverlay] = useState('')

  // save scroll position to return to original point in list after state change
  let scroll = 0

  function loadArtist(handle: any){
    window.history.pushState({},'','/artists/'+handle)
    scroll = window.scrollY
    window.scrollTo(window.scrollX,0)
    setOverlay(handle)
  }

  function closeOverlay(back:any = true){
    setOverlay('')
    if(back)window.history.go(-1)
    window.scrollTo(window.scrollX,scroll)
  }

  return (
    <div>
      {
        overlay==''?
          (
            <div>
              <div>
                <div>
                  {data.length+' result'+(data.length==1?'':'s')}
                </div>
              </div>
              <div>
                {
                  data.map((e)=>{
                    return ( <ArtistRow key={e.handle} artist={e} onClick={()=>{loadArtist(e.handle)}} type="list"/> )
                  })
                }
              </div>
            </div>
          ):
          (
            <Artist overlay={true} artistid={overlay} exitFunction={closeOverlay}/>
          )
      }
    </div>
  )
}

export default ArtistListPage

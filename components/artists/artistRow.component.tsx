import React from 'react'
import Artist from '../data/artist'

export interface ArtistRowProps {
  artist: Artist;
  type: 'list' | 'detail';
  onClick?: (event: any) => any;
}

export const ArtistRow = ({
  artist,
  type,
  onClick,
}:ArtistRowProps) => {
  const row = (
    <div>
      <div/>
      <div>
        <h1>
          {artist.name}
        </h1><br/>
        <div>
          {artist.handle}
        </div>
        <div/>
        <div>
          {artist.location}
        </div><br/>
        {type == 'detail' ?
          (
            <div>
              {artist.pronouns}
            </div>
          ):''
        }
      </div>
      <div>
        {artist.medium}
      </div>
    </div>
  )

  if(type=='detail'){
    return row
  } else {
    return (
      <a onClick={onClick}>
        {row}
      </a>
    )
  }
}

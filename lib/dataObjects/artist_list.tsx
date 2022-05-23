import Artist from './artist'
import Work from './work'
import Link from './link'

/*
__ARTIST
name:               string;
handle:             string;
iconColor:          string;
medium:             string;
location:           string;
email?:             string;
pronouns?:          string;
works?:             Work[];
bio?:               string;
mediums?:           string[];
mediumsOfInterest?: string[];
links?:             Link[];
referredBy?:        Artist;
*/

/*
__MEDIUMS
sculpture
tattoo
installation
performance
visual
textile
3d
design
photo / film
movement
sound
*/

export default class Artistlist {
  artists: Artist[]

  constructor( artists : Artist[] ) {
    this.artists = artists
  }

  push(artist: Artist) {
    this.artists[this.artists.length] = artist
  }

  get(handle: any) {
    let found = false
    for (let i=0; i<this.artists.length; i++) {
      if (!found && this.artists[i].handle==handle) {
        found = true
        return this.artists[i]
      }
    }
  }
}

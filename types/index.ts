export interface User {
  id: number
  password: string
  email: string
  createdAt: string
  artist: Artist
}

export interface Artist {
  id : number
  title: string
  pronoun: string
  createdAt: string
  bio: string
  location: string
  iconColor : string
  handle: string
  mediums: string[]
  mediumsOfInterest: string[]
  work: Work[]
  links: Link[]
}

export interface Work {

}

export interface Link {

}
import React from'react'
import { useRouter } from 'next/router'
import { ArtistRow } from '../../components/artists/artistRow.component'
import { TabView } from '../../components/tabView/tabView.component'
import { WorkPanel } from '../../components/tabView/workPanel.component'
import { InfoPanel } from '../../components/tabView/infoPanel.component'
import { ContactPanel } from '../../components/tabView/contactPanel.component'
import { BASE_URL } from '../../lib/constants'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getArtists } from '../api/artists'
import { getArtist } from '../api/artists/[name]'

export const getStaticPaths = async () => {
  // need to refactor this so it doesn't hit an api
  // const res = await fetch(`${BASE_URL}/api/artists`);
  // const data = await res.json();
  const artists = await getArtists()
  console.log(artists)

  const paths = artists?.map((artist: any) => {
    return {
      params: { name: artist.handle}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const name: any = context?.params?.name
  const data = await getArtist(name)
  return {
    props: { artistdata : JSON.parse(JSON.stringify(data)) }
  }
}

const ArtistPage = ({ overlay=false, artistdata }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const contactTab = false

  // const artist = convertDataToSingleArtist(artistdata)
  console.log(artistdata)
  const { artist } = artistdata
  const exitFunction = () => console.log('exit')

  const router = useRouter()
  function closeArtist() {
    router.push('/artists')
  }

  if(artist==null||artist==undefined){
    /*
      can add more detailed 404 page, or just redirect back to list?
      router.push("/artists");
      return (null);
    */
    return (
      <div style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        This artist does not exist
      </div>
    )
  } else {
    return (
      <div>
        <div onClick={overlay ? exitFunction : closeArtist}/>
        <ArtistRow artist={artist} type="detail"/>
        { contactTab?
          (
            <TabView headers={['work','info','contact']} activeTab={0}>
              <WorkPanel works={artist.works}/>
              <InfoPanel artist={artist} includeContact={false} />
              <ContactPanel artist={artist} separateTab={true}/>
            </TabView>
          ) :
          (
            <TabView headers={['work','info']} activeTab={0}>
              <WorkPanel works={artist.works}/>
              <InfoPanel artist={artist} />
            </TabView>
          )
        }
      </div>
    )
  }
}

export default ArtistPage

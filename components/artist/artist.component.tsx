import React, { useRouter } from 'next/router'
import { ArtistRow } from '../artists/artistRow.component'
import { TabView } from '../tabView/tabView.component'
import { WorkPanel } from '../tabView/workPanel.component'
import { InfoPanel } from '../tabView/infoPanel.component'
import { ContactPanel } from '../tabView/contactPanel.component'
import artistdata from '../data/artist-data'

interface Props{
  overlay?: boolean;
  artistid?: string;
  exitFunction?: (event: any) => any;
}

const ArtistPage = (
  {
    overlay = false,
    artistid,
    exitFunction,
  }:Props,
) => {
  // renders contact section as a third tab in main view instead of accessible through info
  const contactTab = false

  const router = useRouter()
  let artist

  if (router.query.artistid){
    artist = artistdata.get(router.query['artistid'])
  } else if (artistid != undefined || artistid != '') {
    artist = artistdata.get(artistid)
  }

  // when page opened as direct url, exit navigates to list
  function closeArtist(){
    router.push('/artists')
  }
  // when page opened as overlay from list, exit button uses passed function
  //  which closes overlay and pops history state

  // catch 'back' browser event and close overlay but don't trigger another history pop
  window.onpopstate = function(event) {
    if(exitFunction){
      (exitFunction)(false)
    }
  }

  if(artist==null||artist==undefined){
    /*
    // can add more detailed 404 page, or just redirect back to list?
    router.push("/artists");
    return (null);
    */
    return (
      <div style={{width:'100%',minHeight:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        This artist does not exist
      </div>
    )
  } else {
    return (
      <div>
        <div onClick={overlay?exitFunction:closeArtist}/>
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

// ArtistPage.getInitialProps = async function () {
//   return {}
// };

export default ArtistPage

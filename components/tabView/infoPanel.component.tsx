import React from 'react'
import Artist from '../data/artist'
import { ContactPanel } from '../tabView/contactPanel.component'
import { Button } from '../button/button.component'

interface Props {
  artist: Artist;
  className?: string;
  includeContact?: boolean;
}

export const InfoPanel = ({
  artist,
  className,
  includeContact = true
}:Props) => {
  function openContact(){
    const t = document.querySelector('#infoPanel')
    t?.querySelector('#info')?.classList?.remove('active')
    t?.querySelector('#contact')?.classList?.add('active')
  }
  function closeContact(){
    const t = document.querySelector('#infoPanel')
    t?.querySelector('#contact')?.classList?.remove('active')
    t?.querySelector('#info')?.classList?.add('active')
  }

  return (
    <div className={`${className} relative text-center mt-8 mx-20 min-h-184`} id="infoPanel">
      <div className="hidden active:block" id="info">
        <div className="w-full pt-20 pr-13 pb-56 pl-16 border-box whitespace-pre-wrap">
          {artist.bio}
        </div>
        <div className="relative inline-block pt-18 pr-48 pb-0 pr-45 h-160 my-0 mx-auto content-box">
          <div className="block absolute h-160 w-160 z-0 top-0 left-62 rounded-full border-1 border-dashed"></div>
          {
            artist.mediums.length==0?
              (<div className="relative w-122 min-h-36"/>)
              :
              (
                <div className="relative w-122 min-h-36">
                Mediums:<br/>
                  {artist.mediums.join(', ')}
                </div>
              )
          }
          {
            artist.mediumsOfInterest.length==0?
              (<div className="relative w-160 min-h-36 mt-48 pr-0 pb-0 pl-82" />)
              :
              (
                <div className="relative w-160 min-h-36 mt-48 pr-0 pb-0 pl-82">
                Mediums Of Interest:<br/>
                  {artist.mediumsOfInterest.join(', ')}
                </div>
              )
          }
        </div>
        <div className="grid pt-80 px-0 pb-50 grid-cols-1">
          {
            artist.links.map((e,i)=>{
              return (
                <div key={'link_'+i} className="h-40 flex items-center justify-start py-0 px-16">
                  <a href={e.link} className="relative block pr-29 after:content-[''] after:inline-block after:h-17 after: w-17 after:absolute after:right-0 after:top-1 after:bg-[url('/extarrow.png')]">
                    {e.title}
                  </a>
                </div>
              )
            })
          }
        </div>
        <div className={'flex justify-end w-full py-0 px-61 mb-68'}>
          {/* <div className="text-left">
            Referred By:<br/>
            <a href={"../artists/"+artist.referredBy.handle}>{artist.referredBy.name}</a>
          </div> */}
        </div>
        {includeContact?
          (
            <Button onClick={openContact}>
              contact
            </Button>
          )
          : ''
        }
      </div>
      {includeContact?
        (
          <div id="contact" className="hidden">
            <ContactPanel artist={artist} onClick={closeContact}/>
          </div>
        )
        : ''
      }
    </div>
  )
}

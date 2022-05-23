import React from 'react'
import Work from '../data/work'

interface Props {
  works: Work[];
  className?: string;
}
// https://www.tailwindtoolbox.com/components/carousel
export const WorkPanel = ({
  works,
  className,
}:Props) => {
  return (
    <div className={`${className} h-420 relative overflow-x-auto whitespace-nowrap`}>
      {/*<div className={styles.reminder}>need to add scroll/carousel/lightbox</div>*/}
      {
        works.map((e,i)=>{
          if(e.type=='image'){
            return (<img key={'work_'+i} src={e.link}/>)
          } else {
            return (<div key={'work_'+i}>* still need to implement widget for {e.type} *</div>)
          }
        })
      }
    </div>
  )
}

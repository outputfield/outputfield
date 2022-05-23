// TODO: Consolidate colors into theme
import React, { useState } from 'react'

import Artist from '../data/artist'
import { Button } from '../button/button.component'
import { sendMessage } from '../../pages/api/sendMessage'

interface Props {
  artist: Artist;
  separateTab?: boolean;
  className?: string;
  onClick?: (event: any) => any;
}

export const ContactPanel = ({
  artist,
  separateTab = false,
  className,
  onClick,
}:Props) => {

  const [error, setError] = useState('')

  function selectTopic(event: any){
    const e = event.target
    document.querySelectorAll('#topicSelector div').forEach(
      t => {if(t.classList!=undefined) t.classList.remove('active')}
    )
    e.classList.add('active')

    const i = document.querySelector('#contactSubject') as HTMLInputElement
    if(i.disabled){
      setError('')
      let c = document.getElementById('contactSubject') as HTMLInputElement
      c.disabled = false
      c = document.getElementById('contactMessage') as HTMLInputElement
      c.disabled = false
    }
  }

  function messageClick(event: any){
    const i = document.querySelector('#contactSubject') as HTMLInputElement
    if(i.disabled && event.target.type != undefined && event.target.type.includes('text')){
      setError('select a topic')
      document.querySelector('#messageWrap')?.removeAttribute('onClick')
    }
  }

  async function prepMessage(){
    const top = document.querySelector('#topicSelector div.active')
    const sub = document.querySelector('#contactSubject') as HTMLInputElement
    const mes = document.querySelector('#contactMessage') as HTMLInputElement
    if((sub.value == undefined || sub.value == '') &&
       (mes.value == undefined || mes.value == '')){
      setError('subject and message can\'t be blank')
    }else if(sub.value == undefined || sub.value == ''){
      setError('subject can\'t be blank')
    }else if(mes.value == undefined || mes.value == ''){
      setError('message can\'t be blank')
    } else {
      await sendMessage(
        artist.email,
        top?.textContent || '',
        sub.value,
        mes.value
      ).then((res)=>{
        if(!res){
          (document.querySelector('#contactButton') as HTMLButtonElement).innerHTML = 'EMAIL NOT SET UP'
        }
      })
    }
  }

  return (
    <div className={`${className} block text-center pt-0 px-0 pb-8 ${separateTab? 'relative bg-white mt-3 mx-6 mb-0 text-center w-10/12 min-h-184 pt-0 px-0 pb-16' : ''}`}>
      <div className="block pt-20 px-16 pb-16">
        Select a message topic:
      </div>
      <div id="topicSelector" className="relative inline-flex items-center h-36 py-9 px-16 border-box rounded-3xl border-1 border-solid border-black m-2">
        <div onClick={selectTopic}>Collab</div>
        <div onClick={selectTopic}>Business</div>
        <div onClick={selectTopic}>Other</div>
      </div>
      <div id="messageWrap" className="mt-32 mx-6 mb-36;" onClick={messageClick}>
        <input className="border-box rounded-none border-1 border-solid border-black w-full outline-0 placeholder:text-slate-400 disabled:text-slate-300 disabled:placeholder:text-slate-300 px-3 py-3.5" type="text" placeholder="Subject" id="contactSubject" disabled autoComplete="off"/>
        <div className="h-12 border-1 border-dashed border-l-gray-400 border-r-gray-400"/>
        <textarea className="text-black border-box rounded-none border-1 border-solid border-black outline-none w-full placeholder:text-slate-400 disabled:text-slate-300 disabled:placeholder:text-slate-300 p-4 min-h-80 align-top resize-y leading-9 whitespace-normal	overflow-auto" placeholder="Message" id="contactMessage" disabled/>
      </div>
      <div className="text-center text-red-500 h-7 mb-6">
        {
          error==undefined||error==''?
            '':
            'Error: '+error
        }
      </div>
      <Button onClick={prepMessage} id="contactButton">
        contact
      </Button>
      { separateTab?
        ''
        :
        (
          <div className="inline-block mt-16 mx-auto mb-0 before:content-[''] before:bg-[url('/extarrow.png')] before:h-3 before:w-16 before:mr-4 before:bg-center before:bg-auto before:bg-no-repeat" onClick={onClick}>Back to artist info</div>
        )
      }
    </div>
  )
}

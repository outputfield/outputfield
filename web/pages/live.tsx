import React, { useState, useEffect, useRef } from "react";
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content";
import styles from "../components/live/live.module.scss";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";


declare module 'react'{
  interface IframeHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    frameborder?:any;
    allowfullscreen?:any;
  }
}

const Live = (props) => {
  const { pageData } = props;

  const [live, setLive] = useState(pageData.live);
  const liveRef = useRef(live);
  const [message, setMessage] = useState("");
  const messageRef = useRef(message);

  let donation = false;
  const donationtimer = useRef(null) as any;
  const video = useRef(null) as any;

  function init(){
    startDonation();
  }

  function startDonation(){
    if(!donation){
      setTimeout(()=>{
        updateDonation();
        donationtimer.current = setInterval(()=>{updateDonation()},15000);
      },2500);
      donation = true;
    }
  }

  async function updateDonation(){
    const parse = require('html-react-parser');
    const r = await getPageContent("live") as any;
    let m = parse(r.message.map((t,i)=>{
      return t.split("\n").join("<br/>");
    }).join("<br/>"));
    setMessage(m);
    messageRef.current = m;
    if(!liveRef.current){
      setLive(r.live);
      liveRef.current = r.live;
    }
  }

  useEffect(() => {
    window.addEventListener('load', init);

    return () => {
      window.removeEventListener("load",init);
    }
  });

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {message != ""?
          <div className={styles.donation}>{message}</div>
          :
          <div className={styles.icon}><a href="../"><img src="live/favicon.png"/><br/>Output Field</a></div>
        }
        <div className={styles.video}>
          {live==true?
            <iframe ref={video} width="100%" height="100%" src={pageData.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            :
            <div className={styles.image}><img className={styles.illustration} src="live/Screen Shot 2021-03-23 at 7.38 1.png"/><img className={styles.inset} src="live/Screen Shot 2021-03-23 at 7.40 1.png"/></div>}
        </div>
        <div className={styles.detailgrid}>
          <div className={styles.detailtitle}>Critical Broadcast: Stop AAPI Hate Fundraiser</div>
          <div className={styles.detaildescription}>
            Insights from writers and activists that explore the challenges and rewards of naming political solidarity, and bridging theories of race to everyday life and acvtism. If you hear or see something that resonates, please consider donating. Your contibution will be doubled.<br/>
            <br/>
            From Anne Anlin Cheng’s recent call for a theory of the “yellow woman” to Grace Lee Boggs’ echoing insistence that we can only change society if we take responsibility for that change, we’ll be sharing voices that express the diversity of what it looks like to be political. Excavate the covert, subvert the inert. Jex Wang (Easter Margins) will conclude with an hour of ambient sound. Tracklist can be found <a href="https://soundcloud.com">here</a>.
          </div>
          <div className={styles.detailcredit}>
          Visuals by Alejandro Zhang<br/>
          Music by Jex Wang<br/>
          Curatied by Clelia Knox/Vivian Qiu
          </div>
          <div className={styles.detailbutton}>
            <a href="https://www.paypal.com/pools/c/8xZf4atFjK" target="_blank"><SignUpButton className={"livepage"} buttonText="DONATE"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}


Live.getInitialProps = async function (context) {
  try {
    const pageData = await getPageContent("live");
    console.log(pageData);
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event);
  }
};

export default Live;

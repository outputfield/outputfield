import Head from 'next/head';
import React, { useEffect, useRef, useState } from "react";
import { getErrorMessage } from "../api-client/errors";
import styles from "../components/live/live.module.scss";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import { getPageContent } from "./api/page-content";


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
    let m = "";
    if(r.message && r.message!=""){
      m = parse(r.message.map((t,i)=>{
        return t.split("\n").join("<br/>");
      }).join("<br/>"));
    }
    setMessage(m);
    messageRef.current = m;
    if(r.live != liveRef.current){
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



  const meta_title = "Output Field";
  const meta_description = "Critical Broadcast: Stop AAPI Hate Fundraiser";
  const meta_canonical = "https://outputfield.com/live";
  const meta_image = "https://outputfield.com/live/Screen_Donate.png";

  return (
    <div className={styles.root}>
      <Head>
        <style>{'html,body,#__next { background-color: #e5e5e5; }'}</style>
      	<meta property="og:title" content={meta_title}/>
      	<meta name="twitter:title" content={meta_title}/>
      	<meta itemProp="name" content={meta_title}/>
        <link rel="canonical" href={meta_canonical}/>
        <meta property="og:url" content={meta_canonical}/>
        <meta name="description" content={meta_description}/>
        <meta itemProp="description" content={meta_description}/>
        <meta property="og:description" content={meta_description}/>
        <meta name="twitter:description" content={meta_description}/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content=""/>
        <meta name="twitter:image" content={meta_image}/>
        <meta property="og:image" content={meta_image}/>
        <meta itemProp="image" content={meta_image}/>
        <meta property="og:image:alt" content={meta_title}/>
        <link rel="shortcut icon" href="https://outputfield.com/meta/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://outputfield.com/meta/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://outputfield.com/meta/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://outputfield.com/meta/meta/favicon-16x16.png"/>
      </Head>
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
            <div className={styles.image}><img className={styles.illustration} src="live/Screen_Donate.png"/></div>}
        </div>
        <div className={styles.detailgrid}>
          <div className={styles.detailtitle}>Critical Broadcast: Stop AAPI Hate Fundraiser</div>
          <div className={styles.detaildescription}>
          Insights from writers and activists that explore the challenges and rewards of naming political solidarity, and bridging theories of race to everyday life and activism. If you hear or see something that resonates, please consider donating. We will be matching donations until April 4th. Your contribution will be doubled and sent to <a href="https://stopaapihate.org/">Stop AAPI Hate</a>, a coalition addressing anti-Asian hate amid the pandemic.<br/>
          <br/>
          From Anne Anlin Cheng’s recent call for a theory of the “yellow woman” to Grace Lee Boggs’ echoing insistence that we can only change society if we take responsibility for that change, we’ll be sharing voices that express the diversity of what it looks like to be political. Excavate the covert, subvert the inert. Jex Wang (Easter Margins) will conclude with an hour of ambient sound.<br/>
          <br/>
          Full transcript with linked videos can be found <a href="https://www.notion.so/Critical-Broadcast-Info-7aa6cc9324054a7085369ea612714cc7">here</a>, along with the Jex's tracklist. Sign up for updates on other generative, critical, speculative events at <a href="http://outputfield.com/">outputfield.com</a>.
          </div>
          <div className={styles.detailcredit}>
          Organized by: <a href="https://www.vivianqiu.com/">Vivian Qiu</a><br/>
          Curated by: <a href="https://vimeo.com/user50752539">Clelia Knox</a><br/>
          Visuals by: <a href="https://www.instagram.com/alejandro_zhang/">Alejandro Jūnyáo Zhāng</a><br/>
          Sound by: <a href="https://www.instagram.com/asiangirlfriend/">Jex Wang</a>
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
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event as any);
  }
};

export default Live;

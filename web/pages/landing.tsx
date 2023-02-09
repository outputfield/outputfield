import axios from "axios";
import Head from 'next/head';
import React, { useEffect, useRef, useState } from "react";
import { getErrorMessage } from "../api-client/errors";
import colors from "../colors";
import styles from "../components/landingPage/index.module.scss";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import { TextInput } from "../components/text-input/text-input.component";
import { Text } from "../components/text/text.component";
import { getPageContent } from "./api/page-content";

const page = "Frontpage";

const models = [
  /*
    prepare glb file with https://modelviewer.dev/editor/

    name - name to reference in css to apply custom sizing/styling of div.renderWrap for a specific model
    src & poster - file names; have to be placed in "public/3d/" folder
      poster: 1) Go to camera icon, third tab. 
              2) Drag model into initial position. 
              3) Click "SAVE CURRENT AS INITIAL" 
              4) Go to two arrows icon, first tab. 
              5) Select 1080p and PNG. 
    orientation - "square", "landscape" or "portrait" to aid in page layout
      (explanation needed)
    cameraTarget,cameraOrbit,minCameraOrbit,maxCameraOrbit,minFieldOfView,maxFieldOfView - attributes from modelviewer
      cameraTarget:
        Under camera icon, third tab, note XYZ value under "Target Point".
      cameraOrbit:
        Note the "camera-orbit" attribute of the <model-viewer></model-viewer>
      minCameraOrbit,maxCameraOrbit:
        ???
      minFieldOfView / maxFieldOfView:
        Note the "field-of-view" attribute of the <model-viewer></model-viewer>
  */

  {
    name:"Candida_v02",
    src:"Candida_v02.glb",
    poster:"Candida_v02.png",
    orientation:"square",
    cameraTarget:"-37.95m 47.24m 5.71m",
    cameraOrbit:"-44.27deg 63.36deg 124.7m",
    minCameraOrbit:"517.3deg 74.65deg 269.1m",
    maxCameraOrbit:"auto 119deg auto",
    minFieldOfView:"45deg",
    maxFieldOfView:"45deg"
  }, 
  {
    name:"Corrompida1_v08",
    src:"Corrompida1_v08.glb",
    poster:"Corrompida1_v08.png",
    orientation:"landscape",
    cameraTarget:"0.72m 6.75m -0.12m",
    cameraOrbit:"-80.55deg 86.7deg 32.54m",
    minCameraOrbit:"-180deg 0deg auto",
    maxCameraOrbit:"180deg 180deg auto",
    minFieldOfView:"30deg",
    maxFieldOfView:"30deg"
  },
  {
    name:"Crawler2_v02",
    src:"Crawler2_v02.glb",
    poster:"Crawler2_v02.png",
    orientation:"landscape",
    cameraTarget:"0.07m 0.96m -0.44m",
    cameraOrbit:"76.02deg 90.35deg 11.37m",
    minCameraOrbit:"-180deg 0deg auto",
    maxCameraOrbit:"180deg 180deg auto",
    minFieldOfView:"30deg",
    maxFieldOfView:"30deg"
  },
  {
    name:"Downshifting",
    src:"Downshifting.glb",
    poster:"Downshifting.png",
    orientation:"landscape",
    cameraTarget:"-0.46m 0.31m 0.02m",
    cameraOrbit:"-103.9deg 88deg 8.087m",
    minCameraOrbit:"-180deg 0deg auto",
    maxCameraOrbit:"180deg 180deg auto",
    minFieldOfView:"30deg",
    maxFieldOfView:"30deg"
  },
  {
    name:"Fluid_v02",
    src:"Fluid_v02.glb",
    poster:"Fluid_v02.png",
    orientation:"landscape",
    cameraTarget:"0.08m 6.60m 0.02m",
    cameraOrbit:"-80.55deg 86.7deg 28.04m",
    minCameraOrbit:"-180deg 0deg auto",
    maxCameraOrbit:"180deg 180deg auto",
    minFieldOfView:"30deg",
    maxFieldOfView:"30deg"
  },
  {
    name:"Gluttony_v02",
    src:"Gluttony_v02.glb",
    poster:"Gluttony_v02.png",
    orientation:"portrait",
    cameraTarget:"-2.81m 80.26m -5.67m",
    cameraOrbit:"-80.55deg 86.7deg 436m",
    minCameraOrbit:"-180deg 0deg auto",
    maxCameraOrbit:"180deg 180deg auto",
    minFieldOfView:"30deg",
    maxFieldOfView:"30deg"
  },
  {
    name:"Quartz",
    src:"Quartz.glb",
    poster:"Quartz.png",
    orientation:"portrait",
    cameraTarget:"0.03m 1.45m 0.92m",
    cameraOrbit:"0deg 75deg 9.248m",
    minCameraOrbit:"-180deg 0deg auto",
    maxCameraOrbit:"180deg 180deg auto",
    minFieldOfView:"30deg",
    maxFieldOfView:"30deg"
  },
  
  // current model selection happens in getInitialProps
];


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}
declare module 'react'{
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // itemProp?:any;
  }
}

const Landing = (props) => {
  const { pageData } = props;
  const currentModel = pageData.currentModel;
  /**
  Resembles the landing page.
    */
  const [email, setRegisterData] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState("");


  const subscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    setState("loading");
    setError("");

    try {
      const response = await axios.post("/api/signup", { email });
      setState("success");
    } catch (event) {
      setError(getErrorMessage(event as any));
      setState("error");
    }
  };

  function scrollTo(e: any){
    let el = e.currentTarget as any;
    if(el!=null){
      el=el.getClientRects()[0];
      let origin = window.scrollY;
      let target = el.y + window.scrollY;
      let dist = el.y - 25;
      let speed = dist/window.innerHeight * 1500;
      let resolution = 300;
      for(let i = 0; i < resolution; i++){
        let y = (origin+dist*((Math.sin((i/resolution*Math.PI)-Math.PI/2)+1)/2));
        setTimeout(()=>{window.scrollTo(0,y)},i*speed/resolution);
      }
    }
  }

  function init(){
    highlight();
    startWords();
    focusInput();
  }

  let highlightFired = false, modelloaded = false;
  let padY = 2, padX = 2;
  let t, r;

  function highlight(){
    if(!highlightFired){
      t = document.getElementById("intro");
      r = document.createRange();
      if(t!=null){
        let el = t.children[0].childNodes[0];
        r.setStart(el, 0);
        r.setEnd(el, 12);
        let x = r.getClientRects();
        if(x[0].y > 0 && window.innerHeight > x[0].y+x[0].height+(2*padY)){
          let h = document.getElementById("highlight");
          if(h != null){
            t.children[0].appendChild(h);
            window.addEventListener('resize',sizeHighlight);
            showHighlight();
          }
        } else {
          window.addEventListener('scroll', highlight);
        }
      } else {
        setTimeout(highlight,50);
      }
    } else {
      window.removeEventListener('load', highlight);
      window.removeEventListener('scroll', highlight);
    }
  }

  function showHighlight(){
    if(!highlightFired){
      let txt = r.getClientRects()[0];
      highlightFired = true;
      let h = document.getElementById("highlight");
      if(h != null){
        h.style.left = "-"+padX+"px";
        h.style.top = "0px";
        h.style.height = txt.height+(2*padY)+"px";
        h.style.width = txt.width+(2*padX)+"px";
        h.style.backgroundSize= "100% 100%";
        h.style.backgroundPosition = "left";
        setTimeout(()=>{resetHighlight()},1500);
      }
    }
  };

  function sizeHighlight(){
    let h = document.getElementById("highlight");
    let txt = r.getClientRects()[0];
    if(h!=null && txt!=null){
      h.style.height = txt.height+(2*padY)+"px";
      h.style.width = txt.width+(2*padX)+"px";
    }
  }

  function resetHighlight(){
    let h = document.getElementById("highlight");
    if(h != null){
      h.style.backgroundSize= "0% 100%";
      h.style.backgroundPosition = "right";
      setTimeout(function(){
        if(h!=null){
          h.remove();
          window.removeEventListener('scroll', highlight);
          window.removeEventListener('resize', sizeHighlight);
        }
      },2000);
    }
  }

  let inputfocus = false;
  function focusInput(){
    if(!inputfocus){
      let i = document.querySelector("form input:first-of-type") as HTMLInputElement;
      if(i != null && i != undefined){
        let x = window.scrollX;
        let y = window.scrollY;
        i.focus();
        window.scrollTo(x,y);
        inputfocus = true;
      }
    }
  }

  const worddelay_initial = 3000, worddelay_subsequent = 1300;
  const words = ["collaborative", "subversive", "experimental", "critical", "speculative", "avant-garde"];
  const wordtimer = useRef(null) as any;
  let verbiage = false, wordcount = 0;

  function startWords(){
    if(!verbiage){
      setTimeout(()=>{
        nextWord();
        wordtimer.current = setInterval(nextWord,worddelay_subsequent);
      },worddelay_initial);
      verbiage = true;
    }
  }

  function nextWord(){
    let target = document.getElementById("exhibitionVerbs");
    if(target!=null && wordtimer.current != null){
      wordcount = (wordcount+1)%words.length;
      target.innerHTML = words[wordcount];
    }
  }

  function keypress(e){
    if(modal != "" && e.key == "Escape"){
      setModal("");
    }
  }

  function removemodeloutline(){
    if(!modelloaded){
      let mv = document.querySelector("#modelViewer") as any;
      if(mv != null && mv.shadowRoot != null){
        let s = document.createElement("style");
        s.innerHTML = "*.focus-visible, *, *:focus, *:focus-visible, *:hover, *:active, div.container:focus, div.container:focus-visible, div.container:hover, div.container:active{ outline: none !important; outline-width: 0 !important; border: none !important; box-shadow: none !important; -moz-box-shadow: none !important; -webkit-box-shadow: none !important;}";
        let sr = mv.shadowRoot;
        if(sr != null){
          mv.shadowRoot.appendChild(s);
        }
        modelloaded = true;
      } else {
        setTimeout(removemodeloutline,100);
      }
    }
  }

  function modalClick(e){
    let select = window.getSelection() || document.getSelection();
    if(select == null || select.toString() == "" || e.target.textContent.indexOf(select.toString()) == -1){
      let copy = document.querySelector("#modalWrap p:nth-of-type(2)") as any;
      if(copy != null){
        const el = document.createElement("textarea");
        el.innerHTML = pageData.email;
        el.classList.add(styles.copy);
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        copy.style.display = "block";
      }
    }
    e.stopPropagation();
  }

  useEffect(() => {
    window.addEventListener('load', init);

    let mv = document.querySelector("#modelViewer") as any;
    mv?.addEventListener("load",removemodeloutline);

    window.addEventListener("keydown",keypress);

    return () => {
      window.removeEventListener("load",init);
      mv?.removeEventListener("load",removemodeloutline);
      window.removeEventListener("scroll", highlight);
      window.removeEventListener("resize", sizeHighlight);
      window.removeEventListener("keydown",keypress);
    }
  });

  const isError = state === "error";

  const meta_title = "Output Field";
  const meta_description = "Breach the canon";
  const meta_canonical = "https://outputfield.com";
  const meta_image = "https://outputfield.com/meta/social.png";

  return (
    <div>
      <Head>
        <title>{meta_title}</title>
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
        <link rel="shortcut icon" href={meta_canonical+"/meta/favicon.ico"}/>
        <link rel="apple-touch-icon" sizes="180x180" href={meta_canonical+"/meta/apple-touch-icon.png"}/>
        <link rel="icon" type="image/png" sizes="32x32" href={meta_canonical+"/meta/favicon-32x32.png"}/>
        <link rel="icon" type="image/png" sizes="16x16" href={meta_canonical+"/meta/favicon-16x16.png"}/>
      </Head>
      <div className={`${styles.modal} ${modal!=""?styles.modalActive:""}`} onClick={(e)=>{setModal("")}}>
        <div className={styles.modalWrap} onClick={modalClick} id="modalWrap">
          <Text size={"T1"}>
            {pageData.email}
          </Text>
          <Text size={"T3"}>
            Copied to your clipboard!
          </Text>
        </div>
      </div>
      <div className={styles.highlight} id="highlight"/>
      <div className={`${styles.main} ${modal!=""?styles.modalActive:""}`}>
        <div className={styles.navWrap}>
          <div className={styles.nav} id="nav">
            <Text size={"H1"} color={colors.primary} textAlign="right" parseHtml={true}>
              <a onClick={(event)=>{setModal("email")}} className={"navLink"}>Mail</a>
              {", "}
              <a href={pageData.instagram} className={"navLink"} target="_blank">Instagram</a>
              {", "}
              <a href={pageData.donate} className={"navLink"} target="_blank">Donate</a>
            </Text>
          </div>
          <a className={styles.downArrow} onClick={function(e){scrollTo(e)}}><div/></a>
        </div>

        <div className={`${styles.render} ${styles[models[currentModel].orientation]}`}>
          <div className={`${styles.renderWrap} ${styles[models[currentModel].orientation]}`}><script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
            <model-viewer src={"3d/"+models[currentModel].src} poster={"3d/"+models[currentModel].poster} auto-rotate camera-controls camera-target={models[currentModel].cameraTarget} camera-orbit={models[currentModel].cameraOrbit} min-camera-orbit={models[currentModel].minCameraOrbit} max-camera-orbit={models[currentModel].maxCameraOrbit} min-field-of-view={models[currentModel].minFieldOfView} max-field-of-view={models[currentModel].maxFieldOfView} interaction-prompt="none" style={{"--poster-color":colors.backgroundGrey}} id="modelViewer" data-js-focus-visible>
              <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
              </div>
            </model-viewer>
          </div>
          <a className={styles.downArrow} onClick={function(e){scrollTo(e)}}><div/></a>
        </div>

        <div className={styles.intro} id="intro">
          {pageData.introduction.map((t, i) => {
            return <Text key={i} size={"H1"}>{t}</Text>;
          })}
          <Text size={"H1"}/>
          <Text size={"H1"} parseHtml={true}>
              We {
                pageData.exhibition !== "" ?
                (<a href={pageData.exhibition}>exhibit</a>)
                :
                ("exhibit")
              }
              {(" ")}work that is <span id="exhibitionVerbs" className={styles.exhibitionVerbs}>collaborative</span>
          </Text>
          <a className={styles.downArrow} onClick={function(e){scrollTo(e)}}><div/></a>
        </div>

        <form className={styles.signUpForm} onSubmit={subscribe}>
          <TextInput
            label={
              state === "success" ?
              "You’re all signed up! <br/>Follow us on Instagram too!"
              : "Sign up for launch updates"
            }
            onChange={(event) => {
              setRegisterData(event.target.value);
              if (isError || event.target.value.length == 0) {
                setState("");
              } else {
                setState("typing");
              }
            }}
            onFocus={(event) => {
              setState("focus");
            }}
            onBlur={(event) => {
              if (event.target.value.length == 0){
                setState("");
              }
            }}
            placeholder={"youremail@email.com"}
            invalid={isError}
            errorMessage={isError && error ? error : undefined}
            state={state}
            aria-label={"Email"}
            aria-required={true}
          />
          <SignUpButton className={state=="typing"||state=="loading"?"typing":""} buttonText="sign up"/>
        </form>

      </div>
      <script> </script> {/*chrome form transition bug fix*/}
    </div>
  );
};

Landing.getInitialProps = async function (context) {
  try {
    // Use raw sanity query here because `getInitialProps` runs on the server.
    // This does not expose the key to the client
    const pageData = await getPageContent(page)
    pageData.currentModel = Math.floor(Math.random() * models.length);
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event as any);
  }
};

export default Landing;

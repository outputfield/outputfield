import axios from "axios";
import React, { useState,useEffect } from "react";
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content"
import colors from "../colors";
import styles from "../components/landingPage/index.module.scss";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import { TextInput } from "../components/text-input/text-input.component";
import { Text } from "../components/text/text.component";

const page = "Frontpage";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

const Landing = (props) => {
  const { pageData } = props;
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
      setError(getErrorMessage(event));
      setState("error");
    }
  };

  function scrollTo(e: any){
    let el = e.currentTarget as any;
    if(el!=null){
      el=el.getClientRects()[0];
      console.log({ely: el.y, win: window.scrollY});
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
        setTimeout(()=>{resetHighlight()},2500);
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

  const worddelay_initial = 3000, worddelay_subsequent = 1300;
  const words = ["collaborative", "subversive", "experimental", "critical", "speculative", "avant-garde"];
  let verbiage = false, wordcount = 0, wordtimer;

  function nextWord(){
    let target = document.getElementById("exhibitionVerbs");
    if(target!=null){
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
    console.log("removemodeloutline");
    let mv = document.querySelector("#modelViewer") as any;
    if(mv!=null){
      let s = document.createElement("style");
      s.innerHTML = "*.focus-visible, *, *:focus, *:focus-visible, *:hover, *:active, div.container:focus, div.container:focus-visible, div.container:hover, div.container:active{ outline: none !important; outline-width: 0 !important; border: none !important; box-shadow: none !important; -moz-box-shadow: none !important; -webkit-box-shadow: none !important;}";
      let sr = mv.shadowRoot;
      if(sr != null){
        mv.shadowRoot.appendChild(s);
      }
    }
  }

  function modalClick(e){
    let select = window.getSelection() || document.getSelection();
    if(select == null || select.toString() == "" || e.target.textContent.indexOf(select.toString()) == -1){
      window.open((modal=="email"?"mailto:":"")+pageData[modal]);
    }
    e.stopPropagation();
  }

  useEffect(() => {
    if(!highlightFired){
      window.addEventListener('load', highlight);
    }

    if(!modelloaded){
      let mv = document.querySelector("#modelViewer") as any;
      mv.addEventListener("load",removemodeloutline);
      modelloaded = true;
    }

    if(!verbiage){
      verbiage = true;
      setTimeout(()=>{
        nextWord();
        clearTimeout(wordtimer);
        wordtimer = setInterval(nextWord,worddelay_subsequent);
      },worddelay_initial);
    }

    //https://stackoverflow.com/questions/54948840/how-to-pause-settimeout-when-leaving-the-window-with-javascript
    function changefocus() {
      if (document.hidden || document["mozHidden"] || document["webkitHidden"] || document["msHidden"]) {
        clearTimeout(wordtimer);
      } else {
        wordtimer = setInterval(nextWord,worddelay_subsequent);
      }
    }

    let prefix = "";
    if (typeof document["mozHidden"] !== "undefined") prefix = "moz";
    else if (typeof document["msHidden"] !== "undefined") prefix = "ms";
    else if (typeof document["webkitHidden"] !== "undefined") prefix = "webkit";

    document.addEventListener(prefix+"visibilitychange", changefocus, false);


    window.addEventListener("keydown",keypress);

    return () => {
      window.removeEventListener('scroll', highlight);
      window.removeEventListener('resize', sizeHighlight);
      window.removeEventListener("keydown",keypress);
    }
  });

  const isError = state === "error";


  return (
    <div>
      <div className={`${styles.modal} ${modal!=""?styles.modalActive:""}`} onClick={(e)=>{setModal("")}}>
      {modal!="" &&
        <div className={styles.modalWrap} onClick={modalClick}>
        {modal == "email" &&
          <Text size={"T1"}>
            {pageData.email}
          </Text>
        }
        {modal == "instagram" &&
          <Text size={"T1"}>
            @{(pageData.instagram).split("instagram.com/")[1]}
          </Text>
        }
        {modal == "discord" &&
          <Text size={"T1"}>
            {pageData.discord}
          </Text>
        }
        </div>
      }
      </div>
      <div className={styles.highlight} id="highlight"/>
      <div className={`${styles.main} ${modal!=""?styles.modalActive:""}`}>
        <div className={styles.navWrap}>
          <div className={styles.nav} id="nav">
            <Text size={"H1"} color={colors.primary} textAlign="right" parseHtml={true}>
              <a onClick={(event)=>{setModal("email")}}>Mail</a>
              {", "}
              <a onClick={(event)=>{setModal("instagram")}}>Instagram</a>
              {", "}
              <a onClick={(event)=>{setModal("discord")}}>Discord</a>
            </Text>
          </div>
          <a className={styles.downArrow} onClick={function(e){scrollTo(e)}}><div/></a>
        </div>

        <div className={styles.render}>
          <div className={styles.renderWrap}>
            <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
            <model-viewer src="3d/baggie_new.glb" poster="3d/baggie_new.png" auto-rotate camera-controls camera-target="0m -0.05m -3.882e-11m" camera-orbit="-49.91deg 75.65deg 3.306m" min-camera-orbit="auto auto 3.306m" max-camera-orbit="auto auto auto" min-field-of-view="45deg" max-field-of-view="45deg" interaction-prompt="none" style={{"--poster-color":colors.backgroundGrey}} id="modelViewer">
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
          {pageData.exhibition !== "" ? (
            <Text size={"H1"} parseHtml={true}>
              We <a href={pageData.exhibition}>exhibit</a> work that is <span id="exhibitionVerbs">collaborative</span>
            </Text>
          ) : (
            <Text size={"H1"}>We exhibit work that is collaborative</Text>
          )}
          {/*<br/><br/><Text size={"H1"} parseHtml={true}>
          this is a test <a href='#'>of a multiline link. there are several words to take up at least one line of the paragraph</a> and then some more text here
          </Text>*/}
          <a className={styles.downArrow} onClick={function(e){scrollTo(e)}}><div/></a>
        </div>

        <form className={styles.signUpForm} onSubmit={subscribe}>
          <TextInput
            label={
              state === "success" ?
              "You’re all signed up! Sign up a friend?"
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
            placeholder={"you@email.com"}
            invalid={isError}
            errorMessage={isError && error ? error : undefined}
            state={state}
            aria-label={"Email"}
            aria-required={true}
          />
          {state == "typing" || state == "loading" ? (
            <SignUpButton className={"typing"} buttonText="sign up"/>
          ) : (
            <SignUpButton buttonText="sign up"/>
          )}

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
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event);
  }
};

export default Landing;

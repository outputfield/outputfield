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
  let padY = 2, padX = 10;
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

  function keypress(e){
    if(modal != "" && e.key == "Escape"){
      setModal("");
    }
  }

  function modalClick(e){
    let select = window.getSelection() || document.getSelection();
    if(select == null || select.toString() == "" || e.target.textContent.indexOf(select.toString()) == -1){
      window.open((modal=="email"?"mailto:":"")+pageData[modal]);
    }
    e.stopPropagation();
  }

  let demoload = false;
  let words = [] as string[], wordcount = 0, wordtimer;
  function slider(id){
    let a = document.getElementById(id) as HTMLInputElement;
    let b = document.getElementById(id+"_label");
    if(b!=null){
      b.innerHTML = a.value+(Math.floor(parseFloat(a.value))==parseFloat(a.value)?".0":"")+" s";
    }
  }
  function verbiage():string[]{
    let words = document.getElementById("wordoptions") as HTMLTextAreaElement;
    let tokclean = [] as string[];
    if(words!=null){
      let tok = words.value.split(",");
      for(let i = 0; i < tok.length ; i++){
        if(tok[i].trim()!="")tokclean.push(tok[i].trim());
      }
    }
    return tokclean;
  }
  function startverbs(cleantime=1000){
    clearTimeout(wordtimer);
    words = verbiage();
    wordcount = 0;
    let target = document.getElementById("exhibitionVerbs");
    if(target != null && words.length>0){
      target.innerHTML = "";
      target.style.transition = "opacity 0ms";
      target.classList.remove(styles.clear);
      wordtimer = setTimeout(()=>{
        if(target!=null)target.innerHTML = words[0];
        let st = document.getElementById("verb_initial") as HTMLInputElement, time = 1;
        if(st!=null){
          time = parseFloat(st.value) * 1000;
        }
        console.log("inital display time: "+time);
        wordtimer = setTimeout(nextWord,time);
      },cleantime);
    }
  }
  function nextWord(){
    let sw_el = document.getElementById("verb_switch") as HTMLInputElement;
    let dis_el = document.getElementById("verb_subsequent") as HTMLInputElement;
    let target = document.getElementById("exhibitionVerbs");
    if(sw_el!=null && dis_el!=null && target!=null){
      console.log("  inside nextword nullcheck");
      let sw = parseFloat(sw_el.value)*500;
      let dis = parseFloat(dis_el.value)*1000;
      target.style.transition = "opacity "+sw+"ms";
      target.classList.add(styles.clear);
      wordtimer = setTimeout(()=>{
        if(target!=null){
          console.log({words:words,wordcount:wordcount});
          wordcount = (wordcount+1)%words.length;
          target.innerHTML = words[wordcount];
          target.classList.remove(styles.clear);
          wordtimer = setTimeout(nextWord,dis);
        }
      },sw);
    }

  }

  useEffect(() => {
    if(!highlightFired){
      window.addEventListener('load', highlight);
    }

    if(!modelloaded){
      let mv = document.querySelector("#modelViewer") as any;
      if(mv!=null){
        let s = document.createElement("style");
        s.innerHTML = "div.userInput{ outline: none !important; border: none !important; }";
        let sr = mv.shadowRoot;
        if(sr != null){
          mv.shadowRoot.appendChild(s);
        }
      }
      modelloaded = true;
    }

    if(!demoload){
      let sliders = ["verb_initial","verb_switch","verb_subsequent"];
      sliders.forEach((id,i)=>{
        let a = document.getElementById(id) as HTMLInputElement;
        if(a!=null){
          if(i==0) a.value = "8";
          if(i==1) a.value = "2";
          if(i==2) a.value = "4";
          slider(id);
          a.addEventListener("input",()=>{slider(id)});
        }
      });
      let b = document.getElementById("wordoptions");
      if(b!=null){
        b.textContent = "collaborative, subversive, experimental, critical, speculative, avant-garde";
      }
      demoload = true;
      startverbs(0);
    }

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
      <div className={styles.verbiage}>
        <textarea rows={6} cols={35} style={{resize:"none"}} id="wordoptions">
        </textarea>
        <label>initial display:</label><br/><input id="verb_initial" type="range" step="0.1" min="0" max="15"/><div className={styles.valuereadout} id="verb_initial_label"/><br/>
        <label>switch speed:</label><br/><input id="verb_switch" type="range" step="0.1" min="0" max="10"/><div className={styles.valuereadout} id="verb_switch_label"/><br/>
        <label>subsequent display:</label><br/><input id="verb_subsequent" type="range" step="0.1" min="0" max="10"/><div className={styles.valuereadout} id="verb_subsequent_label"/><br/><br/>
        <button className={styles.verb_go} id="verb_go" onClick={()=>{startverbs(1000)}}>words !!</button>
      </div>
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
            <model-viewer src="3d/baggie.glb" poster="3d/baggie.png" auto-rotate camera-controls field-of-view="32deg" camera-target="0m -0.05m -3.882e-11m" min-camera-orbit="auto auto auto" max-camera-orbit="auto auto 3.306m" camera-orbit="-48.22deg 90deg 3.306m" interaction-prompt="none"  id="modelViewer">
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
              We <a href={pageData.exhibition}>exhibit</a> work that is <span className={styles.exhibitionVerbs} id="exhibitionVerbs"></span>
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
              if (isError) {
                setState("");
              }
            }}
            onFocus={(event) => {
              setState("typing");
            }}
            onBlur={(event) => {
              if (event.target.value.length == 0){
                setState("");
              }
            }}
            invalid={isError}
            errorMessage={isError && error ? error : undefined}
            state={state}
            aria-label={"Email"}
            aria-required={true}
          />
          {state == "typing" || state == "loading" ? (
            <SignUpButton className={"focus"} buttonText="sign up"/>
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

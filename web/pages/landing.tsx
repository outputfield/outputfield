import axios from "axios";
import React, { useState } from "react";
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content"
import colors from "../colors";
import styles from "../components/landingPage/index.module.scss";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import { TextInput } from "../components/text-input/text-input.component";
import { Text } from "../components/text/text.component";

const page = "Frontpage";

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

  const isError = state === "error";

  return (
    <div>
      {/*}<div style={{width:"200px",height:"50px",backgroundColor:"#0003",position:"fixed",bottom:"100px",left:"200px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #000",zIndex:1000}}>
        <a style={{textDecoration:"underline",color:colors.error}} onClick={()=>{setState("error");setError("Error Testing")}}>error test</a>
        <a style={{textDecoration:"underline",marginLeft:"25px",color:colors.primary}} onClick={()=>{setState("success")}}>success test</a>
      </div>*/}
      <div className={`${styles.modal} ${modal!=""?styles.modalActive:""}`} onClick={(event)=>{setModal("")}}>
        {modal == "email" &&
          <Text size={"T1"}><a href={`mailto:${pageData.email}`} onClick={(event)=>{event.stopPropagation()}}>{pageData.email}</a></Text>
        }
        {modal == "instagram" &&
          <Text size={"T1"}><a href={pageData.instagram} onClick={(event)=>{event.stopPropagation()}}>@{(pageData.instagram).split("instagram.com/")[1]}</a></Text>
        }
        {modal == "discord" &&
          <Text size={"T1"}><a href={pageData.discord} onClick={(event)=>{event.stopPropagation()}}>{pageData.discord}</a></Text>
        }
      </div>
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
        </div>

        <div className={styles.render}>
          <div className={styles.renderWrap}>
            <img src={pageData.images.render}/>
          </div>
        </div>

        <div className={styles.intro}>
          {pageData.introduction.map((t, i) => {
            return <Text key={i} size={"H1"}>{t}</Text>;
          })}
          <Text size={"H1"}/>
          {pageData.exhibition !== "" ? (
            <Text size={"H1"} parseHtml={true}>
              We <a href={pageData.exhibition}>exhibit</a> work that is collaborative
            </Text>
          ) : (
            <Text size={"H1"}>We exhibit work that is collaborative</Text>
          )}
          {/*<br/><br/><Text size={"H1"} parseHtml={true}>
          this is a test <a href='#'>of a multiline link. there are several words to take up at least one line of the paragraph</a> and then some more text here
          </Text>*/}
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

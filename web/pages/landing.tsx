import axios from "axios";
import React, { useState } from "react";
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content"
import colors from "../colors";
import { Cursor } from "../components/cursor/cursor.component";
import { Donut } from "../components/donut/donut.component";
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
    <Cursor color={colors.error} strokeLength={20}>
      <div className={styles.main}>

        <div className={styles.nav}>
          <Text text={'<a href="mailto:' +
          pageData.email +
          '">Mail</a>, <a href="'+
          pageData.instagram+
          '">Instagram</a>, Discord'} size={"H1"} html={true} color={colors.primary} textAlign="right" />
        </div>

        <div className={styles.render}>
          <div className={styles.renderWrap}>
            <img src={pageData.images.render}/>
          </div>
        </div>

        <div className={styles.intro}>
          {pageData.introduction.map((t, i) => {
            return <Text text={t} key={i} size={"H1"} />;
          })}
          <Text text="" size={"H1"} />
          {pageData.exhibition !== "" ? (
            <Text
            text={
              'We <a href="' +
              pageData.exhibition +
              '">exhibit</a> work that is collaborative'
            }
            size={"H1"}
            html={true}
            />
          ) : (
            <Text text={"We exhibit work that is collaborative"} size={"H1"} />
          )}
        </div>

        <form className={styles.signUpForm} onSubmit={subscribe}>
          <TextInput
            label={"Sign up for launch updates"}
            onChange={(event) => {
              setRegisterData(event.target.value);
              if (isError) {
                setState("");
              }
            }}
            invalid={isError}
            errorMessage={isError && error ? error : undefined}
            aria-label={"Email"}
            aria-required={true}
          />
          {state === "success" && (
            <Text
              text="Subscribing successful. Stay tuned."
              color={colors.success}
              size="H2"
              marginTop={10}
            />
          )}

          <SignUpButton buttonText="sign up"/>
        </form>

      </div>
      <script> </script> {/*chrome form transition bug fix*/}
    </Cursor>
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

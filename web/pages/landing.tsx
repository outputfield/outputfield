import axios from "axios";
import React, { useState } from "react";
import { getErrorMessage } from "../api-client/errors";
<<<<<<< HEAD
import { sendSignup, SignupRequest } from "../api-client/signup";

import { Input, Label, SignUpForm, Intro } from "../components/landingPage";
import styles from "../components/landingPage/index.module.scss";
import { Text } from "../components/text/text.component";
=======
import colors from "../colors";
>>>>>>> 2688c62684227812b0d4626ed895ba931af3bc4b
import { Cursor } from "../components/cursor/cursor.component";
import { Donut } from "../components/donut/donut.component";
import { Intro, SignUpForm } from "../components/landingPage";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
<<<<<<< HEAD

const Landing = () => {
=======
import { TextInput } from "../components/text-input/text-input.component";
import { Text } from "../components/text/text.component";

const page = "Frontpage";

const Landing = (props) => {
  const { pageData } = props;
>>>>>>> 2688c62684227812b0d4626ed895ba931af3bc4b
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
    <Cursor color="#FF0000" strokeLength={20}>
      <Intro>
<<<<<<< HEAD
        <Text
          text="Output Field is a virtual space for collaboration and experimentation. It is a digital showcase and directory of artists across disciplines, platforms, and time zones. We are a placeless collective reframing our creative practice by fusing mediums."
          size="H1"
          marginBottom={72}
        />
        <Text text="We exhibit work that is collaborative." size="H1" />
      </Intro>
      <Donut text="OUTPUT FIELD" />
      <SignUpForm onSubmit={subscribe}>
        <Input
          value={email}
          type="text"
          onChange={(event) => setRegisterData(event.target.value)}
        ></Input>
        <Text text="Sign up for launch updates" size="H2" marginTop={47} />
        {/* please remove the marginLeft={140} once the textInput component is styled/done */}
        <SignUpButton buttonText="sign up" width={240} marginLeft={140} />
=======
        {pageData.introduction.map((t) => {
          return <Text text={t} size={"H1"} />;
        })}
      </Intro>
      <Donut text="OUTPUT FIELD" />
      <SignUpForm onSubmit={subscribe}>
        <TextInput
          label={"Sign up for launch updates"}
          onChange={(event) => setRegisterData(event.target.value)}
          invalid={isError}
          errorMessage={isError && error ? error : undefined}
        />
        {state === "success" && (
          <Text
            text="Subscribing successful. Stay tuned."
            color={colors.success}
            size="H2"
            marginTop={10}
          />
        )}

        <SignUpButton buttonText="sign up" marginLeft={450} marginTop={-100} />
>>>>>>> 2688c62684227812b0d4626ed895ba931af3bc4b
      </SignUpForm>
      <script> </script> {/*chrome form transition bug fix*/}
    </Cursor>
  );
<<<<<<< HEAD
=======
};

Landing.getInitialProps = async function (context) {
  try {
    const response = await axios.get(
      `${
        context.req !== undefined ? process.env.SERVER_URI : ""
      }/api/page-content`,
      { params: { page: page } }
    );
    return { pageData: response.data };
  } catch (event) {
    throw getErrorMessage(event);
  }
>>>>>>> 2688c62684227812b0d4626ed895ba931af3bc4b
};
export default Landing;

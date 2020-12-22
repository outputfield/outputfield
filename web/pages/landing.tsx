import React, { useState } from "react";
import axios from "axios";
import { getErrorMessage } from "../api-client/errors";
import { sendSignup, SignupRequest } from "../api-client/signup";
import {
  Input,
  Label,
  Signupbutton,
  SignUpForm,
  Intro,
} from "../components/landingPage";
import styles from "../components/landingPage/index.module.scss";
import { Text } from "../components/text/text.component";
import { Cursor } from "../components/cursor/cursor.component";
import { Donut } from "../components/donut/donut.component";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import colors from "../colors";

const page = "Frontpage";

const Landing = (props) => {
  const {
    pageData
  } = props
  /**
  Resembles the landing page.
    */
  const [email, setRegisterData] = useState("");
  const [state, setState] = useState("IDLE");
  const [error, setError] = useState(null);

  const subscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    setState("loading");
    setError(null);

    try {
      const response = await axios.post("/api/signup", { email });
      setState("success");
    } catch (event) {
      setError(getErrorMessage(event));
      setState("error");
    }
  };

  return (
    <Cursor color="#FF0000" strokeLength={20}>
      <Intro>{pageData.introduction.map((t)=>{return <Text text={t} size={"H1"}/>})}</Intro>
      <Donut text="OUTPUT FIELD"/>
      <SignUpForm onSubmit={subscribe}>
        <Input
          value={email}
          type="text"
          onChange={(event) =>
            setRegisterData(event.target.value)
          }
        ></Input>
        <Text text="Sign up for launch updates" size="H2" marginTop={47} />
        <SignUpButton buttonText="sign up" marginLeft={450} marginTop={-100}/>
      </SignUpForm>
      <script> </script> {/*chrome form transition bug fix*/}
    </Cursor>

  )
};

Landing.getInitialProps = async function (context) {
  try{
    const response = await axios.get(`${context.req !== undefined?process.env.SERVER_URI:""}/api/page-content`,{params:{page:page}});
    return {pageData: response.data};
  } catch (event) {
    throw getErrorMessage(event);
  }
}
export default Landing;

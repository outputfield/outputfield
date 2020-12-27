import axios from "axios";
import React, { useState } from "react";
import { getErrorMessage } from "../api-client/errors";
import colors from "../colors";
import { Cursor } from "../components/cursor/cursor.component";
import { Donut } from "../components/donut/donut.component";
import { Intro, SignUpForm } from "../components/landingPage";
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
      <Intro>
        <Text text={pageData.introduction[0]} size={"H1"} marginBottom={80} />
        <Text text={pageData.introduction[2]} size={"H1"} marginBottom={80} />
        {/* can't do the following... the layout/style doesnt work due to pageData.introduction[1] is an empty string...
        thus, need to remove that in Sanity}

        {pageData.introduction.map((t) => {
          return <Text text={t} size={"H1"} marginBottom={80} />;
        })} */}
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
      </SignUpForm>
      <script> </script> {/*chrome form transition bug fix*/}
    </Cursor>
  );
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
};
export default Landing;

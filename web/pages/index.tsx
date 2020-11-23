import SignUp from "./SignUp/SignUpPage";
import Link from "next/link";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";

export const Index = () => {
  return (
    <p>
      <Link href="./SignUp/SignUpPage">
        <SignUpButton buttonText="sign up" />
      </Link>
    </p>
  );
};

export default Index;

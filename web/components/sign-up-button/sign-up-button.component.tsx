import React from "react";
import {
  ISignUpButtonProps,
  ISignUpButtonStyles,
} from "./sign-up-button.model";
import { Text } from "../text/text.component";
import styles from "./sign-up-button.module.scss";

export const SignUpButton = ({
  buttonText,
  handleClick,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: ISignUpButtonProps) => {
  const signUpButtonStyles: ISignUpButtonStyles = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  return (
    <button
      className={styles.root}
      style={signUpButtonStyles}
      onClick={handleClick}
    >
      <div className={`${styles.buttonBorder} ${styles.buttonBorderFirst}`} />
      <div className={`${styles.buttonText} ${styles.buttonTextFirst}`}>
        <Text text={buttonText} size="T2" />
      </div>
      <div className={`${styles.buttonBorder} ${styles.buttonBorderSecond}`} />
      <div className={`${styles.buttonText} ${styles.buttonTextSecond}`}>
        <Text text={buttonText} size="T2" />
      </div>
    </button>
  );
};

import React from "react";
import { Text } from "../text/text.component";
import {
  ISignUpButtonProps,
  ISignUpButtonStyles,
} from "./sign-up-button.model";
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

  // TODO use context instead of this
  return (
    <button
      onMouseEnter={() => {
        document
          .getElementById("rotating-cursors")!
          .classList.add("signupHover");
      }}
      onMouseLeave={() => {
        document
          .getElementById("rotating-cursors")!
          .classList.remove("signupHover");
      }}
      className={styles.root}
      style={signUpButtonStyles}
      onClick={handleClick}
    >
      {/* we have to draw and separate out the border and the background fill for 2 reasons:
      1. we need a background fill so that the button 'covers' the background image
      2. we need to separate the fill and border bc we want to show the borders intersecting while not covering up circles */}
      <div className={`${styles.buttonFill} ${styles.buttonFillFirst}`} />
      <div className={`${styles.buttonFill} ${styles.buttonFillSecond}`} />
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

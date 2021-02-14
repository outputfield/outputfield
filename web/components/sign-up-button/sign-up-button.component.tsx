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
  className,
}: ISignUpButtonProps) => {
  const signUpButtonStyles: ISignUpButtonStyles = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  if (typeof className !== "undefined"){
    let c = " ";
    className.split(" ").forEach(e => {
      c += styles[e] + " ";
    });
    className = c;
  } else {
    className = "";
  }

  return (
    <button
      className={styles.root + className}
      style={signUpButtonStyles}
      onClick={handleClick}
      aria-label={"Submit email signup"}
    >
      {/* we have to draw and separate out the border and the background fill for 2 reasons:
      1. we need a background fill so that the button 'covers' the background image
      2. we need to separate the fill and border bc we want to show the borders intersecting while not covering up circles */}
      <div className={`${styles.buttonText} ${styles.buttonTextFirst}`}>
        <Text size="T2" textAlign="center" >{buttonText}</Text>
      </div>
      <div className={`${styles.buttonText} ${styles.buttonTextSecond}`}>
        <Text size="T2" textAlign="center" >{buttonText}</Text>
      </div>
      <div className={`${styles.buttonFill} ${styles.buttonFillFirst}`} />
      <div className={`${styles.buttonFill} ${styles.buttonFillSecond}`} />
      <div className={`${styles.buttonBorder} ${styles.buttonBorderFirst}`} />
      <div className={`${styles.buttonBorder} ${styles.buttonBorderSecond}`} />
    </button>
  );
};

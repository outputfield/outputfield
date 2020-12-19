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
  width,
}: ISignUpButtonProps) => {
  const signUpButtonStyles: ISignUpButtonStyles = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    //set the width of the button manually since we can't do width 100% due to complex positioning aka absolute and all the layer stacking we do
  };

  return (
    <button
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

import React from "react";
import { IStyles, ITextProps } from "./text.model";
import styles from "./text.module.scss";

export const Text = ({
  textAlign = "left",
  color,
  size,
  text,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: ITextProps) => {
  const textStyles: IStyles = {
    textAlign,
    color,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  const textClass = styles[size];

  if (size === "H1") {
    return (
      <h1 className={textClass} style={textStyles}>
        {text}
      </h1>
    );
  } else if (size === "H2") {
    return (
      <h2 className={textClass} style={textStyles}>
        {text}
      </h2>
    );
  } else {
    return (
      <p className={textClass} style={textStyles}>
        {text}
      </p>
    );
  }
};

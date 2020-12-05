import React from "react";
import { ITextProps, IStyles } from "./text.model";
import "./text.module.scss";
import classNames from "classnames";

export const Text = ({
  textAlign = "left",
  color = "inherit",
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

  const textClass = classNames("text", {
    test: size === "H1",
    H2: size === "H2",
    T1: size === "T1",
    T2: size === "T2",
    T3: size === "T3",
  });

  const result = () => {
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

  return result();
};

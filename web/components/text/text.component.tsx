import React from "react";
import { TextLink } from "../text-link/text-link.component";
import { IStyles, ITextProps } from "./text.model";
import styles from "./text.module.scss";

export const Text = ({
  textAlign = "left",
  color,
  size,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  parseHtml,
  children,
}: ITextProps) => {
  const textStyles: IStyles = {
    textAlign,
    color,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  if(parseHtml){
    const parse = require('html-react-parser');
    let newChildren = [] as any;

    if(children != null && Array.isArray(children)){
      let parsedText;
      for(let i = 0; i < children.length; i++){
        if(typeof children[i] == "string"){
          parsedText = parse(children[i]);
        } else {
          parsedText = children[i];
        }
        if(parsedText.type == "a"){
          parsedText = <TextLink
          key={i}
          url={parsedText.props.href}
          target={parsedText.props.target}
          size={size}
          onClick={parsedText.props.onClick}
          className={parsedText.props.className}
          >
           {parsedText.props.children}
          </TextLink>
        }
        newChildren[i] = parsedText;
      }
    }
    children = newChildren;
  }
  const textClass = styles[size] + (children==undefined||children==""?" "+styles.newline:"") + (parseHtml?" "+styles.markup:"");

  if (size === "H1") {
    return (
      <h1 className={textClass} style={textStyles}>
        {children}
      </h1>
    );
  } else if (size === "H2") {
    return (
      <h2 className={textClass} style={textStyles}>
        {children}
      </h2>
    );
  } else {
    return (
      <p className={textClass + " text-p"} style={textStyles}>
        {children}
      </p>
    );
  }
};

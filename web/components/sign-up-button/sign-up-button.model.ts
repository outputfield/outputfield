import { MouseEvent } from "react";

export interface ISignUpButtonProps {
  buttonText: string | JSX.Element;
  handleClick?: (e: MouseEvent) => void;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  className?: string;
}

export interface ISignUpButtonStyles {
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
}

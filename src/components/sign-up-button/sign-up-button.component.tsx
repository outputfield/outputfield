import React from 'react';
import {
  ISignUpButtonProps,
  ISignUpButtonStyles,
} from './sign-up-button.model';
import './sign-up-button.style.scss';

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
      className="sign-up-button"
      style={signUpButtonStyles}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

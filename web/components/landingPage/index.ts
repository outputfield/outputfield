import React from 'react';
import styled from 'styled-components';

export const SignUpForm = styled.form`
  align-items: center;
  position: fixed;
  left: 50px;
  bottom: 50px;
  height: 87px;
`;

export const Label = styled.label`
    position: absolute;
    top: 47px;
    width: 450px;
`;

export const Input = styled.input`
    font-size: 26px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    outline: none;
    border: none;
    background: none;
    border-bottom: 2px solid #fff;
    margin-bottom: 5px;
    padding: 0px 0px 5px 0px;
    height: 30px;
    color: #fff;
    font-family: sans-serif;
    width: 425px;
    caret-color: #ffff00;
    position: absolute;
    top: 10px;
    left: 0px;
`;

export const Signupbutton = styled.button`
    position: absolute;
    left: 450px;
    top: 0px;
    height: 87px;
    width: 200px;
    z-index: 10;
    border: none;
    background: black;

    &.ellipse {
      width: 196px;
      height: 83px;
      border-radius: 98px / 41px;
      border: 2px solid #ff0;
      position: absolute;
      top: 0px;
      left: 450px;
      transform-origin: center center;
      filter: blur(1px);
      transition: transform 1s ease, filter 1s ease;
    }

    &:hover .ellipse1 ellipse2 {
      transform: rotate(0deg);
      filter: blur(0px);
    }

    &:hover .signuptext1 .signuptext2 {
      transform: rotate(0deg);
      filter: blur(0px);
    }
`;

/*
export const Signupbutton = styled.button`
    position: absolute;
    left: 450px;
    top: 0px;
    height: 87px;
    width: 200px;
    z-index: 10;

    &.ellipse {
      width: 196px;
      height: 83px;
      border-radius: 98px / 41px;
      border: 2px solid #ff0;
      position: absolute;
      top: 0px;
      left: 450px;
      transform-origin: center center;
      filter: blur(1px);
      transition: transform 1s ease, filter 1s ease;
    }

    &:hover .ellipse1 {
      transform: rotate(0deg);
      filter: blur(0px);
    }

    &:hover .signuptext1 .signuptext2 {
      transform: rotate(0deg);
      filter: blur(0px);
    }
`;
*/

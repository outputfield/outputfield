import React from "react";
import styled from "styled-components";

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
  font-family: "Authentic Sans";
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: -0.01em;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  outline: none;
  border: none;
  background: none;
  border-bottom: 2px solid #000;
  margin-bottom: 5px;
  padding: 0px 0px 5px 0px;
  height: 30px;
  color: #000;
  width: 425px;
  caret-color: #ffff00;
  position: absolute;
  top: 10px;
  left: 0px;
  cursor: inherit;
`;

export const Intro = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 800px;
  z-index: 1;
  display: inline-flex;
  flex-direction: column;
`;

export const MessageForm = styled.div`
  position: absolute;
  top: -80px;
  left: 100px;
  font-family: serif;
  font-style: italic;
  font-size: 32px;
`;

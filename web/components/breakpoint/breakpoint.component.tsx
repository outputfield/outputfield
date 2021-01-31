import React from "react";
import { useMediaQuery } from 'react-responsive';

export const Breakpoint = ({
  size,
  children
}) => {
  const breakpoints = {
    mobile :            useMediaQuery({minWidth: 0,     maxWidth: 959}),
    mobileVertical :    useMediaQuery({minWidth: 0 ,    maxWidth: 799}),
    mobileHorizontal :  useMediaQuery({minWidth: 800,   maxWidth: 959 }),
    desktop :           useMediaQuery({minWidth: 960}),
    desktopSmall :      useMediaQuery({minWidth: 960,   maxWidth: 1179 }),
    desktopMedium :     useMediaQuery({minWidth: 1180,  maxWidth: 1439, minHeight: 760 }),
    desktopLarge :      useMediaQuery({minWidth: 1440 })
  }

  const sizes = size.split(" ");
  let toRender = false;
  for(let i=0;i<sizes.length;i++){
    toRender||=breakpoints[sizes[i]];
  }

  return (toRender ? children : "");
};

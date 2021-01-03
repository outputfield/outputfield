import React from "react";
import { useMediaQuery } from 'react-responsive';

export const Breakpoint = ({
  size,
  children
}) => {
  const breakpoints = {
    mobileVertical : useMediaQuery({minWidth: 0 }),
    mobileHorizontal : useMediaQuery({ minWidth: 800 }),
    desktopSmall : useMediaQuery({ minWidth: 960 }),
    desktopMedium : useMediaQuery({ minWidth: 1180, minHeight: 760 }),
    desktopLarge : useMediaQuery({ minWidth: 1440 })
  }

  const sizes = size.split(" ");
  let toRender = false;
  for(let i=0;i<sizes.length;i++){
    toRender||=breakpoints[sizes[i]];
  }

  return (toRender ? children : "");
};

import React from "react";
import { ICursorProps, ICursorStyles } from "./cursor.model";
import { CursorCrosshair } from "./cursorcrosshair.component";
import styles from "./cursor.module.scss";
import colors from "../../colors";

export const Cursor = ({
  color = colors.error,
  strokeLength = 20,
  children
}: ICursorProps) => {
  const cursorStyles: ICursorStyles = {
    color,
    strokeLength,
    children
  };

  return (
    <>
      <CursorCrosshair color={color} strokeLength={strokeLength}/>
      {children}
    </>
  );
};

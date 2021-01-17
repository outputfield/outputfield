import React from "react";
import ReactCursorPosition from "react-cursor-position";
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
    <ReactCursorPosition className={styles.cursorposition} mapChildProps={({position}) => {return{x: position.x, y: position.y};}}>
      <CursorCrosshair color={color} strokeLength={strokeLength}/>
      {children}
    </ReactCursorPosition>
  );
};

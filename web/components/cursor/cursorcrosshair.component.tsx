import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { ICursorCrosshairProps, ICursorCrosshairStyles } from "./cursorcrosshair.model";
import classNames from "classnames";
import styles from "./cursor.module.scss";

export const CursorCrosshair = ({
  color = "#FF0000",
  x = -10,
  y = -10,
  strokeLength = 20,
}: ICursorCrosshairProps) => {
  const cursorCrosshairStyles: ICursorCrosshairStyles = {
    color,
    x,
    y,
    strokeLength
  };

  return (
    <div className={styles.cursorwrapper}>
      <div className={styles.cursorx} style={{
        left: x - (typeof window!=="undefined"?window.pageXOffset:0) - 1,
        top: (y%strokeLength)-(strokeLength*1.7),
        background: `repeating-linear-gradient(0deg, ${color} 0px, ${color} ${strokeLength*0.6}px, #fff0 ${strokeLength*0.6}px, #fff0 ${strokeLength}px)`
      }} />
      <div className={styles.cursory} style={{
        left: (x%strokeLength)-(strokeLength*1.3),
        top: y - (typeof window!=="undefined"?window.pageYOffset:0) - 1,
        background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} ${strokeLength*0.6}px, #fff0 ${strokeLength*0.6}px, #fff0 ${strokeLength}px)`
      }} />
    </div>
  );
};

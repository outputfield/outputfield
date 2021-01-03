import React from "react";
import {
  ICursorCrosshairProps,
  ICursorCrosshairStyles,
} from "./cursorcrosshair.model";

const lineLength = 25;

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
    strokeLength,
  };

  return (
    <div
      id="rotating-cursors"
      className={"cursorContainer"}
      style={{
        zIndex: 10000,
        color: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        id="cursorLineA"
        className={"lineA"}
        style={{
          position: "relative",
          left: x - lineLength / 2,
          top: y,
          width: lineLength,
        }}
      ></div>
      <div
        id="cursorLineA"
        className={"lineB"}
        style={{
          position: "relative",
          left: x - lineLength / 2,
          top: y,
          width: lineLength,
        }}
      ></div>
      {/* props: {JSON.stringify({ color, x, y, strokeLength })}
      <div
        style={{
          position: "relative",
          left: x,
          top: y,
          background: "magenta",
          width: 10,
          height: 10,
        }}
      ></div> */}
    </div>
    // <div>
    //   <div className={styles.cursorx} style={{
    //     left: x - 1,
    //     top: (y%strokeLength)-(strokeLength*1.7),
    //     background: `repeating-linear-gradient(0deg, ${color} 0px, ${color} ${strokeLength*0.6}px, #fff0 ${strokeLength*0.6}px, #fff0 ${strokeLength}px)`
    //   }} />
    //   <div className={styles.cursory} style={{
    //     left: (x%strokeLength)-(strokeLength*1.3),
    //     top: y - 1,
    //     background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} ${strokeLength*0.6}px, #fff0 ${strokeLength*0.6}px, #fff0 ${strokeLength}px)`
    //   }} />
    // </div>
  );
};

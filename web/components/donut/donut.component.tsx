import React from "react";
import { IDonutProps, IDonutStyles } from "./donut.model";
import styles from "./donut.module.scss";
import colors from "../../colors";

export const Donut = ({
  text = "OUTPUT FIELD",
  color = colors.black,
  letterSpacing = 0.003,
}: IDonutProps) => {
  const cursorStyles: IDonutStyles = {
    text,
    color,
    letterSpacing,
  };

  const [over, setOver]=React.useState(false);

  const output = (text+" ").repeat(30);

  const size = 1500;
  const margin = 50;

  return (
    <svg className={`${styles.donut} ${over ? styles.clear:""}`} id="donut" viewBox={`0 0 ${size} ${size}`} width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path d={`M ${margin}, ${size/2} a ${(size/2)-margin}, ${(size/2)-margin} 0 1,1 ${size-(margin*2)},0 a ${(size/2)-margin}, ${(size/2)-margin} 0 1,1 -${size-(margin*2)},0 `}  fill="none" id="donutpath"/>
      <text className={styles.donuttext} style={{letterSpacing: letterSpacing + "em"}} onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}>
        <textPath xlinkHref="#donutpath">{output}</textPath>
      </text>
    </svg>
  );
};

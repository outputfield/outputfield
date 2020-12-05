import { storiesOf } from "@storybook/react";
import React, { CSSProperties } from "react";
import colors from "../colors";

export interface ColorSwatchProps {
  hexValue: string;
  colorKey: string;
}

const ColorSwatch = (props: ColorSwatchProps) => {
  const colorBlock: CSSProperties = {
    height: 150,
    width: 150,
    background: props.hexValue,
    float: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 20,
  };
  return (
    <div style={colorBlock}>
      <span style={{ paddingBottom: 3, fontSize: 14 }}>{props.colorKey}</span>
      <span style={{ fontSize: 12 }}>{props.hexValue}</span>
    </div>
  );
};

storiesOf("Colors", module).add("Color Palette", () => {
  return (
    <div>
      <div className="h1">Colors</div>
      <div>
        {Object.keys(colors).map((key) => (
          <ColorSwatch hexValue={colors[key]} colorKey={key} />
        ))}
      </div>
    </div>
  );
});

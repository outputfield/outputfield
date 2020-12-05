import React from "react";
import { Text } from "../components/text/text.component";
import { withKnobs, text, number, select } from "@storybook/addon-knobs";
import colors from "../colors";

/* eslint-disable */
export default {
  decorators: [withKnobs],
  title: "ui-kit/text",
};

export const TypeRamp = () => (
  <div>
    <Text
      size="H1"
      textAlign="left"
      text="Output Field is collaborative"
      color={colors.black}
    />
  </div>
);

import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import colors from "../colors";
import { Text } from "../components/text/text.component";

/* eslint-disable */
export default {
  decorators: [withKnobs],
  title: "ui-kit/text",
};

export const TypeRamp = () => (
  <div>
    <div>
      <Text
        size="H1"
        textAlign="left"
        color={colors.black}
      >
        Output Field is collaborative
      </Text>
    </div>
    <div>
      <Text
        size="H2"
        textAlign="left"
        color={colors.black}
      >
        Output Field is collaborative
      </Text>
    </div>
    <div>
      <Text
        size="T1"
        textAlign="left"
        color={colors.black}
      >
        Output Field is collaborative
      </Text>
    </div>
    <div>
      <Text
        size="T2"
        textAlign="left"
        color={colors.black}
      >
        Output Field is collaborative
      </Text>
    </div>
    <div>
      <Text
        size="T3"
        textAlign="left"
        color={colors.black}
      >
        Output Field is collaborative
      </Text>
    </div>
  </div>
);

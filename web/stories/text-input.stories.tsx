import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { TextInput } from "../components/text-input/text-input.component";

/* eslint-disable */
export default {
  decorators: [withKnobs],
  title: "ui-kit/text-input",
};

export const TypeRamp = () => (
  <div>
    <div>
      <TextInput label={"some label"} />
    </div>
  </div>
);
